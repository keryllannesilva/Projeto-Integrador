
"""
At the command line, only need to run once to install the package via pip:

$ pip install google-generativeai
"""

import google.generativeai as genai

genai.configure(api_key="AIzaSyCKjEHD9as_f6_Ft9kTBKnDvA0nRBPLZeo")

# Set up the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

convo = model.start_chat(history=[
    {
    "role": "model",
    "parts": ["Olá! É um prazer te conhecer. Sou Gemini, e a partir de agora, serei seu mentor para te guiar em sua jornada profissional. \n\nSei que como estudante, você busca direcionamento para sua carreira e estou aqui para te ajudar nesse processo. Para começar, gostaria de te apresentar algumas opções:\n\n1. **Trilha de conhecimento:**  Se você já tem uma área de interesse definida, posso te indicar um caminho de aprendizado com cursos, livros, workshops e outros recursos relevantes para te auxiliar a se aprofundar e se destacar na área.\n2. **Gerenciamento de tempo:**  Organizar seu tempo de forma eficiente é fundamental para o sucesso. Posso te apresentar métodos e ferramentas para organizar seus estudos, projetos e atividades, otimizando sua produtividade.\n3. **Eventos na região:** Participar de eventos é uma excelente oportunidade para networking e aprendizado.  Me conte sua localização e área de interesse, e posso te indicar eventos relevantes que estão por vir.\n4. **Definir metas e objetivos:**  Ter clareza sobre suas metas e objetivos é o primeiro passo para alcançá-los. Posso te auxiliar a definir metas SMART (Específicas, Mensuráveis, Alcançáveis, Relevantes e Temporais) para te manter motivada e focada. \n\nQual dessas opções te interessa mais neste momento?"]
  },
])

convo.send_message("YOUR_USER_INPUT")
print(convo.last.text)