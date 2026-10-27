<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; sections: { heading: string; text: string; example?: string; tips?: string[] }[] };

	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: "Image Prompt Builder Guide",
			description: "Build an image prompt from a concrete subject, inspect the fixed modifiers, and compare one visual change at a time.",
			sections: [
				{
					"heading": "Plan one scene before choosing a style",
					"text": "This walkthrough prepares a reading corner illustration prompt. The builder returns text; rendering happens in a separate image service. Decide which visible elements matter before choosing aesthetic words, so you can distinguish a successful composition from an attractive but unsuitable image."
				},
				{
					"heading": "Step 1: replace an abstract subject",
					"text": "Before: “A cozy place.” After: “A reading chair beside a tall window.” Enter the revised English subject. It gives the renderer two objects and a spatial relationship. Avoid adding unrelated objects until this simple arrangement works."
				},
				{
					"heading": "Step 2: generate and inspect the modifiers",
					"text": "Choose Watercolor and Peaceful. The exact output below combines the subject with soft edges, flowing colors, and calm lighting. These are descriptive requests, not renderer settings. Read the entire prompt once to catch conflicts before copying it.",
					"example": "Input and selections\nSubject: A reading chair beside a tall window\nStyle: Watercolor\nMood: Peaceful\n\nExact tool output\nA reading chair beside a tall window, watercolor painting, soft edges, flowing colors, artistic, delicate, calm, serene, soft lighting, gentle, harmonious, tranquil, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "Step 3: make a purposeful variation",
					"text": "Keep the subject and style, but change the mood to Dramatic. Compare the two text prompts first: only the mood phrase should change. If you render both elsewhere, hold that service’s other settings stable where possible and look specifically at lighting and contrast."
				},
				{
					"heading": "Step 4: check composition before decoration",
					"text": "Inspect whether the chair is beside the window and whether both remain visible. If placement is wrong, revise the subject to specify the arrangement. Adding another quality adjective does not explain where an object belongs. Save the prompt alongside the image you selected."
				},
				{
					"heading": "Mistake 1: treating quality words as controls",
					"text": "The suffix cannot set pixel dimensions or guarantee readable text. Choose actual size controls in the destination service and inspect the exported image."
				},
				{
					"heading": "Mistake 2: mixing incompatible instructions",
					"text": "A subject demanding sharp ink outlines may compete with watercolor’s soft edges. Decide which appearance matters, then remove the opposing phrase in the copied prompt."
				},
				{
					"heading": "Worked example: describe a product scene",
					"text": "The mug example places objects in relation to one another before any preset words are added. Photorealistic supplies camera and resolution vocabulary, and Peaceful adds lighting and atmosphere terms. Those words are part of the copied prompt; they do not set an image size, operate a camera, or produce a photograph on this page.",
					"example": "Input and selections\nsubject: A ceramic mug beside a folded blue napkin on a wooden table\nstyle: photorealistic\nmood: peaceful\n\nExact tool output\nA ceramic mug beside a folded blue napkin on a wooden table, ultra realistic, high resolution, 8k, photograph, DSLR, professional photography, calm, serene, soft lighting, gentle, harmonious, tranquil, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "Worked example: inspect repeated modifiers",
					"text": "The greenhouse example combines Oil Painting with Mysterious. Read the exact output and notice that masterpiece appears twice: once in the oil preset and once in the common suffix. The builder does not remove duplicates or reconcile competing descriptions. You can edit the copied prompt before using it elsewhere, keeping the subject and spatial relationship clear.",
					"example": "Input and selections\nsubject: An abandoned greenhouse behind a stone wall\nstyle: oil\nmood: mysterious\n\nExact tool output\nAn abandoned greenhouse behind a stone wall, oil painting, classical art style, painterly, textured canvas, masterpiece, dark and moody, foggy, enigmatic, shadowy, ethereal, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "Mistake 3: assuming quality words are settings",
					"text": "Terms such as 8k and best quality are literal text. They do not enforce resolution or quality in a separate renderer, whose controls you must inspect yourself."
				},
				{
					"heading": "Mistake 4: hiding the main object",
					"text": "A long list of abstract adjectives can obscure what should be visible. Name the object, location, and relationship in Subject before adding decorative details."
				},
				{
					"heading": "Mistake 5: expecting negative prompt controls",
					"text": "There is no separate negative prompt field. An exclusion typed into Subject is copied into the same string and is not converted into renderer-specific syntax."
				},
				{
					"heading": "Tips for better results",
					"text": "",
					"tips": [
						"Keep the subject stable while comparing one style or mood change.",
						"Check the final suffix for repetition with your own wording.",
						"Treat preset names as text choices; configure dimensions and other rendering controls in the image service you use."
					]
				}
			]
		},
		ko: {
			title: "이미지 프롬프트 생성기 가이드",
			description: "구체적인 주제로 이미지 프롬프트를 만들고 고정 수식어를 살펴본 뒤 시각적 변화 하나씩 비교하세요.",
			sections: [
				{
					"heading": "스타일을 고르기 전에 장면 하나 계획하기",
					"text": "이 실습에서는 독서 공간 그림의 프롬프트를 준비합니다. 빌더는 텍스트를 반환하며 렌더링은 별도의 이미지 서비스에서 이루어집니다. 미적인 표현을 고르기 전에 중요한 시각적 요소를 정하면 목적에 맞는 구도와 보기 좋지만 부적합한 이미지를 구분할 수 있습니다."
				},
				{
					"heading": "1단계: 추상적인 주제 바꾸기",
					"text": "수정 전: “아늑한 장소.” 수정 후: “높은 창문 옆의 독서용 의자.” 수정된 영어 주제를 입력하세요. 렌더링 서비스에 두 물체와 공간적 관계를 제공합니다. 이 단순한 배치가 잘 나올 때까지 관련 없는 물건을 추가하지 마세요."
				},
				{
					"heading": "2단계: 생성하고 수식어 살펴보기",
					"text": "수채화와 평화로운 분위기를 선택하세요. 아래 실제 출력은 주제에 부드러운 가장자리, 흐르는 색감, 차분한 조명을 결합합니다. 이는 묘사 요청이며 렌더링 설정이 아닙니다. 복사 전에 프롬프트 전체를 읽어 충돌을 찾으세요.",
					"example": "입력 및 선택 항목\n주제: A reading chair beside a tall window\n스타일: 수채화\n분위기: 평화로움\n\n실제 도구 출력\nA reading chair beside a tall window, watercolor painting, soft edges, flowing colors, artistic, delicate, calm, serene, soft lighting, gentle, harmonious, tranquil, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "3단계: 목적이 있는 변형 만들기",
					"text": "주제와 스타일은 유지하고 분위기만 극적으로 바꾸세요. 먼저 두 텍스트 프롬프트를 비교하면 분위기 문구만 달라져야 합니다. 다른 곳에서 둘 다 렌더링한다면 가능한 한 해당 서비스의 나머지 설정을 유지하고 조명과 대비를 구체적으로 살펴보세요."
				},
				{
					"heading": "4단계: 장식보다 구도 확인하기",
					"text": "의자가 창문 옆에 있는지, 둘 다 보이는지 살펴보세요. 위치가 틀리면 주제를 고쳐 배치를 명시하세요. 품질 형용사를 하나 더 붙여도 물체의 위치는 설명되지 않습니다. 선택한 이미지와 프롬프트를 함께 보관하세요."
				},
				{
					"heading": "실수 1: 품질 표현을 제어 설정으로 보기",
					"text": "접미 문구는 픽셀 크기를 설정하거나 읽을 수 있는 글자를 보장하지 못합니다. 대상 서비스에서 실제 크기 설정을 선택하고 내보낸 이미지를 확인하세요."
				},
				{
					"heading": "실수 2: 양립하기 어려운 지시 섞기",
					"text": "선명한 잉크 윤곽선을 요구하는 주제는 수채화의 부드러운 가장자리와 충돌할 수 있습니다. 중요한 표현 방식을 정한 뒤 복사한 프롬프트에서 반대되는 문구를 제거하세요."
				},
				{
					"heading": "추가 예제: 제품 장면 묘사",
					"text": "머그잔 예제는 사전 설정 문구가 붙기 전에 물체 사이의 위치 관계를 정합니다. 포토리얼리스틱은 카메라와 해상도 어휘를, 평화로운은 조명과 분위기 표현을 추가합니다. 이 단어들은 복사할 프롬프트의 일부이며, 이미지 크기를 설정하거나 카메라를 조작하거나 이 페이지에서 사진을 만들지는 않습니다.",
					"example": "입력과 선택값\nsubject: A ceramic mug beside a folded blue napkin on a wooden table\nstyle: photorealistic\nmood: peaceful\n\n정확한 도구 출력\nA ceramic mug beside a folded blue napkin on a wooden table, ultra realistic, high resolution, 8k, photograph, DSLR, professional photography, calm, serene, soft lighting, gentle, harmonious, tranquil, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "추가 예제: 반복 수식어 확인",
					"text": "온실 예제는 유화와 신비로운을 조합합니다. 정확한 출력에서 masterpiece가 유화 설정과 공통 접미 문구에 각각 한 번씩 나오는 것을 확인하세요. 생성기는 중복을 제거하거나 충돌하는 묘사를 조정하지 않습니다. 다른 곳에서 사용하기 전에 복사한 프롬프트를 편집하되 대상과 위치 관계는 명확하게 유지하세요.",
					"example": "입력과 선택값\nsubject: An abandoned greenhouse behind a stone wall\nstyle: oil\nmood: mysterious\n\n정확한 도구 출력\nAn abandoned greenhouse behind a stone wall, oil painting, classical art style, painterly, textured canvas, masterpiece, dark and moody, foggy, enigmatic, shadowy, ethereal, highly detailed, masterpiece, best quality"
				},
				{
					"heading": "실수 3: 품질 단어를 설정으로 보기",
					"text": "8k와 best quality는 문자 그대로의 텍스트입니다. 외부 생성기의 해상도나 품질을 강제하지 않으므로 해당 생성기의 설정을 직접 확인해야 합니다."
				},
				{
					"heading": "실수 4: 주된 대상을 흐리기",
					"text": "추상적인 형용사를 길게 나열하면 무엇이 보여야 하는지 흐려집니다. 장식적인 세부사항보다 먼저 주요 대상에 물체, 장소, 관계를 적으세요."
				},
				{
					"heading": "실수 5: 네거티브 프롬프트 설정 기대하기",
					"text": "별도의 네거티브 프롬프트 필드는 없습니다. 주요 대상에 적은 제외 조건은 같은 문자열로 복사되며 생성기 전용 문법으로 변환되지 않습니다."
				},
				{
					"heading": "더 나은 결과를 위한 팁",
					"text": "",
					"tips": [
						"스타일이나 분위기 하나를 바꿔 비교할 때 주요 대상은 유지하세요.",
						"마지막 접미 문구가 직접 쓴 표현과 반복되는지 확인하세요.",
						"사전 설정은 문구 선택으로 보고, 크기 등 렌더링 설정은 이용하는 이미지 서비스에서 지정하세요."
					]
				}
			]
		},
		ja: {
			title: '画像プロンプトビルダーガイド',
			description: 'Midjourney、DALL-E、Stable Diffusion用の画像プロンプト作成技術をマスターしましょう。視覚的記述子、スタイル、テクニックを学びましょう。',
			sections: [
				{ heading: '画像プロンプトを理解する', text: '画像プロンプトは、Midjourney、DALL-E、Stable DiffusionなどのAI画像生成ツールに何を作成するかを伝えます。テキストプロンプトとは異なり、画像プロンプトは具体的な視覚的記述、芸術スタイル、技術的パラメータが効果的です。画像プロンプトの構造の仕方が、構図、照明、カラーパレット、雰囲気のすべてを決定します。AI画像生成技術が急速に進化する中、プロンプト作成をマスターすることで、あらゆる目的のために素晴らしいビジュアルを作成する能力が得られます。' },
				{ heading: '重要なコンポーネント', text: '効果的な画像プロンプトには、被写体の説明、芸術スタイル、照明条件、カメラアングル、カラーパレット、雰囲気、アスペクト比や品質設定などの技術仕様が含まれます。被写体は明確かつ具体的に描写する必要があります。「犬」の代わりに「秋の落ち葉の上に座っているゴールデンレトリーバーの子犬」と試してみてください。' },
				{ heading: 'スタイルキーワード', text: '人気のスタイルキーワード：フォトリアル、シネマティック、アニメ、水彩画、油絵、デジタルアート、コンセプトアート、3Dレンダー、ミニマル、ヴィンテージ、サイバーパンク、ファンタジー。スタイルを組み合わせるとユニークな結果が得られます。各スタイルキーワードはAIモデルで異なる視覚的特性をトリガーします。「サイバーパンク水彩画」や「ミニマルファンタジー」のように予想外のスタイルを組み合わせて実験してみてください。' },
				{ heading: 'ビルダーの使い方', text: '画像プロンプトビルダーが各コンポーネントをガイドします。被写体を選択し、スタイルを選択し、修飾子を追加すると、お好みのAI画像生成ツール用に最適化されたプロンプトを生成します。ビルダーには、さまざまなAIプラットフォームで優れた結果を生み出すことが実証されたキーワードの組み合わせが含まれています。' },
				{ heading: 'プラットフォーム別のヒント', text: 'Midjourneyは芸術的な記述子と--ar 16:9（アスペクト比）、--v 6（モデルバージョン）、--s（スタイル化レベル）などのパラメータによく反応します。DALL-Eは完全な文として書かれた自然言語の説明を好みます。Stable Diffusionはカンマ区切りのキーワード、ネガティブプロンプト、特定のサンプラー設定が効果的です。' },
				{ heading: 'よくある間違い', text: '曖昧な説明、矛盾するスタイル、多すぎる被写体、過度に複雑なプロンプトは避けてください。シンプルに始めて詳細を段階的に追加してください。バリエーションをテストして最適な結果を見つけてください。その他のよくある間違いには、矛盾する照明の説明の使用、互いに薄まり合う多すぎるスタイルキーワード、用途に合わないアスペクト比の無視、不要な要素を除外するネガティブプロンプトの未使用などがあります。' }
			]
		},
		zh: {
			title: '图像提示词构建器指南',
			description: '掌握为 Midjourney、DALL-E 和 Stable Diffusion 创建图像提示词的技巧。学习视觉描述符、风格和技术。',
			sections: [
				{ heading: '理解图像提示词', text: '图像提示词告诉 Midjourney、DALL-E 和 Stable Diffusion 等 AI 图像生成器要创建什么。与文本提示词不同，图像提示词受益于具体的视觉描述、艺术风格和技术参数。您构建图像提示词的方式决定了从构图、光照到调色板和氛围的一切。随着 AI 图像生成技术的快速发展，掌握提示词写作使您能够为任何目的创建令人惊叹的视觉效果。' },
				{ heading: '关键组成部分', text: '有效的图像提示词包括：主题描述、艺术风格、光照条件、相机角度、调色板、氛围以及宽高比和质量设置等技术规格。主题应该清晰具体地描述——不要说"一只狗"，试试"一只坐在秋叶上的金毛猎犬幼犬"。风格决定整体美学。光照和相机角度创造戏剧效果并引导观众的视线。' },
				{ heading: '风格关键词', text: '流行的风格关键词包括：写实、电影感、动漫、水彩、油画、数字艺术、概念艺术、3D 渲染、极简、复古、赛博朋克和奇幻。组合风格可以创造独特的结果。每个风格关键词在 AI 模型中触发不同的视觉特征。尝试组合意想不到的风格，如"赛博朋克水彩"或"极简奇幻"，发现独特的美学。' },
				{ heading: '使用我们的构建器', text: '我们的图像提示词构建器会引导您完成每个组件。选择您的主题，选择风格，添加修饰词，工具会为您首选的 AI 图像生成器生成优化的提示词。构建器包含经过测试的关键词组合，已知可在不同 AI 平台上产生出色的结果。' },
				{ heading: '平台特定技巧', text: 'Midjourney 对艺术描述和 --ar 16:9（宽高比）、--v 6（模型版本）、--s（风格化级别）等参数响应良好。DALL-E 偏好以完整句子编写的自然语言描述。Stable Diffusion 最适合逗号分隔的关键词、负面提示词和特定的采样器设置。了解每个平台的优势有助于为项目选择正确的工具。' },
				{ heading: '常见错误', text: '避免模糊的描述、冲突的风格、太多主题或过于复杂的提示词。从简单开始，逐步添加细节。测试变体以找到最佳效果。其他常见错误包括：使用矛盾的光照描述、塞入太多互相稀释的风格关键词、忽略预期用途的宽高比、不使用负面提示词排除不需要的元素。' }
			]
		},
		es: {
			title: 'Guia del Constructor de Prompts de Imagen',
			description: 'Domina el arte de crear prompts de imagen para Midjourney, DALL-E y Stable Diffusion. Aprende descriptores visuales, estilos y tecnicas.',
			sections: [
				{ heading: 'Entendiendo los Prompts de Imagen', text: 'Los prompts de imagen le dicen a generadores de IA como Midjourney, DALL-E y Stable Diffusion que crear. A diferencia de los prompts de texto, los prompts de imagen se benefician de descriptores visuales especificos, estilos artisticos y parametros tecnicos. La forma en que estructuras un prompt de imagen determina todo, desde la composicion y la iluminacion hasta la paleta de colores y el estado de animo. Dominar la escritura de prompts te da la capacidad de crear visuales impresionantes para cualquier proposito.' },
				{ heading: 'Componentes Clave', text: 'Los prompts de imagen efectivos incluyen: descripcion del sujeto, estilo artistico, condiciones de iluminacion, angulo de camara, paleta de colores, atmosfera y especificaciones tecnicas como relacion de aspecto y configuraciones de calidad. El sujeto debe describirse de manera clara y especifica: en lugar de "un perro", prueba "un cachorro de golden retriever sentado en hojas de otono".' },
				{ heading: 'Palabras Clave de Estilo', text: 'Las palabras clave de estilo populares incluyen: fotorrealista, cinematico, anime, acuarela, pintura al oleo, arte digital, arte conceptual, renderizado 3D, minimalista, vintage, cyberpunk y fantasia. Combinar estilos puede crear resultados unicos. Experimenta combinando estilos inesperados como "acuarela cyberpunk" o "fantasia minimalista".' },
				{ heading: 'Usando Nuestro Constructor', text: 'Nuestro Constructor de Prompts de Imagen te guia a traves de cada componente. Selecciona tu sujeto, elige un estilo, agrega modificadores y la herramienta genera un prompt optimizado para tu generador de imagenes de IA preferido. El constructor incluye combinaciones de palabras clave pre-probadas.' },
				{ heading: 'Consejos por Plataforma', text: 'Midjourney responde bien a descriptores artisticos y parametros como --ar 16:9 para relacion de aspecto. DALL-E prefiere descripciones en lenguaje natural escritas como oraciones completas. Stable Diffusion funciona mejor con palabras clave separadas por comas y prompts negativos para excluir elementos no deseados.' },
				{ heading: 'Errores Comunes', text: 'Evita descripciones vagas, estilos conflictivos, demasiados sujetos o prompts excesivamente complejos. Comienza simple y agrega detalles gradualmente. Prueba variaciones para encontrar lo que funciona mejor. Otros errores comunes incluyen usar descripciones de iluminacion contradictorias, usar demasiadas palabras clave de estilo que se diluyen entre si e ignorar la relacion de aspecto para el uso previsto.' }
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
				{#if section.text}
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
				{/if}
				{#if section.tips}
					<ul class="list-disc pl-6 mt-3 space-y-2 text-gray-600 dark:text-dark-400 leading-relaxed">
						{#each section.tips as tip}
							<li>{tip}</li>
						{/each}
					</ul>
				{/if}
				{#if section.example}
					<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3 text-gray-800 dark:text-dark-200"><code>{section.example}</code></pre>
				{/if}
			</div>
		{/each}
	</div>
	{#if lang === 'en' || lang === 'ko'}
		<nav class="mt-8 space-y-3 text-sm" aria-label={lang === 'ko' ? '관련 도구와 가이드' : 'Related tools and guides'}>
			<a href="/{lang}/image" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "이미지 프롬프트 생성기" : "Image Prompt Builder"}</a>
			<a href="/{lang}/prompt" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "프롬프트 생성기" : "Prompt Generator"}</a>
			<a href="/{lang}/hashtag" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "해시태그 프롬프트 생성기" : "Hashtag Prompt Builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/image" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{lang === 'ko' ? "이미지 프롬프트 생성기 사용하기" : "Try Image Prompt Builder"} &rarr;
		</a>
	</div>
</div>
