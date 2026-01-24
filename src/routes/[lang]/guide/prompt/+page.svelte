<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Prompt Generator Guide',
			sections: [
				{ heading: 'What is a Prompt?', text: 'A prompt is the input text you give to an AI model like ChatGPT or Claude. The quality of your prompt directly affects the quality of the AI\'s response. Well-crafted prompts lead to more accurate, relevant, and useful outputs.' },
				{ heading: 'Key Elements of Effective Prompts', text: 'Good prompts typically include: clear context, specific instructions, desired output format, examples when helpful, and constraints or limitations. The more specific you are, the better results you\'ll get.' },
				{ heading: 'Using Our Prompt Generator', text: 'Our tool helps you structure prompts effectively. Simply describe your task, select the AI model you\'re using, choose the output style, and let our generator create an optimized prompt for you.' },
				{ heading: 'Tips for Better Results', text: 'Be specific about what you want. Use clear, simple language. Break complex tasks into steps. Provide examples of desired output. Specify the tone and format you need. Iterate and refine based on results.' },
				{ heading: 'Common Use Cases', text: 'Content creation, code generation, data analysis, creative writing, research assistance, email drafting, translation, summarization, and brainstorming. Our generator supports all these and more.' },
				{ heading: 'Best Practices', text: 'Start with a clear goal. Test your prompts with different inputs. Save successful prompts for reuse. Adjust based on the AI model you\'re using. Remember that different models may respond differently to the same prompt.' }
			]
		},
		ko: {
			title: '프롬프트 생성기 가이드',
			sections: [
				{ heading: '프롬프트란?', text: '프롬프트는 ChatGPT나 Claude 같은 AI 모델에 제공하는 입력 텍스트입니다. 프롬프트의 품질이 AI 응답의 품질에 직접적인 영향을 미칩니다. 잘 작성된 프롬프트는 더 정확하고 관련성 있으며 유용한 결과를 이끌어냅니다.' },
				{ heading: '효과적인 프롬프트의 핵심 요소', text: '좋은 프롬프트에는 일반적으로 명확한 맥락, 구체적인 지시사항, 원하는 출력 형식, 필요시 예시, 제약 조건이 포함됩니다. 구체적일수록 더 나은 결과를 얻을 수 있습니다.' },
				{ heading: '프롬프트 생성기 사용법', text: '도구가 프롬프트를 효과적으로 구조화하도록 도와줍니다. 작업을 설명하고, 사용할 AI 모델을 선택하고, 출력 스타일을 선택하면 최적화된 프롬프트를 생성합니다.' },
				{ heading: '더 나은 결과를 위한 팁', text: '원하는 것을 구체적으로 설명하세요. 명확하고 간단한 언어를 사용하세요. 복잡한 작업은 단계로 나누세요. 원하는 출력의 예시를 제공하세요. 필요한 톤과 형식을 지정하세요.' },
				{ heading: '일반적인 사용 사례', text: '콘텐츠 제작, 코드 생성, 데이터 분석, 창작 글쓰기, 연구 지원, 이메일 작성, 번역, 요약, 브레인스토밍. 생성기는 이 모든 것을 지원합니다.' },
				{ heading: '모범 사례', text: '명확한 목표로 시작하세요. 다양한 입력으로 프롬프트를 테스트하세요. 성공적인 프롬프트를 재사용을 위해 저장하세요. 사용하는 AI 모델에 따라 조정하세요.' }
			]
		},
		ja: {
			title: 'プロンプト生成ガイド',
			sections: [
				{ heading: 'プロンプトとは？', text: 'プロンプトは、ChatGPTやClaudeなどのAIモデルに与える入力テキストです。プロンプトの品質がAIの応答品質に直接影響します。よく練られたプロンプトは、より正確で関連性があり有用な出力につながります。' },
				{ heading: '効果的なプロンプトの重要な要素', text: '良いプロンプトには通常、明確なコンテキスト、具体的な指示、望ましい出力形式、必要に応じた例、制約条件が含まれます。具体的であればあるほど、より良い結果が得られます。' },
				{ heading: 'プロンプト生成ツールの使い方', text: 'ツールがプロンプトを効果的に構造化するお手伝いをします。タスクを説明し、使用するAIモデルを選択し、出力スタイルを選択すると、最適化されたプロンプトを生成します。' },
				{ heading: 'より良い結果のためのヒント', text: '欲しいものを具体的に説明してください。明確でシンプルな言語を使用してください。複雑なタスクはステップに分けてください。望ましい出力の例を提供してください。必要なトーンと形式を指定してください。' },
				{ heading: '一般的な使用例', text: 'コンテンツ作成、コード生成、データ分析、クリエイティブライティング、研究支援、メール作成、翻訳、要約、ブレインストーミング。ジェネレーターはこれらすべてをサポートしています。' },
				{ heading: 'ベストプラクティス', text: '明確な目標から始めてください。さまざまな入力でプロンプトをテストしてください。成功したプロンプトは再利用のために保存してください。使用するAIモデルに応じて調整してください。' }
			]
		},
		zh: {
			title: '提示词生成器指南',
			sections: [
				{ heading: '什么是提示词？', text: '提示词是您提供给 ChatGPT 或 Claude 等 AI 模型的输入文本。提示词的质量直接影响 AI 响应的质量。精心设计的提示词可以带来更准确、更相关、更有用的输出。' },
				{ heading: '有效提示词的关键要素', text: '好的提示词通常包括：清晰的上下文、具体的指令、期望的输出格式、有用的示例以及约束条件。您越具体，得到的结果就越好。' },
				{ heading: '使用我们的提示词生成器', text: '我们的工具帮助您有效地构建提示词。只需描述您的任务，选择您使用的 AI 模型，选择输出风格，让我们的生成器为您创建优化的提示词。' },
				{ heading: '获得更好结果的技巧', text: '明确说明您想要什么。使用清晰、简单的语言。将复杂的任务分解为步骤。提供期望输出的示例。指定您需要的语气和格式。根据结果进行迭代和改进。' },
				{ heading: '常见用例', text: '内容创作、代码生成、数据分析、创意写作、研究协助、邮件起草、翻译、摘要和头脑风暴。我们的生成器支持所有这些及更多。' },
				{ heading: '最佳实践', text: '从明确的目标开始。用不同的输入测试您的提示词。保存成功的提示词以便重复使用。根据您使用的 AI 模型进行调整。记住不同的模型对相同提示词的响应可能不同。' }
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
		<a href="/{lang}/prompt" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			Try Prompt Generator →
		</a>
	</div>
</div>
