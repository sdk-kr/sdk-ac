<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; sections: { heading: string; text: string }[] };

	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: 'Image Prompt Builder Guide',
			description: 'Master the art of creating image prompts for Midjourney, DALL-E, and Stable Diffusion. Learn visual descriptors, styles, and techniques.',
			sections: [
				{ heading: 'Understanding Image Prompts', text: 'Image prompts tell AI image generators like Midjourney, DALL-E, and Stable Diffusion what to create. Unlike text prompts, image prompts benefit from specific visual descriptors, artistic styles, and technical parameters. The way you structure an image prompt determines everything from composition and lighting to color palette and mood. Learning to write effective image prompts is both an art and a science, requiring an understanding of visual terminology, AI model behavior, and creative expression. As AI image generation technology evolves rapidly, mastering prompt writing gives you the ability to create stunning visuals for any purpose.' },
				{ heading: 'Key Components', text: 'Effective image prompts include: subject description, artistic style, lighting conditions, camera angle, color palette, mood/atmosphere, and technical specifications like aspect ratio and quality settings. The subject should be described clearly and specifically - instead of "a dog," try "a golden retriever puppy sitting in autumn leaves." Style determines the overall aesthetic: photorealistic, digital art, oil painting, watercolor, etc. Lighting and camera angle create dramatic effects and guide the viewer\'s eye. Color palette sets the emotional tone. Quality modifiers like "highly detailed," "8K," or "professional photography" push the AI toward higher-quality outputs.' },
				{ heading: 'Style Keywords', text: 'Popular style keywords include: photorealistic, cinematic, anime, watercolor, oil painting, digital art, concept art, 3D render, minimalist, vintage, cyberpunk, and fantasy. Combining styles can create unique results. Each style keyword triggers different visual characteristics in the AI model. Photorealistic produces lifelike images, while anime creates Japanese animation-style artwork. Cinematic gives a wide-angle, movie-quality feel. Experiment with combining unexpected styles, like "cyberpunk watercolor" or "minimalist fantasy," to discover unique aesthetics that set your images apart from generic AI art.' },
				{ heading: 'Using Our Builder', text: 'Our Image Prompt Builder guides you through each component. Select your subject, choose a style, add modifiers, and the tool generates an optimized prompt for your preferred AI image generator. The builder includes pre-tested keyword combinations that are known to produce excellent results across different AI platforms. You can also customize the output by adding your own descriptors and adjusting the order of elements. Save your favorite prompt templates for quick reuse on future projects.' },
				{ heading: 'Platform-Specific Tips', text: 'Midjourney responds well to artistic descriptors and --parameters like --ar 16:9 for aspect ratio, --v 6 for model version, and --s for stylization level. DALL-E prefers natural language descriptions written as complete sentences. Stable Diffusion works best with comma-separated keywords, negative prompts to exclude unwanted elements, and specific sampler settings. Understanding each platform\'s strengths helps you choose the right tool for your project: Midjourney excels at artistic and aesthetic images, DALL-E is great for realistic and conceptual illustrations, and Stable Diffusion offers the most customization and control.' },
				{ heading: 'Common Mistakes', text: 'Avoid vague descriptions, conflicting styles, too many subjects, or overly complex prompts. Start simple and add details incrementally. Test variations to find what works best. Other common mistakes include: using contradictory lighting descriptions (like "dark shadows with bright sunlight"), cramming too many style keywords that dilute each other, ignoring aspect ratio for the intended use, and not using negative prompts to exclude unwanted elements. The best approach is to start with a clear mental image of what you want, describe the most important elements first, and then refine through iteration.' }
			]
		},
		ko: {
			title: '이미지 프롬프트 빌더 가이드',
			description: 'Midjourney, DALL-E, Stable Diffusion을 위한 이미지 프롬프트 작성 기술을 마스터하세요. 시각적 설명자, 스타일, 기법을 배우세요.',
			sections: [
				{ heading: '이미지 프롬프트 이해하기', text: '이미지 프롬프트는 Midjourney, DALL-E, Stable Diffusion 같은 AI 이미지 생성기에게 무엇을 만들지 알려줍니다. 텍스트 프롬프트와 달리 이미지 프롬프트는 구체적인 시각적 설명, 예술 스타일, 기술 매개변수가 중요합니다. 이미지 프롬프트를 구조화하는 방식이 구도, 조명, 색상 팔레트, 분위기 등 모든 것을 결정합니다. AI 이미지 생성 기술이 빠르게 발전하면서 프롬프트 작성을 마스터하면 어떤 목적으로든 멋진 비주얼을 만들 수 있습니다.' },
				{ heading: '핵심 구성 요소', text: '효과적인 이미지 프롬프트에는 주제 설명, 예술 스타일, 조명 조건, 카메라 앵글, 색상 팔레트, 분위기, 종횡비와 품질 설정 같은 기술 사양이 포함됩니다. 주제는 명확하고 구체적으로 설명해야 합니다. "개" 대신 "가을 낙엽 위에 앉아 있는 골든 리트리버 강아지"라고 시도해 보세요. 스타일은 전체적인 미학을 결정합니다. 조명과 카메라 앵글은 극적인 효과를 만들고 시선을 유도합니다.' },
				{ heading: '스타일 키워드', text: '인기 있는 스타일 키워드: 사실적, 영화적, 애니메이션, 수채화, 유화, 디지털 아트, 컨셉 아트, 3D 렌더, 미니멀, 빈티지, 사이버펑크, 판타지. 스타일을 조합하면 독특한 결과를 만들 수 있습니다. 각 스타일 키워드는 AI 모델에서 다른 시각적 특성을 트리거합니다. "사이버펑크 수채화"나 "미니멀 판타지"와 같이 예상치 못한 스타일을 결합해 보세요.' },
				{ heading: '빌더 사용법', text: '이미지 프롬프트 빌더가 각 구성 요소를 안내합니다. 주제를 선택하고, 스타일을 선택하고, 수정자를 추가하면 선호하는 AI 이미지 생성기에 최적화된 프롬프트를 생성합니다. 빌더에는 다양한 AI 플랫폼에서 우수한 결과를 내는 것으로 검증된 키워드 조합이 포함되어 있습니다.' },
				{ heading: '플랫폼별 팁', text: 'Midjourney는 예술적 설명과 --ar 16:9(종횡비), --v 6(모델 버전), --s(스타일화 수준) 같은 매개변수에 잘 반응합니다. DALL-E는 완전한 문장으로 작성된 자연어 설명을 선호합니다. Stable Diffusion은 쉼표로 구분된 키워드, 부정 프롬프트, 특정 샘플러 설정이 효과적입니다. 각 플랫폼의 장점을 이해하면 프로젝트에 적합한 도구를 선택하는 데 도움이 됩니다.' },
				{ heading: '흔한 실수', text: '모호한 설명, 충돌하는 스타일, 너무 많은 주제, 지나치게 복잡한 프롬프트를 피하세요. 단순하게 시작하고 세부 사항을 점진적으로 추가하세요. 변형을 테스트하여 최적의 결과를 찾으세요. 다른 흔한 실수로는 모순되는 조명 설명 사용, 서로를 희석시키는 너무 많은 스타일 키워드 사용, 용도에 맞지 않는 종횡비 무시, 부정 프롬프트를 사용하지 않는 것 등이 있습니다.' }
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
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/image" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			Try Image Prompt Builder &rarr;
		</a>
	</div>
</div>
