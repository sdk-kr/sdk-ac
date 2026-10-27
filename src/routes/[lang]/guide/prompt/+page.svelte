<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; sections: { heading: string; text: string; example?: string }[] };

	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Prompt Generator Guide',
			description: "Build and test a specific instruction with the prompt generator, then check an answer against your requirements.",
			sections: [
				{
					"heading": "Start with an observable deliverable",
					"text": "The generator structures a request; a separate assistant supplies the answer. This walkthrough turns a vague workshop request into a checklist instruction. Success means an answer with the required items and no invented event details, not simply a longer prompt."
				},
				{
					"heading": "Step 1: replace the vague task",
					"text": "Before: “Help with the workshop.” After: “Write a packing checklist for a drawing workshop.” The revised task identifies an artifact and an activity. Put it in Task; put “Attendees bring their own pencils.” in Context so the assistant need not guess who supplies them."
				},
				{
					"heading": "Step 2: inspect the generated request",
					"text": "For the reproducible run, use the English field values below and select Concise. Generate and compare the output character for character. The task and context remain intact. The generic closing still requests a thorough answer, so the style does not enforce a length limit.",
					"example": "Input and selections\nTask: Write a packing checklist for a drawing workshop.\nContext: Attendees bring their own pencils.\nStyle: Concise\n\nExact tool output\nYou are an expert assistant. Be brief and to the point. Focus only on essential information.\n\nTask: Write a packing checklist for a drawing workshop.\n\nContext: Attendees bring their own pencils.\n\nPlease provide a thorough and helpful response."
				},
				{
					"heading": "Step 3: define a useful revision",
					"text": "If the prompt needs a tighter boundary, revise the task to “Write a packing checklist for a drawing workshop. Use five bullets and distinguish attendee items from organizer items.” Generate again. This is a deliberate change to the request, not a claim about what an assistant will return."
				},
				{
					"heading": "Step 4: evaluate the answer elsewhere",
					"text": "Copy the request to your chosen assistant. Check that pencils are assigned to attendees and that the list respects the requested structure. If either check fails, revise that one requirement. Keep the working prompt and an example answer together for later comparison."
				},
				{
					"heading": "Mistake 1: looking for a model selector",
					"text": "There is no model selector on this page. The style buttons insert fixed sentences; they do not tune an AI model. Choose the destination service separately."
				},
				{
					"heading": "Mistake 2: adding unsupported background",
					"text": "More context is useful only if it is relevant and true. Do not add invented venue facilities to make the request sound complete; an assistant might turn those details into requirements."
				}
			]
		},
		ko: {
			title: '프롬프트 생성기 가이드',
			description: "프롬프트 생성기로 구체적인 지시문을 만들고 시험한 뒤 답변이 요구 사항을 지키는지 확인하세요.",
			sections: [
				{
					"heading": "확인할 수 있는 산출물부터 정하기",
					"text": "생성기는 요청의 구조를 만들고 답변은 별도의 AI가 제공합니다. 이 실습에서는 모호한 워크숍 요청을 체크리스트 지시문으로 바꿉니다. 성공 기준은 단순히 긴 프롬프트가 아니라 필요한 항목을 담고 행사 세부 사항을 지어내지 않은 답변입니다."
				},
				{
					"heading": "1단계: 모호한 작업 바꾸기",
					"text": "수정 전: “워크숍을 도와줘.” 수정 후: “드로잉 워크숍의 준비물 체크리스트를 작성해 줘.” 수정된 작업에는 산출물과 활동이 드러납니다. 작업 필드에 넣고 맥락에는 “참가자는 연필을 직접 가져옵니다.”를 적어 누가 준비하는지 추측하지 않게 하세요."
				},
				{
					"heading": "2단계: 생성된 요청 살펴보기",
					"text": "재현하려면 아래 영어 필드 값을 사용하고 간결한 스타일을 선택하세요. 생성한 뒤 출력을 문자 단위로 비교하세요. 작업과 맥락이 그대로 남습니다. 일반적인 마무리 문장은 여전히 충실한 답변을 요청하므로 스타일이 길이 제한을 강제하지는 않습니다.",
					"example": "입력 및 선택 항목\n작업: Write a packing checklist for a drawing workshop.\n맥락: Attendees bring their own pencils.\n스타일: 간결함\n\n실제 도구 출력\nYou are an expert assistant. Be brief and to the point. Focus only on essential information.\n\nTask: Write a packing checklist for a drawing workshop.\n\nContext: Attendees bring their own pencils.\n\nPlease provide a thorough and helpful response."
				},
				{
					"heading": "3단계: 유용한 수정 정의하기",
					"text": "더 명확한 경계가 필요하면 작업을 “드로잉 워크숍의 준비물 체크리스트를 작성해 줘. 글머리 기호 다섯 개를 쓰고 참가자 준비물과 주최 측 준비물을 구분해 줘.”로 바꾸세요. 다시 생성하세요. 이는 요청을 의도적으로 바꾸는 것이며 AI의 반환 결과에 관한 주장은 아닙니다."
				},
				{
					"heading": "4단계: 다른 곳에서 받은 답변 평가하기",
					"text": "선택한 AI에 요청을 복사하세요. 연필이 참가자 준비물로 분류되었는지, 목록이 요청한 구조를 지키는지 확인하세요. 하나라도 실패하면 해당 요구 사항 하나를 고치세요. 작동하는 프롬프트와 답변 예시를 함께 보관하여 나중에 비교하세요."
				},
				{
					"heading": "실수 1: 모델 선택 기능 찾기",
					"text": "이 페이지에는 모델 선택 기능이 없습니다. 스타일 버튼은 고정 문장을 넣으며 AI 모델을 조정하지 않습니다. 사용할 서비스는 별도로 선택하세요."
				},
				{
					"heading": "실수 2: 근거 없는 배경 추가하기",
					"text": "맥락이 많아도 관련 있고 사실일 때만 유용합니다. 요청을 완전해 보이게 하려고 행사장 시설을 지어내지 마세요. AI가 그 내용을 요구 사항으로 바꿀 수 있습니다."
				}
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
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/prompt" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "프롬프트 생성기" : "Prompt generator"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing revision prompt builder"}</a>
			<a href="/{lang}/code" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "코드 설명 프롬프트 생성기" : "Code explanation prompt builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/prompt" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{lang === 'ko' ? "프롬프트 생성기 사용하기" : "Try Prompt Generator"} &rarr;
		</a>
	</div>
</div>
