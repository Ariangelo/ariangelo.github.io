void callback(char* topico, byte* payload, unsigned int tamanho) {
  Serial.print("[MSG RECEBIDA] Topico: ");
  Serial.print(topico);
  Serial.print(" / Mensagem: ");
  for (int i = 0; i < tamanho; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
  // Controla o LED conforme o valor recebido
  if ((char)payload[0] == '1') {
    digitalWrite(BUILTIN_LED, LOW);   // Liga o LED nivel baixo por saída ser PULL_UP
  } else {
    digitalWrite(BUILTIN_LED, HIGH);  // Desliga o LED
  }
}
