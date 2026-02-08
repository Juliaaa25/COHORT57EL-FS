package de.ait.javaproglessonspro59;

import com.jayway.jsonpath.JsonPath;
import de.ait.javaproglessonspro59.model.CandidateDocumentOs;
import de.ait.javaproglessonspro59.repository.CandidateDocumentOsRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;



@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class CandidateDocumentOsIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CandidateDocumentOsRepository repository;

    @Test
    void upload_createsDbRecord_andFileOnDisk() throws Exception {

        MockMultipartFile file = new MockMultipartFile(
                "file",
                "cv.pdf",
                "application/pdf",
                "HELLO CV".getBytes()
        );

        mockMvc.perform(multipart("/api/candidates/documents/os")
                        .file(file)
                        .param("candidateEmail", "anna@mail.com")
                        .param("docType", "CV"))
                .andExpect(status().isCreated());

        List<CandidateDocumentOs> docs =
                repository.findAllByCandidateEmail("anna@mail.com");

        assertEquals(1, docs.size());

        Path path = Paths.get(docs.get(0).getStoragePath());
        assertTrue(Files.exists(path));
    }

    @Test
    void fullFlow_upload_list_download_delete() throws Exception {

        byte[] data = "PORTFOLIO DATA".getBytes();

        MockMultipartFile file = new MockMultipartFile(
                "file",
                "portfolio.png",
                "image/png",
                data
        );

        MvcResult uploadResult =
                mockMvc.perform(multipart("/api/candidates/documents/os")
                                .file(file)
                                .param("candidateEmail", "bob@mail.com")
                                .param("docType", "PORTFOLIO"))
                        .andExpect(status().isCreated())
                        .andReturn();

        Number idNum = JsonPath.read(
                uploadResult.getResponse().getContentAsString(),
                "$.id"
        );
        Long id = idNum.longValue();

        mockMvc.perform(get("/api/candidates/documents/os")
                        .param("candidateEmail", "bob@mail.com"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1));

        MvcResult download =
                mockMvc.perform(get("/api/candidates/documents/os/" + id + "/download"))
                        .andExpect(status().isOk())
                        .andReturn();

        assertArrayEquals(data, download.getResponse().getContentAsByteArray());

        mockMvc.perform(delete("/api/candidates/documents/os/" + id))
                .andExpect(status().isNoContent());

        assertTrue(repository.findById(id).isEmpty());
    }
}
