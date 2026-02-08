package de.ait.javaproglessonspro59.controllers;

import de.ait.javaproglessonspro59.service.CandidateDocumentOsService;
import de.ait.javaproglessonspro59.enums.CandidateDocType;
import de.ait.javaproglessonspro59.model.CandidateDocumentOs;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/candidates/documents/os")
public class CandidateDocumentOsController {

    private final CandidateDocumentOsService service;

    public CandidateDocumentOsController(CandidateDocumentOsService service) {
        this.service = service;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<CandidateDocumentOs> upload(
            @RequestParam String candidateEmail,
            @RequestParam CandidateDocType docType,
            @RequestPart("file") MultipartFile file
    ) throws IOException {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.upload(candidateEmail, docType, file));
    }

    @GetMapping
    public List<CandidateDocumentOs> list(
            @RequestParam String candidateEmail
    ) {
        return service.list(candidateEmail);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<Resource> download(@PathVariable Long id)
            throws IOException {

        CandidateDocumentOs doc = service.get(id);
        Path path = Paths.get(doc.getStoragePath());

        Resource resource = new UrlResource(path.toUri());

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(doc.getContentType()))
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + doc.getOriginalFilename() + "\""
                )
                .body(resource);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id)
            throws IOException {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
