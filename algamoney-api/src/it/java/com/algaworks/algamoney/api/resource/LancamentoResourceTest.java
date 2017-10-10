package com.algaworks.algamoney.api.resource;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.junit.Assert.assertThat;

public class LancamentoResourceTest {

    public static final String URL_LANCAMENTOS = "http://localhost:8080/lancamentos";
    private TestRestTemplate template = new TestRestTemplate();
    private HttpHeaders headers;

    @Before
    public void setUp() throws Exception {
        headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
    }

    @Test
    public void postLancamento_semRequestCorreto_retornarBadRequest() throws Exception {
        String jsonIn = "";
        ResponseEntity<String> responseEntity = getStringResponseEntity(jsonIn);
        HttpStatus statusCode = responseEntity.getStatusCode();
        assertThat(statusCode, Matchers.equalTo(HttpStatus.BAD_REQUEST));
    }

    @Test
    public void postLancamento_semRequestCorreto_retornarMensagemUsuarioDesenv() throws Exception {
        String jsonIn = "";
        ResponseEntity<String> responseEntity = getStringResponseEntity(jsonIn);
        String body = responseEntity.getBody();
        assertThat(body, Matchers.containsString("mensagemUsuario"));
        assertThat(body, Matchers.containsString("mensagemDesenvolvedor"));
    }

    @Test
    public void postLancamento_comRequestCorreto_retornarCreated() throws Exception {
        String jsonIn = "{" +
                "\"descricao\":\"umc\"," +
                "\"dtVencimento\":\"2017-10-01\"," +
                "\"valor\":1," +
                "\"tipo\":\"DESPESA\"," +
                "\"categoria\":{\"codigo\":1,\"nome\":null}," +
                "\"pessoa\":{\"codigo\":1,\"nome\":null,\"ativo\":null,\"endereco\":null}}";
        ResponseEntity<String> responseEntity = getStringResponseEntity(jsonIn);
        HttpStatus statusCode = responseEntity.getStatusCode();
        String body = responseEntity.getBody();
        assertThat(statusCode, Matchers.equalTo(HttpStatus.CREATED));
        assertThat(body, Matchers.containsString("codigo"));
    }

    @Test
    public void postLancamento_comPessoaInativa_retornarBadRequest() throws Exception {
        String jsonIn = "{" +
                "\"descricao\":\"umc\"," +
                "\"dtVencimento\":\"2017-10-01\"," +
                "\"valor\":1," +
                "\"tipo\":\"DESPESA\"," +
                "\"categoria\":{\"codigo\":1,\"nome\":null}," +
                "\"pessoa\":{\"codigo\":2,\"nome\":null,\"ativo\":null,\"endereco\":null}}";
        ResponseEntity<String> responseEntity = getStringResponseEntity(jsonIn);
        HttpStatus statusCode = responseEntity.getStatusCode();
        String body = responseEntity.getBody();
        assertThat(statusCode, Matchers.equalTo(HttpStatus.BAD_REQUEST));
        assertThat(body, Matchers.containsString("mensagemUsuario"));
        assertThat(body, Matchers.containsString("mensagemDesenvolvedor"));
        System.out.println(body);
    }

    private ResponseEntity<String> getStringResponseEntity(String json) throws JsonProcessingException {
        //String json = new ObjectMapper().writeValueAsString(o);
        HttpEntity<String> entity = new HttpEntity<>(json, headers);
        return template.postForEntity(URL_LANCAMENTOS, entity, String.class);
    }
}