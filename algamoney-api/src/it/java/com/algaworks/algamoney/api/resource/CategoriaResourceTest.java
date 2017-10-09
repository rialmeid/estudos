package com.algaworks.algamoney.api.resource;

import org.junit.Test;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

public class CategoriaResourceTest {

    private TestRestTemplate template = new TestRestTemplate();

    @Test
    public void getCategorias_comCodigo_retornarJSON() throws Exception {
        String json = template.getForObject("http://localhost:8080/categorias/1", String.class);
        assertThat(json, containsString("{\"codigo\":1,\"nome\":\"Lazer\"}"));
        System.out.println(json);
    }

    @Test
    public void getCategorias_semCodigo_retornarJSONCompleto() throws Exception {
        String json = template.getForObject("http://localhost:8080/categorias", String.class);
        assertThat(json, containsString("[{\"codigo\":1,\"nome\":\"Lazer\"},{\"codigo\":2,\"nome\":\"Alimentação\"},{\"codigo\":3,\"nome\":\"Supermercado\"},{\"codigo\":4,\"nome\":\"Farmácia\"},{\"codigo\":5,\"nome\":\"Outros\"}]"));
        System.out.println(json);
    }

    @Test
    public void getCategorias_comEntity_comCodigo_retornarOk() throws Exception {
        HttpStatus statusCode = template.getForEntity("http://localhost:8080/categorias/1", String.class).getStatusCode();
        assertThat(statusCode, equalTo(HttpStatus.OK));
    }
}