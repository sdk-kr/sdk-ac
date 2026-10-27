<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	type GuideContent = { title: string; description: string; cta: string; sections: { heading: string; text: string; example?: string; tips?: string[] }[] };
	const content: Partial<Record<Locale, GuideContent>> & { en: GuideContent } = {
		en: {
			title: "Code Explanation Prompt Builder Guide",
			description: "Prepare a code explanation request, trace a small example, and verify the explanation against the source.",
			cta: "Try Code Explanation Prompt Builder",
			sections: [
				{
					"heading": "Choose a behavior you can trace",
					"text": "The page packages code for another assistant to explain. This tutorial uses an array transformation because each input and output can be checked without relying on a broad description of what the program “probably” does. No code runs in the page’s explanation function."
				},
				{
					"heading": "Step 1: supply the missing input",
					"text": "Before: “Explain map.” After: “const doubled = [2, 4].map(n => n * 2);” The revised example includes source values and the transformation. Paste the statement, select JavaScript, and choose Intermediate to request an explanation that assumes basic programming knowledge."
				},
				{
					"heading": "Step 2: inspect the request",
					"text": "Generate the exact prompt below. Confirm that the fence says javascript and the statement is unchanged. This is the after state of the tool interaction: a structured explanation request. It is not a result from executing the array transformation.",
					"example": "Input and selections\nCode: const doubled = [2, 4].map(n => n * 2);\nLanguage: JavaScript\nLevel: Intermediate\n\nExact tool output\nPlease explain this JavaScript code:\n\n```javascript\nconst doubled = [2, 4].map(n => n * 2);\n```\n\nExplain this code assuming I understand basic programming concepts like variables, loops, and functions."
				},
				{
					"heading": "Step 3: make your own trace",
					"text": "Before reading an assistant’s answer, trace the callback: 2 multiplied by 2 gives 4; 4 multiplied by 2 gives 8. Your expected array is [4, 8]. This manual reasoning provides a concrete check for the later explanation rather than trusting its confident tone."
				},
				{
					"heading": "Step 4: ask about one uncertainty",
					"text": "After using the prompt elsewhere, ask how the callback result becomes an element of the new array. Compare that explanation with your trace. For code with helper functions, include their relevant definitions before expecting the same level of certainty."
				},
				{
					"heading": "Mistake 1: confusing the label with detection",
					"text": "Selecting Python does not convert JavaScript or validate syntax. It simply changes the language name and fence label, potentially misleading the assistant receiving the prompt."
				},
				{
					"heading": "Mistake 2: treating Advanced as an audit",
					"text": "Advanced asks for complexity and optimization discussion. It does not prove correctness or security. Check any proposed change against expected behavior and your normal tests."
				},
				{
					"heading": "Worked example: explain a small Python total",
					"text": "The Python example includes concrete prices and selects Beginner. The builder surrounds the snippet with a language-labelled code fence and asks for simple analogies. It does not calculate the total or run Python. An explanation obtained elsewhere should distinguish the stored list from the printed sum; use the actual code as the reference when checking that explanation.",
					"example": "Input and selections\ncode: prices = [12, 8, 5]\nprint(sum(prices))\nlanguage: Python\nlevel: beginner\n\nExact tool output\nPlease explain this Python code:\n\n```python\nprices = [12, 8, 5]\nprint(sum(prices))\n```\n\nExplain this code as if I am a complete beginner with no programming experience. Use simple analogies and avoid technical jargon."
				},
				{
					"heading": "Worked example: request an advanced explanation",
					"text": "For the duplicate-number example, Advanced appends requests for complexity, design patterns, and potential optimizations. Those are topics requested from another assistant, not findings produced by this page. The snippet itself is copied unchanged. Check whether an eventual explanation answers those topics accurately instead of assuming the extra technical vocabulary makes it correct.",
					"example": "Input and selections\ncode: const unique = [...new Set([2, 2, 5])];\nlanguage: JavaScript\nlevel: advanced\n\nExact tool output\nPlease explain this JavaScript code:\n\n```javascript\nconst unique = [...new Set([2, 2, 5])];\n```\n\nProvide a technical explanation including time/space complexity, design patterns used, and potential optimizations."
				},
				{
					"heading": "Mistake 3: relying on automatic language detection",
					"text": "The selected language supplies both the opening label and the lowercase fence tag. A Python snippet labelled JavaScript stays mismatched; the builder does not correct the selection."
				},
				{
					"heading": "Mistake 4: omitting the relevant caller",
					"text": "A function name alone rarely shows its inputs or surrounding assumptions. Include a small representative call when it matters; the builder cannot retrieve the missing project context."
				},
				{
					"heading": "Mistake 5: nesting fences without inspection",
					"text": "Triple backticks inside the snippet are copied literally and can disrupt the surrounding fence. Inspect the request before pasting it into an assistant that interprets Markdown."
				},
				{
					"heading": "Tips for better results",
					"text": "",
					"tips": [
						"Choose the language explicitly and keep the example self-contained.",
						"Change only the explanation level when comparing the preset instructions.",
						"Separate expected behavior from observed behavior in your later discussion; this page supplies neither execution results nor a verified diagnosis."
					]
				}
			]
		},
		ko: {
			title: "코드 설명 프롬프트 생성기 가이드",
			description: "코드 설명 요청을 준비하고 작은 예제를 추적한 뒤 설명을 소스와 대조하세요.",
			cta: "코드 설명 프롬프트 생성기 사용하기",
			sections: [
				{
					"heading": "추적할 수 있는 동작 선택하기",
					"text": "페이지는 다른 AI가 설명할 코드를 묶어 줍니다. 이 실습은 프로그램이 아마 무엇을 할 것이라는 포괄적 설명에 의존하지 않고 각 입력과 출력을 확인할 수 있도록 배열 변환을 사용합니다. 페이지의 설명 함수는 코드를 실행하지 않습니다."
				},
				{
					"heading": "1단계: 빠진 입력 제공하기",
					"text": "수정 전: “map을 설명해 줘.” 수정 후: “const doubled = [2, 4].map(n => n * 2);” 수정된 예제에는 원본 값과 변환이 들어 있습니다. 문장을 붙여넣고 JavaScript와 중급을 선택하여 기본 프로그래밍 지식을 가정한 설명을 요청하세요."
				},
				{
					"heading": "2단계: 요청 살펴보기",
					"text": "아래 실제 프롬프트를 생성하세요. 코드 블록의 언어가 javascript인지, 문장이 그대로인지 확인하세요. 이것이 도구 사용 후의 상태인 구조화된 설명 요청입니다. 배열 변환을 실행한 결과가 아닙니다.",
					"example": "입력 및 선택 항목\n코드: const doubled = [2, 4].map(n => n * 2);\n언어: JavaScript\n수준: 중급\n\n실제 도구 출력\nPlease explain this JavaScript code:\n\n```javascript\nconst doubled = [2, 4].map(n => n * 2);\n```\n\nExplain this code assuming I understand basic programming concepts like variables, loops, and functions."
				},
				{
					"heading": "3단계: 직접 흐름 추적하기",
					"text": "AI의 답을 읽기 전에 콜백을 추적하세요. 2에 2를 곱하면 4이고, 4에 2를 곱하면 8입니다. 예상 배열은 [4, 8]입니다. 이런 직접 추론은 자신감 있는 말투를 믿는 대신 나중의 설명을 구체적으로 확인할 기준이 됩니다."
				},
				{
					"heading": "4단계: 불확실한 점 하나 질문하기",
					"text": "다른 곳에서 프롬프트를 사용한 뒤 콜백 결과가 새 배열의 원소가 되는 과정을 물어보세요. 설명을 직접 추적한 내용과 비교하세요. 보조 함수가 있는 코드라면 같은 수준의 확실성을 기대하기 전에 관련 정의를 포함하세요."
				},
				{
					"heading": "실수 1: 라벨을 자동 감지로 오해하기",
					"text": "Python을 선택해도 JavaScript를 변환하거나 문법을 검증하지 않습니다. 언어 이름과 코드 블록 라벨만 바꾸므로 프롬프트를 받은 AI가 잘못 이해할 수 있습니다."
				},
				{
					"heading": "실수 2: 고급을 감사 기능으로 보기",
					"text": "고급은 복잡도와 최적화에 관한 설명을 요청합니다. 정확성이나 보안을 증명하지 않습니다. 제안된 변경은 예상 동작과 평소 사용하는 테스트로 확인하세요."
				},
				{
					"heading": "추가 예제: 작은 Python 합계 설명",
					"text": "Python 예제는 구체적인 가격을 넣고 초급을 선택합니다. 생성기는 언어 표시가 있는 코드 블록으로 코드를 감싸고 쉬운 비유를 요청합니다. 합계를 계산하거나 Python을 실행하지는 않습니다. 다른 곳에서 받은 설명이 저장된 목록과 출력되는 합계를 구분하는지 실제 코드를 기준으로 확인하세요.",
					"example": "입력과 선택값\ncode: prices = [12, 8, 5]\nprint(sum(prices))\nlanguage: Python\nlevel: beginner\n\n정확한 도구 출력\nPlease explain this Python code:\n\n```python\nprices = [12, 8, 5]\nprint(sum(prices))\n```\n\nExplain this code as if I am a complete beginner with no programming experience. Use simple analogies and avoid technical jargon."
				},
				{
					"heading": "추가 예제: 고급 설명 요청",
					"text": "중복 숫자 예제에서 고급은 복잡도, 설계 패턴, 개선 가능성에 대한 요청을 추가합니다. 이는 다른 AI에 요청하는 항목이지 이 페이지가 발견한 결과가 아닙니다. 코드는 그대로 복사됩니다. 기술 용어가 많다고 정확하다고 생각하지 말고, 나중에 받은 설명이 해당 항목에 정확히 답하는지 확인하세요.",
					"example": "입력과 선택값\ncode: const unique = [...new Set([2, 2, 5])];\nlanguage: JavaScript\nlevel: advanced\n\n정확한 도구 출력\nPlease explain this JavaScript code:\n\n```javascript\nconst unique = [...new Set([2, 2, 5])];\n```\n\nProvide a technical explanation including time/space complexity, design patterns used, and potential optimizations."
				},
				{
					"heading": "실수 3: 자동 언어 감지에 의존하기",
					"text": "선택한 언어는 첫 문장의 표시와 소문자 코드 블록 태그에 쓰입니다. Python 코드를 JavaScript로 표시해도 생성기는 선택을 고치지 않습니다."
				},
				{
					"heading": "실수 4: 관련 호출부 생략하기",
					"text": "함수 이름만으로는 입력이나 주변 가정이 드러나지 않습니다. 필요하면 대표적인 호출 예를 작게 포함하세요. 생성기는 빠진 프로젝트 맥락을 가져오지 못합니다."
				},
				{
					"heading": "실수 5: 중첩 코드 블록을 확인하지 않기",
					"text": "코드 안의 백틱 세 개도 그대로 복사되어 바깥 코드 블록을 깨뜨릴 수 있습니다. Markdown을 해석하는 AI에 붙여넣기 전에 요청문을 확인하세요."
				},
				{
					"heading": "더 나은 결과를 위한 팁",
					"text": "",
					"tips": [
						"언어를 명시적으로 선택하고 예제에 필요한 내용을 함께 넣으세요.",
						"사전 설정 지시를 비교할 때는 설명 수준만 바꾸세요.",
						"이후 논의에서 예상 동작과 관찰한 동작을 구분하세요. 이 페이지는 실행 결과나 검증된 진단을 제공하지 않습니다."
					]
				}
			]
		},
		ja: {
			title: 'コード説明ガイド',
			description: 'AI搭載のコード説明ツールを使用して、あらゆるプログラミングコードを理解する方法を学びましょう。複雑なコードを平易な言葉で明確に説明します。',
			cta: 'コード説明を試す',
			sections: [
				{
					heading: 'コード説明ツールとは？',
					text: 'コード説明ツールは、プログラミングコードを分析し、コードが何をするかを人間が読める説明で提供するAI搭載のツールです。プログラミングを学んでいる場合、馴染みのないコードをレビューしている場合、レガシーシステムを理解しようとしている場合でも、コード説明ツールは複雑なロジックを明確で理解しやすい説明に分解します。このツールはPython、JavaScript、Java、C++、Go、Rust、TypeScript、Ruby、PHPなど、すべての主要なプログラミング言語をサポートしています。個々の関数、ファイル全体、または特定のコードスニペットを説明でき、すべてのスキルレベルの開発者がドキュメントを読むだけよりも速く効果的にコードを理解できるよう支援します。'
				},
				{
					heading: 'コード説明ツールの仕組み',
					text: 'AIコード説明ツールは、数百万のコードリポジトリとドキュメントで訓練された高度な言語モデルを使用しています。コードを送信すると、AIは構文を解析し、プログラミングパターンを識別し、ライブラリやフレームワークの使用を認識し、ロジックの流れをトレースします。そして、選択した詳細レベルで説明を生成します - 素早い理解のための高レベルの要約から、深い学習のための行ごとの分析まで。説明ツールは、コンテキスト、変数の命名規則、一般的なプログラミングイディオムを考慮して正確な説明を提供します。また、潜在的な問題を特定し、特定のパターンが使用される理由を説明し、コードが改善される可能性のある箇所を提案します。'
				},
				{
					heading: 'コード説明ツールの使い方',
					text: 'コード説明ツールを使用するには、入力エリアにコードを貼り付けるだけです。自動検出が正しく識別しない場合は、プログラミング言語を選択してください。説明の深さを選択します：コードが達成することの素早い要約のための「概要」、関数ごとの説明のための「詳細」、すべてのステートメントの包括的な分析のための「行ごと」。経験レベルも指定できます - 初心者向けの説明はより簡単な用語とより多くの類推を使用し、専門家向けの説明は技術用語を使用し、プログラミング概念に精通していることを前提とします。説明をクリックすると、数秒以内にカスタマイズされたコード説明を受け取ります。'
				},
				{
					heading: 'コード説明のベストプラクティス',
					text: '最良の結果を得るには、可能な場合は断片ではなく完全なコードブロックを提供してください。AIが完全なコンテキストを理解できるように、インポート文と依存関係を含めてください。コードが他の場所で定義されたカスタムクラスや関数を使用している場合は、それらが何をするかを簡潔に説明してください。非常に長いファイルの場合は、論理的なセクションに分割して各部分を個別に説明することを検討してください。自分で書いたコードを説明する場合、ツールは作業をドキュメント化したり、他の開発者を混乱させる可能性のある領域を特定したりするのに役立ちます。コードレビューでは、詳細な分析に入る前に説明ツールを使用して馴染みのないコードを素早く理解してください。'
				},
				{
					heading: 'コード説明で学ぶ',
					text: 'コード説明は強力な学習ツールです。学生はチュートリアルのサンプルコードを貼り付けて、自分のレベルに合わせたパーソナライズされた説明を得ることができます。独学の開発者は、AIにさまざまなコンポーネントがどのように連携するかを説明させることで、オープンソースプロジェクトを理解できます。新しい言語やフレームワークを学ぶ際は、説明ツールを使用してイディオマティックなパターンとベストプラクティスを理解してください。異なる言語での類似機能の説明を比較して、それぞれの独自の特性を理解してください。このツールはアルゴリズムの理解にも役立ちます - 実装を貼り付けて、動作方法、時間計算量、使用するタイミングについての明確な説明を受け取ってください。'
				},
				{
					heading: '一般的な使用例',
					text: '開発者は多くのシナリオでコード説明ツールを使用しています。コードレビュー中に、広範な手動分析なしでプルリクエストを素早く理解します。デバッグ時に、エラーが発生しやすいコードを貼り付けて意図された動作を理解します。レガシーコードのメンテナンスでは、以前のチームメンバーが書いた文書化されていないシステムの説明を取得します。学生はプログラミングの課題やサンプルコードを理解するために使用します。テクニカルライターは説明をドキュメントの出発点として使用します。セキュリティ研究者は潜在的に悪意のあるコードを分析してその動作を理解します。データサイエンティストは非技術的な利害関係者に複雑なデータ処理パイプラインを説明します。'
				}
			]
		},
		zh: {
			title: '代码解释指南',
			description: '学习如何使用我们的AI代码解释器来理解任何编程代码。用简单的语言获得复杂代码的清晰解释。',
			cta: '试用代码解释',
			sections: [
				{
					heading: '什么是代码解释器？',
					text: '代码解释器是一个AI驱动的工具，它分析编程代码并提供人类可读的代码功能解释。无论您是在学习编程、审查不熟悉的代码，还是试图理解遗留系统，我们的代码解释器都能将复杂的逻辑分解成清晰易懂的描述。该工具支持所有主要编程语言，包括Python、JavaScript、Java、C++、Go、Rust、TypeScript、Ruby、PHP等。它可以解释单个函数、整个文件或特定的代码片段，帮助各种技能水平的开发人员比单独阅读文档更快、更有效地理解代码。'
				},
				{
					heading: '代码解释器如何工作',
					text: '我们的AI代码解释器使用在数百万代码仓库和文档上训练的先进语言模型。当您提交代码时，AI会解析语法、识别编程模式、识别库和框架的使用，并追踪逻辑流程。然后它会根据您选择的详细程度生成解释 - 从用于快速理解的高级摘要到用于深入学习的逐行分析。解释器考虑上下文、变量命名约定和常见的编程习惯用法，以提供准确的描述。它还识别潜在问题，解释为什么使用某些模式，并建议代码可能改进的地方。'
				},
				{
					heading: '如何使用代码解释工具',
					text: '使用我们的代码解释器，只需将代码粘贴到输入区域。如果自动检测未能正确识别，请选择编程语言。选择解释深度："概述"用于快速总结代码完成的任务，"详细"用于逐函数解释，"逐行"用于对每个语句进行全面分析。您还可以指定您的经验水平 - 初学者解释使用更简单的术语和更多类比，而专家解释使用技术术语并假设您熟悉编程概念。点击解释，几秒钟内即可收到定制的代码解释。'
				},
				{
					heading: '代码解释最佳实践',
					text: '为了获得最佳结果，尽可能提供完整的代码块而不是片段。包含import语句和依赖项，以帮助AI理解完整的上下文。如果代码使用了在其他地方定义的自定义类或函数，请简要说明它们的功能。对于非常长的文件，考虑将它们分成逻辑部分，分别解释每个部分。在解释您自己编写的代码时，该工具可以帮助您记录您的工作或识别可能使其他开发人员困惑的区域。对于代码审查，在深入详细分析之前使用解释器快速理解不熟悉的代码。'
				},
				{
					heading: '通过代码解释学习',
					text: '代码解释是一个强大的学习工具。学生可以粘贴教程中的示例代码，获得针对其水平量身定制的个性化解释。自学的开发人员可以通过让AI解释不同组件如何协同工作来理解开源项目。在学习新语言或框架时，使用解释器来理解惯用模式和最佳实践。比较不同语言中类似功能的解释，以理解它们的独特特性。该工具对于理解算法也很有价值 - 粘贴一个实现，获得关于它如何工作、时间复杂度以及何时使用的清晰解释。这种主动学习方法比被动阅读代码更能加速理解。'
				},
				{
					heading: '常见使用场景',
					text: '开发人员在许多场景中使用我们的代码解释器。在代码审查期间，无需大量手动分析即可快速理解拉取请求。调试时，粘贴容易出错的代码以理解其预期行为。对于遗留代码维护，获取前团队成员编写的未记录系统的解释。学生用它来理解编程作业和示例代码。技术作家将解释作为文档的起点。安全研究人员分析潜在恶意代码以理解其行为。数据科学家向非技术利益相关者解释复杂的数据处理管道。该工具弥合了编写代码和理解代码之间的差距，对于使用任何代码库的个人和团队来说都是非常宝贵的。'
				}
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
			<a href="/{lang}/code" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "코드 설명 프롬프트 생성기" : "Code Explanation Prompt Builder"}</a>
			<a href="/{lang}/prompt" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "프롬프트 생성기" : "Prompt Generator"}</a>
			<a href="/{lang}/writing" class="block text-primary-500 hover:text-primary-400 underline">{lang === 'ko' ? "글쓰기 수정 프롬프트 생성기" : "Writing Revision Prompt Builder"}</a>
		</nav>
	{/if}
	<div class="mt-12">
		<a href="/{lang}/code" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
