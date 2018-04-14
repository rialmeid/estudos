package com.algaworks.algamoney.api.config.token;

import java.util.HashMap;
import java.util.Map;

import com.algaworks.algamoney.api.security.UsuarioSistema;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;


public class CustomTokenEnhancer implements TokenEnhancer {

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		User principal = (User) authentication.getPrincipal();
		String nome = "Usuario Padrao";
		UsuarioSistema usuarioSistema = null;
		try {
			usuarioSistema = (UsuarioSistema) principal;
			nome = usuarioSistema.getUsuario().getNome();
		} catch (Exception e) {
			e.printStackTrace();
		}

		Map<String, Object> addInfo = new HashMap<>();
		addInfo.put("nome", nome);

		((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(addInfo);
		return accessToken;
	}

}
