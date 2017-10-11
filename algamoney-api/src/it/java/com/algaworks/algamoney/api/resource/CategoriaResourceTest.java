package com.algaworks.algamoney.api.resource;

import com.algaworks.algamoney.api.model.Categoria;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

public class CategoriaResourceTest {

    public static final String URL_CATEGORIAS = "http://localhost:8080/categorias/";
    private TestRestTemplate template = new TestRestTemplate();

    private HttpHeaders headers;

    @Before
    public void setUp() throws Exception {
        headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
    }

    @Test
    public void getCategorias_comCodigo_retornarCategoria() throws Exception {
        Categoria json = template.getForObject(URL_CATEGORIAS.concat("1"), Categoria.class);
        assertThat(json.getCodigo(), Matchers.notNullValue());
        System.out.println(json.getNome());
    }

    @Test
    public void getCategorias_semCodigo_retornarJSONCompleto() throws Exception {
        String json = template.getForObject(URL_CATEGORIAS, String.class);

        //JsonElement jsonElement = parser.parse(json);

        assertThat(json, containsString("[{\"codigo\":1,\"nome\":\"Lazer\"},{\"codigo\":2,\"nome\":\"Alimentação\"}"));
        System.out.println(json);
    }

    @Test
    public void getCategorias_comFiltroPorNome_retornarFiltrado() throws Exception {
        String json = template.getForObject(URL_CATEGORIAS.concat("?nome=super"), String.class);
        assertThat(json, equalTo("[{\"codigo\":3,\"nome\":\"Supermercado\"}]"));
    }

    @Test
    public void getCategorias_comFiltroPorPagina_retornarFiltrado() throws Exception {
        String json = template.getForObject(URL_CATEGORIAS.concat("?size=2&page=2&nome=a"), String.class);
        assertThat(json, equalTo("{" +
                "\"content" +
                "\":" +
                "[" +
                "{\"codigo\":6,\"nome\":\"bancos\"}," +
                "{\"codigo\":8,\"nome\":\"casa\"}" +
                "]," +
                "\"last\":false," +
                "\"totalElements\":14," +
                "\"totalPages\":7," +
                "\"size\":2," +
                "\"number\":2," +
                "\"sort\":null," +
                "\"first\":false," +
                "\"numberOfElements\":2" +
                "}"));
    }


    @Test
    public void getCategorias_comEntity_comCodigo_retornarOk() throws Exception {
        HttpStatus statusCode = template.getForEntity("http://localhost:8080/categorias/1", String.class).getStatusCode();
        assertThat(statusCode, equalTo(HttpStatus.OK));
    }

    @Test
    public void postLancamento_comRequestCorreto_retornarCreated() throws Exception {
        String jsonIn = "{\"nome\":\"casa\"}";
        ResponseEntity<String> responseEntity = getStringResponseEntity(jsonIn);
        HttpStatus statusCode = responseEntity.getStatusCode();
        String body = responseEntity.getBody();
        assertThat(statusCode, Matchers.equalTo(HttpStatus.CREATED));
        assertThat(body, Matchers.containsString("codigo"));
    }

    private ResponseEntity<String> getStringResponseEntity(String json) throws JsonProcessingException {
        //String json = new ObjectMapper().writeValueAsString(obj);
        HttpEntity<String> entity = new HttpEntity<>(json, headers);
        return template.postForEntity(URL_CATEGORIAS, entity, String.class);
    }
}