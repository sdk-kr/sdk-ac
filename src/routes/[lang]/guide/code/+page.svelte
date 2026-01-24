<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; description: string; cta: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Code Explainer Guide',
			description: 'Learn how to use our AI-powered code explainer to understand any programming code. Get clear explanations of complex code in plain language.',
			cta: 'Try Code Explainer',
			sections: [
				{
					heading: 'What is a Code Explainer?',
					text: 'A code explainer is an AI-powered tool that analyzes programming code and provides human-readable explanations of what the code does. Whether you\'re learning to program, reviewing unfamiliar code, or trying to understand legacy systems, our code explainer breaks down complex logic into clear, understandable descriptions. The tool supports all major programming languages including Python, JavaScript, Java, C++, Go, Rust, TypeScript, Ruby, PHP, and many more. It can explain individual functions, entire files, or specific code snippets, helping developers at all skill levels understand code faster and more effectively than reading documentation alone.'
				},
				{
					heading: 'How Our Code Explainer Works',
					text: 'Our AI code explainer uses advanced language models trained on millions of code repositories and documentation. When you submit code, the AI parses the syntax, identifies programming patterns, recognizes library and framework usage, and traces the logic flow. It then generates explanations at your chosen detail level - from high-level summaries for quick understanding to line-by-line breakdowns for deep learning. The explainer considers context, variable naming conventions, and common programming idioms to provide accurate descriptions. It also identifies potential issues, explains why certain patterns are used, and suggests where the code might be improved.'
				},
				{
					heading: 'Using the Code Explainer Tool',
					text: 'To use our code explainer, simply paste your code into the input area. Select the programming language if auto-detection doesn\'t identify it correctly. Choose your explanation depth: "Overview" for a quick summary of what the code accomplishes, "Detailed" for function-by-function explanations, or "Line-by-line" for comprehensive analysis of every statement. You can also specify your experience level - beginner explanations use simpler terms and more analogies, while expert explanations use technical terminology and assume familiarity with programming concepts. Click explain and receive your customized code explanation within seconds.'
				},
				{
					heading: 'Best Practices for Code Explanation',
					text: 'For best results, provide complete code blocks rather than fragments when possible. Include import statements and dependencies to help the AI understand the full context. If the code uses custom classes or functions defined elsewhere, briefly mention what they do. For very long files, consider breaking them into logical sections and explaining each part separately. When explaining code you wrote yourself, the tool can help you document your work or identify areas that might confuse other developers. For code reviews, use the explainer to quickly understand unfamiliar code before diving into detailed analysis. Keep in mind that while our tool is highly accurate, complex or obfuscated code may require additional context.'
				},
				{
					heading: 'Learning with Code Explanations',
					text: 'Code explanation is a powerful learning tool. Students can paste example code from tutorials and get personalized explanations tailored to their level. Self-taught developers can understand open-source projects by having the AI explain how different components work together. When learning a new language or framework, use the explainer to understand idiomatic patterns and best practices. Compare explanations of similar functionality in different languages to understand their unique characteristics. The tool is also valuable for understanding algorithms - paste an implementation and receive a clear explanation of how it works, its time complexity, and when to use it. This active learning approach accelerates comprehension far beyond passive code reading.'
				},
				{
					heading: 'Common Use Cases',
					text: 'Developers use our code explainer across many scenarios. During code reviews, quickly understand pull requests without extensive manual analysis. When debugging, paste error-prone code to understand its intended behavior. For legacy code maintenance, get explanations of undocumented systems written by former team members. Students use it to understand programming assignments and example code. Technical writers use explanations as starting points for documentation. Security researchers analyze potentially malicious code to understand its behavior. Data scientists explain complex data processing pipelines to non-technical stakeholders. The tool bridges the gap between writing code and understanding code, making it invaluable for individuals and teams working with any codebase.'
				}
			]
		},
		ko: {
			title: '코드 설명 가이드',
			description: 'AI 기반 코드 설명기를 사용하여 모든 프로그래밍 코드를 이해하는 방법을 알아보세요. 복잡한 코드를 쉬운 언어로 명확하게 설명받으세요.',
			cta: '코드 설명 사용하기',
			sections: [
				{
					heading: '코드 설명기란?',
					text: '코드 설명기는 프로그래밍 코드를 분석하고 코드가 무엇을 하는지 사람이 읽을 수 있는 설명을 제공하는 AI 기반 도구입니다. 프로그래밍을 배우고 있든, 익숙하지 않은 코드를 검토하고 있든, 레거시 시스템을 이해하려고 하든, 코드 설명기는 복잡한 로직을 명확하고 이해하기 쉬운 설명으로 분해합니다. 이 도구는 Python, JavaScript, Java, C++, Go, Rust, TypeScript, Ruby, PHP 등 모든 주요 프로그래밍 언어를 지원합니다. 개별 함수, 전체 파일 또는 특정 코드 스니펫을 설명할 수 있어 모든 기술 수준의 개발자가 문서를 읽는 것보다 더 빠르고 효과적으로 코드를 이해하도록 돕습니다.'
				},
				{
					heading: '코드 설명기 작동 방식',
					text: 'AI 코드 설명기는 수백만 개의 코드 저장소와 문서로 훈련된 고급 언어 모델을 사용합니다. 코드를 제출하면 AI가 구문을 파싱하고, 프로그래밍 패턴을 식별하고, 라이브러리 및 프레임워크 사용을 인식하고, 로직 흐름을 추적합니다. 그런 다음 선택한 상세 수준에서 설명을 생성합니다 - 빠른 이해를 위한 고수준 요약부터 심층 학습을 위한 라인별 분석까지. 설명기는 맥락, 변수 명명 규칙, 일반적인 프로그래밍 관용구를 고려하여 정확한 설명을 제공합니다. 또한 잠재적인 문제를 식별하고, 특정 패턴이 사용된 이유를 설명하고, 코드가 개선될 수 있는 부분을 제안합니다.'
				},
				{
					heading: '코드 설명 도구 사용법',
					text: '코드 설명기를 사용하려면 입력 영역에 코드를 붙여넣기만 하면 됩니다. 자동 감지가 올바르게 식별하지 못하면 프로그래밍 언어를 선택합니다. 설명 깊이를 선택하세요: 코드가 수행하는 작업의 빠른 요약을 위한 "개요", 함수별 설명을 위한 "상세", 모든 문장의 포괄적 분석을 위한 "라인별". 경험 수준도 지정할 수 있습니다 - 초보자 설명은 더 간단한 용어와 더 많은 비유를 사용하고, 전문가 설명은 기술 용어를 사용하고 프로그래밍 개념에 익숙하다고 가정합니다. 설명을 클릭하면 몇 초 내에 맞춤형 코드 설명을 받습니다.'
				},
				{
					heading: '코드 설명 모범 사례',
					text: '최상의 결과를 위해 가능하면 조각보다 완전한 코드 블록을 제공하세요. AI가 전체 맥락을 이해할 수 있도록 import 문과 종속성을 포함하세요. 코드가 다른 곳에서 정의된 사용자 정의 클래스나 함수를 사용하는 경우 그것들이 무엇을 하는지 간략히 언급하세요. 매우 긴 파일의 경우 논리적 섹션으로 나누어 각 부분을 별도로 설명하는 것이 좋습니다. 직접 작성한 코드를 설명할 때 도구는 작업을 문서화하거나 다른 개발자를 혼란스럽게 할 수 있는 영역을 식별하는 데 도움이 됩니다. 코드 리뷰의 경우 상세 분석에 들어가기 전에 설명기를 사용하여 익숙하지 않은 코드를 빠르게 이해하세요.'
				},
				{
					heading: '코드 설명으로 학습하기',
					text: '코드 설명은 강력한 학습 도구입니다. 학생들은 튜토리얼의 예제 코드를 붙여넣고 자신의 수준에 맞는 맞춤형 설명을 받을 수 있습니다. 독학 개발자는 AI가 다양한 구성 요소가 어떻게 함께 작동하는지 설명하게 하여 오픈소스 프로젝트를 이해할 수 있습니다. 새로운 언어나 프레임워크를 배울 때 설명기를 사용하여 관용적 패턴과 모범 사례를 이해하세요. 다른 언어에서 유사한 기능의 설명을 비교하여 고유한 특성을 이해하세요. 이 도구는 알고리즘 이해에도 유용합니다 - 구현을 붙여넣고 작동 방식, 시간 복잡도, 사용 시기에 대한 명확한 설명을 받으세요.'
				},
				{
					heading: '일반적인 사용 사례',
					text: '개발자들은 많은 시나리오에서 코드 설명기를 사용합니다. 코드 리뷰 중에 광범위한 수동 분석 없이 풀 리퀘스트를 빠르게 이해합니다. 디버깅할 때 오류가 발생하기 쉬운 코드를 붙여넣어 의도된 동작을 이해합니다. 레거시 코드 유지보수를 위해 이전 팀원이 작성한 문서화되지 않은 시스템의 설명을 얻습니다. 학생들은 프로그래밍 과제와 예제 코드를 이해하는 데 사용합니다. 기술 작가들은 설명을 문서화의 시작점으로 사용합니다. 보안 연구자들은 잠재적으로 악성인 코드를 분석하여 동작을 이해합니다. 데이터 과학자들은 비기술 이해관계자에게 복잡한 데이터 처리 파이프라인을 설명합니다.'
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
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
	<div class="mt-12">
		<a href="/{lang}/code" class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
			{t.cta} →
		</a>
	</div>
</div>
