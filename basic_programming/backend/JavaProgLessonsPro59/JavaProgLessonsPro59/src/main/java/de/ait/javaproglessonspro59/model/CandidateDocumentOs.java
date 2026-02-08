package de.ait.javaproglessonspro59.model;

import de.ait.javaproglessonspro59.enums.CandidateDocType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Entity
@Table(name = "candidate_documents_os")
public class CandidateDocumentOs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String candidateEmail;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CandidateDocType docType;

    @Column(nullable = false)
    private String originalFilename;

    @Column(nullable = false)
    private String storedFilename;

    @Column(nullable = false)
    private String contentType;

    @Column(nullable = false)
    private long size;

    @Column(nullable = false)
    private String storagePath;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public CandidateDocumentOs() {
    }

    public CandidateDocumentOs(
            String candidateEmail,
            CandidateDocType docType,
            String originalFilename,
            String storedFilename,
            String contentType,
            long size,
            String storagePath,
            LocalDateTime createdAt
    ) {
        this.candidateEmail = candidateEmail;
        this.docType = docType;
        this.originalFilename = originalFilename;
        this.storedFilename = storedFilename;
        this.contentType = contentType;
        this.size = size;
        this.storagePath = storagePath;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getCandidateEmail() {
        return candidateEmail;
    }

    public CandidateDocType getDocType() {
        return docType;
    }

    public String getOriginalFilename() {
        return originalFilename;
    }

    public String getStoredFilename() {
        return storedFilename;
    }

    public String getContentType() {
        return contentType;
    }

    public long getSize() {
        return size;
    }

    public String getStoragePath() {
        return storagePath;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
