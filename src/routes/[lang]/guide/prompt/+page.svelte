<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; sections: { heading: string; text: string }[] };

	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Prompt Generator Guide',
			description: 'Learn how to create effective AI prompts for ChatGPT, Claude, and other LLMs. Master prompt engineering techniques for better AI responses.',
			sections: [
				{ heading: 'What is a Prompt?', text: 'A prompt is the input text you give to an AI model like ChatGPT or Claude. The quality of your prompt directly affects the quality of the AI\'s response. Well-crafted prompts lead to more accurate, relevant, and useful outputs. Think of a prompt as a set of instructions: the clearer and more detailed your instructions, the better the AI can deliver what you need. Understanding how to write prompts is one of the most valuable skills in working with modern AI tools, whether you\'re a content creator, developer, marketer, or researcher.' },
				{ heading: 'Key Elements of Effective Prompts', text: 'Good prompts typically include: clear context, specific instructions, desired output format, examples when helpful, and constraints or limitations. The more specific you are, the better results you\'ll get. A well-structured prompt has five core components: (1) Role - telling the AI who it should act as, (2) Task - clearly defining what needs to be done, (3) Context - providing background information, (4) Format - specifying how the output should be structured, and (5) Constraints - setting boundaries like word count, tone, or style. Combining these elements creates a comprehensive prompt that guides the AI precisely.' },
				{ heading: 'Using Our Prompt Generator', text: 'Our tool helps you structure prompts effectively. Simply describe your task, select the AI model you\'re using, choose the output style, and let our generator create an optimized prompt for you. The generator applies proven prompt engineering patterns automatically, so you don\'t need to memorize techniques. It supports multiple output styles including detailed analysis, concise summaries, creative writing, and professional documents. After generating your prompt, you can copy it directly to use with ChatGPT, Claude, Gemini, or any other LLM.' },
				{ heading: 'Tips for Better Results', text: 'Be specific about what you want. Use clear, simple language. Break complex tasks into steps. Provide examples of desired output. Specify the tone and format you need. Iterate and refine based on results. One of the most powerful techniques is "chain of thought" prompting, where you ask the AI to think step by step before giving a final answer. Another useful approach is few-shot prompting, where you provide examples of the input-output pairs you expect. Don\'t be afraid to experiment with different phrasings until you find what works best for your specific use case.' },
				{ heading: 'Common Use Cases', text: 'Content creation, code generation, data analysis, creative writing, research assistance, email drafting, translation, summarization, and brainstorming. Our generator supports all these and more. For content creators, prompts can help generate blog post outlines, social media captions, and marketing copy. Developers can use prompts to generate code snippets, debug errors, and write documentation. Researchers benefit from prompts that help synthesize information from multiple sources and identify key findings.' },
				{ heading: 'Best Practices', text: 'Start with a clear goal. Test your prompts with different inputs. Save successful prompts for reuse. Adjust based on the AI model you\'re using. Remember that different models may respond differently to the same prompt. Keep a prompt library for tasks you perform frequently. Review and refine your prompts regularly as AI models improve. When working with sensitive or important content, always verify the AI\'s output against reliable sources. Consider using system prompts to set consistent behavior across multiple interactions.' }
			]
		},
		ko: {
			title: '프롬프트 생성기 가이드',
			description: 'ChatGPT, Claude 및 기타 LLM을 위한 효과적인 AI 프롬프트를 만드는 방법을 알아보세요. 더 나은 AI 응답을 위한 프롬프트 엔지니어링 기법을 마스터하세요.',
			sections: [
				{ heading: '프롬프트란?', text: '프롬프트는 ChatGPT나 Claude 같은 AI 모델에 제공하는 입력 텍스트입니다. 프롬프트의 품질이 AI 응답의 품질에 직접적인 영향을 미칩니다. 잘 작성된 프롬프트는 더 정확하고 관련성 있으며 유용한 결과를 이끌어냅니다. 프롬프트를 일종의 지시서로 생각하세요. 지시가 명확하고 상세할수록 AI가 필요한 것을 더 잘 전달할 수 있습니다. 프롬프트 작성법을 이해하는 것은 콘텐츠 제작자, 개발자, 마케터, 연구자 등 현대 AI 도구를 사용하는 모든 사람에게 가장 가치 있는 기술 중 하나입니다.' },
				{ heading: '효과적인 프롬프트의 핵심 요소', text: '좋은 프롬프트에는 일반적으로 명확한 맥락, 구체적인 지시사항, 원하는 출력 형식, 필요시 예시, 제약 조건이 포함됩니다. 구체적일수록 더 나은 결과를 얻을 수 있습니다. 잘 구조화된 프롬프트에는 5가지 핵심 요소가 있습니다: (1) 역할 - AI가 누구로 행동해야 하는지 알려주기, (2) 작업 - 무엇을 해야 하는지 명확히 정의하기, (3) 맥락 - 배경 정보 제공하기, (4) 형식 - 출력 구조 지정하기, (5) 제약 - 단어 수, 톤, 스타일 등의 경계 설정하기. 이 요소들을 결합하면 AI를 정확하게 안내하는 포괄적인 프롬프트가 됩니다.' },
				{ heading: '프롬프트 생성기 사용법', text: '도구가 프롬프트를 효과적으로 구조화하도록 도와줍니다. 작업을 설명하고, 사용할 AI 모델을 선택하고, 출력 스타일을 선택하면 최적화된 프롬프트를 생성합니다. 생성기는 검증된 프롬프트 엔지니어링 패턴을 자동으로 적용하므로 기법을 외울 필요가 없습니다. 상세 분석, 간결한 요약, 창작 글쓰기, 전문 문서 등 다양한 출력 스타일을 지원합니다.' },
				{ heading: '더 나은 결과를 위한 팁', text: '원하는 것을 구체적으로 설명하세요. 명확하고 간단한 언어를 사용하세요. 복잡한 작업은 단계로 나누세요. 원하는 출력의 예시를 제공하세요. 필요한 톤과 형식을 지정하세요. 가장 강력한 기법 중 하나는 "생각의 사슬" 프롬프팅으로, AI에게 최종 답변 전에 단계별로 생각하도록 요청하는 것입니다. 또 다른 유용한 접근법은 기대하는 입출력 쌍의 예시를 제공하는 "Few-shot 프롬프팅"입니다.' },
				{ heading: '일반적인 사용 사례', text: '콘텐츠 제작, 코드 생성, 데이터 분석, 창작 글쓰기, 연구 지원, 이메일 작성, 번역, 요약, 브레인스토밍. 생성기는 이 모든 것을 지원합니다. 콘텐츠 제작자에게 프롬프트는 블로그 게시물 개요, 소셜 미디어 캡션, 마케팅 카피를 생성하는 데 도움이 됩니다. 개발자는 코드 스니펫 생성, 오류 디버깅, 문서 작성에 프롬프트를 사용할 수 있습니다.' },
				{ heading: '모범 사례', text: '명확한 목표로 시작하세요. 다양한 입력으로 프롬프트를 테스트하세요. 성공적인 프롬프트를 재사용을 위해 저장하세요. 사용하는 AI 모델에 따라 조정하세요. 다른 모델은 같은 프롬프트에 다르게 반응할 수 있다는 것을 기억하세요. 자주 수행하는 작업에 대한 프롬프트 라이브러리를 유지하세요. AI 모델이 개선됨에 따라 프롬프트를 정기적으로 검토하고 개선하세요.' }
			]
		},
		ja: {
			title: 'プロンプト生成ガイド',
			description: 'ChatGPT、Claude、その他のLLM用の効果的なAIプロンプトの作成方法を学びましょう。より良いAI応答のためのプロンプトエンジニアリング技術をマスターしましょう。',
			sections: [
				{ heading: 'プロンプトとは？', text: 'プロンプトは、ChatGPTやClaudeなどのAIモデルに与える入力テキストです。プロンプトの品質がAIの応答品質に直接影響します。よく練られたプロンプトは、より正確で関連性があり有用な出力につながります。プロンプトを指示書のようなものと考えてください。指示が明確で詳細であればあるほど、AIはあなたが必要とするものをより良く提供できます。プロンプトの書き方を理解することは、コンテンツクリエイター、開発者、マーケター、研究者など、現代のAIツールを使用するすべての人にとって最も価値のあるスキルの一つです。' },
				{ heading: '効果的なプロンプトの重要な要素', text: '良いプロンプトには通常、明確なコンテキスト、具体的な指示、望ましい出力形式、必要に応じた例、制約条件が含まれます。具体的であればあるほど、より良い結果が得られます。よく構造化されたプロンプトには5つのコアコンポーネントがあります：(1) 役割 - AIが誰として行動すべきか、(2) タスク - 何をすべきかの明確な定義、(3) コンテキスト - 背景情報の提供、(4) フォーマット - 出力の構造指定、(5) 制約 - 文字数、トーン、スタイルなどの境界設定。' },
				{ heading: 'プロンプト生成ツールの使い方', text: 'ツールがプロンプトを効果的に構造化するお手伝いをします。タスクを説明し、使用するAIモデルを選択し、出力スタイルを選択すると、最適化されたプロンプトを生成します。ジェネレーターは実証済みのプロンプトエンジニアリングパターンを自動的に適用するため、テクニックを暗記する必要はありません。' },
				{ heading: 'より良い結果のためのヒント', text: '欲しいものを具体的に説明してください。明確でシンプルな言語を使用してください。複雑なタスクはステップに分けてください。望ましい出力の例を提供してください。必要なトーンと形式を指定してください。最も強力なテクニックの一つは「思考の連鎖」プロンプティングで、最終回答の前にステップバイステップで考えるようAIに求めます。' },
				{ heading: '一般的な使用例', text: 'コンテンツ作成、コード生成、データ分析、クリエイティブライティング、研究支援、メール作成、翻訳、要約、ブレインストーミング。ジェネレーターはこれらすべてをサポートしています。コンテンツクリエイターにとって、プロンプトはブログ投稿のアウトライン、ソーシャルメディアのキャプション、マーケティングコピーの生成に役立ちます。' },
				{ heading: 'ベストプラクティス', text: '明確な目標から始めてください。さまざまな入力でプロンプトをテストしてください。成功したプロンプトは再利用のために保存してください。使用するAIモデルに応じて調整してください。異なるモデルは同じプロンプトに異なる反応を示す可能性があることを覚えておいてください。頻繁に行うタスク用のプロンプトライブラリを維持してください。' }
			]
		},
		zh: {
			title: '提示词生成器指南',
			description: '学习如何为 ChatGPT、Claude 和其他 LLM 创建有效的 AI 提示词。掌握提示词工程技术以获得更好的 AI 响应。',
			sections: [
				{ heading: '什么是提示词？', text: '提示词是您提供给 ChatGPT 或 Claude 等 AI 模型的输入文本。提示词的质量直接影响 AI 响应的质量。精心设计的提示词可以带来更准确、更相关、更有用的输出。将提示词视为一组指令：您的指令越清晰、越详细，AI 就能越好地满足您的需求。理解如何编写提示词是使用现代 AI 工具的最有价值的技能之一，无论您是内容创作者、开发者、营销人员还是研究人员。' },
				{ heading: '有效提示词的关键要素', text: '好的提示词通常包括：清晰的上下文、具体的指令、期望的输出格式、有用的示例以及约束条件。您越具体，得到的结果就越好。一个结构良好的提示词有五个核心组成部分：(1) 角色 - 告诉 AI 应该扮演谁，(2) 任务 - 明确定义需要做什么，(3) 上下文 - 提供背景信息，(4) 格式 - 指定输出的结构，(5) 约束 - 设置字数、语气或风格等边界。' },
				{ heading: '使用我们的提示词生成器', text: '我们的工具帮助您有效地构建提示词。只需描述您的任务，选择您使用的 AI 模型，选择输出风格，让我们的生成器为您创建优化的提示词。生成器自动应用经过验证的提示词工程模式，因此您不需要记忆技巧。' },
				{ heading: '获得更好结果的技巧', text: '明确说明您想要什么。使用清晰、简单的语言。将复杂的任务分解为步骤。提供期望输出的示例。指定您需要的语气和格式。根据结果进行迭代和改进。最强大的技术之一是"思维链"提示，要求 AI 在给出最终答案之前逐步思考。' },
				{ heading: '常见用例', text: '内容创作、代码生成、数据分析、创意写作、研究协助、邮件起草、翻译、摘要和头脑风暴。我们的生成器支持所有这些及更多。对于内容创作者，提示词可以帮助生成博客文章大纲、社交媒体标题和营销文案。开发者可以使用提示词生成代码片段、调试错误和编写文档。' },
				{ heading: '最佳实践', text: '从明确的目标开始。用不同的输入测试您的提示词。保存成功的提示词以便重复使用。根据您使用的 AI 模型进行调整。记住不同的模型对相同提示词的响应可能不同。为经常执行的任务维护一个提示词库。随着 AI 模型的改进，定期审查和完善您的提示词。' }
			]
		},
		es: {
			title: 'Guia del Generador de Prompts',
			description: 'Aprende a crear prompts efectivos de IA para ChatGPT, Claude y otros LLMs. Domina las tecnicas de ingenieria de prompts para mejores respuestas de IA.',
			sections: [
				{ heading: 'Que es un Prompt?', text: 'Un prompt es el texto de entrada que le das a un modelo de IA como ChatGPT o Claude. La calidad de tu prompt afecta directamente la calidad de la respuesta de la IA. Los prompts bien elaborados conducen a resultados mas precisos, relevantes y utiles. Piensa en un prompt como un conjunto de instrucciones: cuanto mas claras y detalladas sean tus instrucciones, mejor podra la IA entregar lo que necesitas. Entender como escribir prompts es una de las habilidades mas valiosas al trabajar con herramientas modernas de IA.' },
				{ heading: 'Elementos Clave de Prompts Efectivos', text: 'Los buenos prompts tipicamente incluyen: contexto claro, instrucciones especificas, formato de salida deseado, ejemplos cuando son utiles y restricciones o limitaciones. Cuanto mas especifico seas, mejores resultados obtendras. Un prompt bien estructurado tiene cinco componentes principales: (1) Rol, (2) Tarea, (3) Contexto, (4) Formato y (5) Restricciones.' },
				{ heading: 'Usando Nuestro Generador de Prompts', text: 'Nuestra herramienta te ayuda a estructurar prompts de manera efectiva. Simplemente describe tu tarea, selecciona el modelo de IA que estas usando, elige el estilo de salida y deja que nuestro generador cree un prompt optimizado para ti. El generador aplica automaticamente patrones probados de ingenieria de prompts.' },
				{ heading: 'Consejos para Mejores Resultados', text: 'Se especifico sobre lo que quieres. Usa un lenguaje claro y simple. Divide las tareas complejas en pasos. Proporciona ejemplos del resultado deseado. Especifica el tono y formato que necesitas. Itera y refina basandote en los resultados. Una de las tecnicas mas poderosas es el prompting de "cadena de pensamiento", donde le pides a la IA que piense paso a paso antes de dar una respuesta final.' },
				{ heading: 'Casos de Uso Comunes', text: 'Creacion de contenido, generacion de codigo, analisis de datos, escritura creativa, asistencia en investigacion, redaccion de correos, traduccion, resumen y lluvia de ideas. Nuestro generador soporta todos estos y mas. Para creadores de contenido, los prompts pueden ayudar a generar esquemas de publicaciones, subtitulos de redes sociales y textos de marketing.' },
				{ heading: 'Mejores Practicas', text: 'Comienza con un objetivo claro. Prueba tus prompts con diferentes entradas. Guarda los prompts exitosos para reutilizar. Ajusta segun el modelo de IA que estes usando. Recuerda que diferentes modelos pueden responder de manera diferente al mismo prompt. Mantiene una biblioteca de prompts para tareas que realizas con frecuencia.' }
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-8">{t.title}</h1>
	<div class="space-y-8">
		{#each t.sections as section}
			<div>
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/prompt" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			Try Prompt Generator &rarr;
		</a>
	</div>
</div>
