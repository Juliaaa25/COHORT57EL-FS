package de.ait.javaproglessonspro59.service;

import de.ait.javaproglessonspro59.enums.CandidateDocType;
import de.ait.javaproglessonspro59.model.CandidateDocumentOs;
import de.ait.javaproglessonspro59.repository.CandidateDocumentOsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class CandidateDocumentOsService {

    private final CandidateDocumentOsRepository repository;

    @Value("${app.upload.candidate-docs-dir}")
    private String candidateDocsDir;

    public CandidateDocumentOsService(CandidateDocumentOsRepository repository) {
        this.repository = repository;
    }

    private static final List<String> ALLOWED_TYPES = List.of(
            "application/pdf",
            "image/jpeg",
            "image/png"
    );

    private static final long MAX_SIZE = 5 * 1024 * 1024;

    private void validate(String email, MultipartFile file, CandidateDocType docType) {
        if (email == null || email.isBlank() || !email.contains("@")) {
            log.warn("Rejected candidate upload: email={}, docType={}, filename={}, reason=invalid email",
                    email, docType, file != null ? file.getOriginalFilename() : null);
            throw new IllegalArgumentException("Invalid email");
        }

        if (file == null || file.isEmpty()) {
            log.warn("Rejected candidate upload: email={}, docType={}, filename={}, reason=empty file",
                    email, docType, null);
            throw new IllegalArgumentException("Empty file");
        }

        if (file.getSize() > MAX_SIZE) {
            log.warn("Rejected candidate upload: email={}, docType={}, filename={}, reason=file too large",
                    email, docType, file.getOriginalFilename());
            throw new IllegalArgumentException("File too large");
        }

        if (!ALLOWED_TYPES.contains(file.getContentType())) {
            log.warn("Rejected candidate upload: email={}, docType={}, filename={}, reason=invalid content type",
                    email, docType, file.getOriginalFilename());
            throw new IllegalArgumentException("Invalid file type");
        }
    }

    private String normalizeEmail(String email) {
        return email.replace("@", "at").replace(".", "_");
    }

    public CandidateDocumentOs upload(
            String candidateEmail,
            CandidateDocType docType,
            MultipartFile file
    ) {

        validate(candidateEmail, file, docType);

        String safeEmail = normalizeEmail(candidateEmail);

        Path baseDir = Paths.get(candidateDocsDir);
        Path targetDir = baseDir
                .resolve(safeEmail)
                .resolve(docType.name());

        try {
            Files.createDirectories(targetDir);

            String storedFilename =
                    UUID.randomUUID() + "_" + file.getOriginalFilename();

            Path targetPath = targetDir.resolve(storedFilename);

            Files.copy(file.getInputStream(), targetPath,
                    StandardCopyOption.REPLACE_EXISTING);

            CandidateDocumentOs doc = new CandidateDocumentOs(
                    candidateEmail,
                    docType,
                    file.getOriginalFilename(),
                    storedFilename,
                    file.getContentType(),
                    file.getSize(),
                    targetPath.toString(),
                    LocalDateTime.now()
            );

            return repository.save(doc);

        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }

    public List<CandidateDocumentOs> list(String candidateEmail) {
        return repository.findAllByCandidateEmail(candidateEmail);
    }

    public CandidateDocumentOs get(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Document not found: " + id));
    }

    public void delete(Long id) {
        CandidateDocumentOs doc = get(id);

        try {
            Files.deleteIfExists(Paths.get(doc.getStoragePath()));
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete file", e);
        }

        repository.deleteById(id);
    }
}
