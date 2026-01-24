<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Image Prompt Builder Guide',
			sections: [
				{ heading: 'Understanding Image Prompts', text: 'Image prompts tell AI image generators like Midjourney, DALL-E, and Stable Diffusion what to create. Unlike text prompts, image prompts benefit from specific visual descriptors, artistic styles, and technical parameters.' },
				{ heading: 'Key Components', text: 'Effective image prompts include: subject description, artistic style, lighting conditions, camera angle, color palette, mood/atmosphere, and technical specifications like aspect ratio and quality settings.' },
				{ heading: 'Style Keywords', text: 'Popular style keywords include: photorealistic, cinematic, anime, watercolor, oil painting, digital art, concept art, 3D render, minimalist, vintage, cyberpunk, and fantasy. Combining styles can create unique results.' },
				{ heading: 'Using Our Builder', text: 'Our Image Prompt Builder guides you through each component. Select your subject, choose a style, add modifiers, and the tool generates an optimized prompt for your preferred AI image generator.' },
				{ heading: 'Platform-Specific Tips', text: 'Midjourney responds well to artistic descriptors and --parameters. DALL-E prefers natural language descriptions. Stable Diffusion works best with comma-separated keywords and negative prompts.' },
				{ heading: 'Common Mistakes', text: 'Avoid vague descriptions, conflicting styles, too many subjects, or overly complex prompts. Start simple and add details. Test variations to find what works best.' }
			]
		},
		ko: {
			title: '이미지 프롬프트 빌더 가이드',
			sections: [
				{ heading: '이미지 프롬프트 이해하기', text: '이미지 프롬프트는 Midjourney, DALL-E, Stable Diffusion 같은 AI 이미지 생성기에게 무엇을 만들지 알려줍니다. 텍스트 프롬프트와 달리 이미지 프롬프트는 구체적인 시각적 설명, 예술 스타일, 기술 매개변수가 중요합니다.' },
				{ heading: '핵심 구성 요소', text: '효과적인 이미지 프롬프트에는 주제 설명, 예술 스타일, 조명 조건, 카메라 앵글, 색상 팔레트, 분위기, 종횡비와 품질 설정 같은 기술 사양이 포함됩니다.' },
				{ heading: '스타일 키워드', text: '인기 있는 스타일 키워드: 사실적, 영화적, 애니메이션, 수채화, 유화, 디지털 아트, 컨셉 아트, 3D 렌더, 미니멀, 빈티지, 사이버펑크, 판타지. 스타일을 조합하면 독특한 결과를 만들 수 있습니다.' },
				{ heading: '빌더 사용법', text: '이미지 프롬프트 빌더가 각 구성 요소를 안내합니다. 주제를 선택하고, 스타일을 선택하고, 수정자를 추가하면 선호하는 AI 이미지 생성기에 최적화된 프롬프트를 생성합니다.' },
				{ heading: '플랫폼별 팁', text: 'Midjourney는 예술적 설명과 --매개변수에 잘 반응합니다. DALL-E는 자연어 설명을 선호합니다. Stable Diffusion은 쉼표로 구분된 키워드와 부정 프롬프트가 효과적입니다.' },
				{ heading: '흔한 실수', text: '모호한 설명, 충돌하는 스타일, 너무 많은 주제, 지나치게 복잡한 프롬프트를 피하세요. 단순하게 시작하고 세부 사항을 추가하세요. 변형을 테스트하여 최적의 결과를 찾으세요.' }
			]
		},
		ja: {
			title: '画像プロンプトビルダーガイド',
			sections: [
				{ heading: '画像プロンプトを理解する', text: '画像プロンプトは、Midjourney、DALL-E、Stable Diffusionなどの AI画像生成ツールに何を作成するかを伝えます。テキストプロンプトとは異なり、画像プロンプトは具体的な視覚的記述、芸術スタイル、技術的パラメータが効果的です。' },
				{ heading: '重要なコンポーネント', text: '効果的な画像プロンプトには、被写体の説明、芸術スタイル、照明条件、カメラアングル、カラーパレット、雰囲気、アスペクト比や品質設定などの技術仕様が含まれます。' },
				{ heading: 'スタイルキーワード', text: '人気のスタイルキーワード：フォトリアル、シネマティック、アニメ、水彩画、油絵、デジタルアート、コンセプトアート、3Dレンダー、ミニマル、ヴィンテージ、サイバーパンク、ファンタジー。スタイルを組み合わせるとユニークな結果が得られます。' },
				{ heading: 'ビルダーの使い方', text: '画像プロンプトビルダーが各コンポーネントをガイドします。被写体を選択し、スタイルを選択し、修飾子を追加すると、お好みのAI画像生成ツール用に最適化されたプロンプトを生成します。' },
				{ heading: 'プラットフォーム別のヒント', text: 'Midjourneyは芸術的な記述子と--パラメータによく反応します。DALL-Eは自然言語の説明を好みます。Stable Diffusionはカンマ区切りのキーワードとネガティブプロンプトが効果的です。' },
				{ heading: 'よくある間違い', text: '曖昧な説明、矛盾するスタイル、多すぎる被写体、過度に複雑なプロンプトは避けてください。シンプルに始めて詳細を追加してください。バリエーションをテストして最適な結果を見つけてください。' }
			]
		},
		zh: {
			title: '图像提示词构建器指南',
			sections: [
				{ heading: '理解图像提示词', text: '图像提示词告诉 Midjourney、DALL-E 和 Stable Diffusion 等 AI 图像生成器要创建什么。与文本提示词不同，图像提示词受益于具体的视觉描述、艺术风格和技术参数。' },
				{ heading: '关键组成部分', text: '有效的图像提示词包括：主题描述、艺术风格、光照条件、相机角度、调色板、氛围以及宽高比和质量设置等技术规格。' },
				{ heading: '风格关键词', text: '流行的风格关键词包括：写实、电影感、动漫、水彩、油画、数字艺术、概念艺术、3D 渲染、极简、复古、赛博朋克和奇幻。组合风格可以创造独特的结果。' },
				{ heading: '使用我们的构建器', text: '我们的图像提示词构建器会引导您完成每个组件。选择您的主题，选择风格，添加修饰词，工具会为您首选的 AI 图像生成器生成优化的提示词。' },
				{ heading: '平台特定技巧', text: 'Midjourney 对艺术描述和 --参数响应良好。DALL-E 偏好自然语言描述。Stable Diffusion 最适合逗号分隔的关键词和负面提示词。' },
				{ heading: '常见错误', text: '避免模糊的描述、冲突的风格、太多主题或过于复杂的提示词。从简单开始，逐步添加细节。测试变体以找到最佳效果。' }
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
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
			Try Image Prompt Builder →
		</a>
	</div>
</div>
