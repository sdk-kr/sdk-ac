import type { L10nString } from '$lib/i18n';

export interface BlogPost {
	slug: string;
	title: L10nString;
	description: L10nString;
	content: L10nString;
	date: string;
	category: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'ai-prompt-writing',
		title: { en: 'How to Write Effective AI Prompts', ko: 'AI 프롬프트 작성법', ja: 'AIプロンプトの書き方', zh: '如何编写有效的AI提示词' },
		description: { en: 'Learn techniques for writing prompts that get better AI responses.', ko: '더 나은 AI 응답을 얻기 위한 프롬프트 작성 기법을 배우세요.', ja: 'より良いAI応答を得るためのプロンプト作成テクニックを学びましょう。', zh: '学习编写能获得更好AI响应的提示词技巧。' },
		content: { en: `Writing effective prompts is key to getting useful AI responses.

## Basic Principles

1. **Be specific** - Vague prompts get vague answers
2. **Provide context** - Background helps AI understand
3. **State your goal** - What do you want to achieve?
4. **Specify format** - List, paragraph, code, etc.

## Prompt Structure

A good prompt often includes:
- Role: "You are a professional..."
- Task: "Write/Create/Explain..."
- Context: "For a business..."
- Format: "In bullet points..."
- Constraints: "Keep it under 200 words..."

## Example Prompts

**Bad**: "Write about marketing"

**Good**: "Write 5 social media post ideas for a small coffee shop targeting young professionals. Each post should include a hook, main message, and call-to-action."

## Common Mistakes

1. Too vague or broad
2. No clear objective
3. Missing context
4. Ambiguous instructions

Use our Prompt Generator for optimized prompts.`, ko: `효과적인 프롬프트 작성은 유용한 AI 응답을 얻는 핵심입니다.

## 기본 원칙

1. **구체적으로** - 모호한 프롬프트는 모호한 답변을 받음
2. **맥락 제공** - 배경 정보가 AI 이해에 도움
3. **목표 명시** - 무엇을 달성하고 싶은지?
4. **형식 지정** - 목록, 문단, 코드 등

## 프롬프트 구조

좋은 프롬프트에는 다음이 포함됩니다:
- 역할: "당신은 전문..."
- 작업: "작성/생성/설명..."
- 맥락: "비즈니스를 위해..."
- 형식: "글머리 기호로..."
- 제약: "200단어 이내로..."

프롬프트 생성기를 사용하여 최적화된 프롬프트를 만드세요.`, ja: `効果的なプロンプトの作成は、有用なAI応答を得る鍵です。

プロンプトジェネレーターを使って最適化されたプロンプトを作成しましょう。`, zh: `编写有效的提示词是获得有用AI响应的关键。

使用我们的提示词生成器创建优化的提示词。` },
		date: '2025-01-20', category: 'prompt'
	},
	{
		slug: 'chatgpt-tips',
		title: { en: 'ChatGPT Tips and Tricks', ko: 'ChatGPT 활용 팁', ja: 'ChatGPT活用のコツ', zh: 'ChatGPT使用技巧' },
		description: { en: 'Get more out of ChatGPT with these practical tips.', ko: '실용적인 팁으로 ChatGPT를 더 잘 활용하세요.', ja: '実用的なヒントでChatGPTをもっと活用しましょう。', zh: '用这些实用技巧更好地使用ChatGPT。' },
		content: { en: `Maximize your ChatGPT usage with these tips.

## Conversation Techniques

1. **Start fresh** - New chat for new topics
2. **Build on responses** - Ask follow-up questions
3. **Request alternatives** - "Give me 3 different approaches"
4. **Ask for explanations** - "Explain why this works"

## Advanced Features

- **Temperature control** - Creativity vs consistency
- **System prompts** - Set behavior for entire conversation
- **Few-shot learning** - Provide examples
- **Chain of thought** - Ask to "think step by step"

## Useful Prompts

- "Explain like I'm 5..."
- "What are the pros and cons of..."
- "Help me debug this code..."
- "Rewrite this to be more professional..."

## Limitations to Know

- Knowledge cutoff date
- Can't access real-time data
- May hallucinate facts
- Limited context window

Use our AI tools to enhance your workflow.`, ko: `이 팁들로 ChatGPT 사용을 극대화하세요.

## 대화 기법

1. **새로 시작** - 새 주제에는 새 채팅
2. **응답 발전** - 후속 질문하기
3. **대안 요청** - "3가지 다른 접근법을 알려줘"
4. **설명 요청** - "이것이 왜 작동하는지 설명해줘"

## 고급 기능

- **온도 조절** - 창의성 vs 일관성
- **시스템 프롬프트** - 전체 대화에 대한 동작 설정
- **Few-shot 학습** - 예시 제공
- **생각의 사슬** - "단계별로 생각해"라고 요청

AI 도구를 사용하여 워크플로우를 향상시키세요.`, ja: `これらのヒントでChatGPTの使用を最大化しましょう。

AIツールを使ってワークフローを強化しましょう。`, zh: `用这些技巧最大化您的ChatGPT使用效果。

使用我们的AI工具增强您的工作流程。` },
		date: '2025-01-19', category: 'ai'
	},
	{
		slug: 'image-generation-prompts',
		title: { en: 'Image Generation Prompt Guide', ko: '이미지 생성 프롬프트 가이드', ja: '画像生成プロンプトガイド', zh: '图像生成提示词指南' },
		description: { en: 'Create stunning AI images with well-crafted prompts.', ko: '잘 작성된 프롬프트로 멋진 AI 이미지를 만드세요.', ja: '上手く作成されたプロンプトで素晴らしいAI画像を作成しましょう。', zh: '用精心编写的提示词创建惊艳的AI图像。' },
		content: { en: `Creating great AI images starts with great prompts.

## Prompt Structure

1. **Subject** - Main focus of image
2. **Style** - Art style, medium
3. **Details** - Colors, lighting, composition
4. **Quality modifiers** - HD, detailed, professional

## Example Formula

[Subject] + [Style] + [Details] + [Quality]

"A majestic lion, digital art, golden hour lighting, highly detailed, 4K"

## Style Keywords

- Photorealistic
- Digital art
- Watercolor
- Oil painting
- Anime/Manga
- 3D render

## Lighting Keywords

- Golden hour
- Studio lighting
- Dramatic shadows
- Soft light
- Neon glow

## Common Mistakes

1. Too vague descriptions
2. Conflicting styles
3. Overloading with keywords
4. Ignoring aspect ratio

Use our Image Prompt Generator for better results.`, ko: `멋진 AI 이미지 생성은 좋은 프롬프트에서 시작합니다.

## 프롬프트 구조

1. **주제** - 이미지의 주요 초점
2. **스타일** - 예술 스타일, 매체
3. **세부사항** - 색상, 조명, 구도
4. **품질 수식어** - HD, 디테일, 전문적

## 예시 공식

[주제] + [스타일] + [세부사항] + [품질]

"웅장한 사자, 디지털 아트, 골든 아워 조명, 매우 상세함, 4K"

이미지 프롬프트 생성기를 사용하여 더 나은 결과를 얻으세요.`, ja: `素晴らしいAI画像の作成は、素晴らしいプロンプトから始まります。

画像プロンプトジェネレーターを使ってより良い結果を得ましょう。`, zh: `创建出色的AI图像从出色的提示词开始。

使用我们的图像提示词生成器获得更好的结果。` },
		date: '2025-01-18', category: 'image'
	},
	{
		slug: 'ai-translation-tips',
		title: { en: 'AI Translation Best Practices', ko: 'AI 번역 활용법', ja: 'AI翻訳のベストプラクティス', zh: 'AI翻译最佳实践' },
		description: { en: 'Get better translations with AI using these techniques.', ko: '이 기법들로 AI 번역을 더 잘 활용하세요.', ja: 'これらのテクニックでAI翻訳をより活用しましょう。', zh: '用这些技巧获得更好的AI翻译。' },
		content: { en: `AI translation has improved dramatically. Here's how to get the best results.

## Preparation Tips

1. **Clean source text** - Fix typos, unclear sentences
2. **Provide context** - "This is a legal document..."
3. **Specify tone** - Formal, casual, technical
4. **Mention audience** - "For native Japanese speakers..."

## Advanced Techniques

- **Back translation** - Translate back to check accuracy
- **Segment long texts** - Translate in chunks
- **Use terminology lists** - Maintain consistency
- **Request multiple options** - For key phrases

## Domain-Specific Tips

### Technical Documents
- Define acronyms
- Provide glossary
- Maintain formatting

### Marketing Content
- Focus on message, not literal translation
- Consider cultural adaptation
- Test with native speakers

## Quality Check

1. Read for natural flow
2. Check proper nouns
3. Verify numbers and dates
4. Confirm technical terms

Use our Translation Tools for accurate results.`, ko: `AI 번역이 크게 개선되었습니다. 최상의 결과를 얻는 방법입니다.

## 준비 팁

1. **깨끗한 원본 텍스트** - 오타, 불명확한 문장 수정
2. **맥락 제공** - "이것은 법률 문서입니다..."
3. **어조 지정** - 공식적, 캐주얼, 기술적
4. **독자 언급** - "일본어 원어민을 위해..."

번역 도구를 사용하여 정확한 결과를 얻으세요.`, ja: `AI翻訳は劇的に改善されました。最良の結果を得る方法をご紹介します。

翻訳ツールを使って正確な結果を得ましょう。`, zh: `AI翻译已经有了显著改善。以下是获得最佳结果的方法。

使用我们的翻译工具获得准确的结果。` },
		date: '2025-01-17', category: 'translation'
	},
	{
		slug: 'text-summarization',
		title: { en: 'Text Summarization with AI', ko: 'AI 텍스트 요약 기술', ja: 'AIによるテキスト要約', zh: 'AI文本摘要技术' },
		description: { en: 'Learn how to use AI for effective text summarization.', ko: 'AI를 활용한 효과적인 텍스트 요약 방법을 알아보세요.', ja: 'AIを活用した効果的なテキスト要約方法を学びましょう。', zh: '学习如何使用AI进行有效的文本摘要。' },
		content: { en: `AI can quickly summarize long texts while preserving key information.

## Summarization Types

1. **Extractive** - Pulls key sentences directly
2. **Abstractive** - Generates new summary text
3. **Key points** - Bullet point summaries
4. **TL;DR** - Ultra-short summaries

## Effective Prompts

- "Summarize in 3 sentences..."
- "What are the key takeaways..."
- "Give me the main points in bullet form..."
- "Explain the conclusion..."

## Best Practices

1. Specify desired length
2. Request specific format
3. Ask for key themes
4. Include context about content type

## Use Cases

- Research papers
- Meeting notes
- News articles
- Legal documents
- Technical documentation

Use our Summarizer Tool for quick results.`, ko: `AI는 핵심 정보를 유지하면서 긴 텍스트를 빠르게 요약할 수 있습니다.

## 요약 유형

1. **추출형** - 핵심 문장을 직접 추출
2. **생성형** - 새로운 요약 텍스트 생성
3. **핵심 포인트** - 글머리 기호 요약
4. **TL;DR** - 초단축 요약

요약 도구를 사용하여 빠른 결과를 얻으세요.`, ja: `AIは重要な情報を保持しながら長いテキストを素早く要約できます。

要約ツールを使って素早い結果を得ましょう。`, zh: `AI可以在保留关键信息的同时快速摘要长文本。

使用我们的摘要工具快速获得结果。` },
		date: '2025-01-16', category: 'text'
	},
	{
		slug: 'ai-writing-assistant',
		title: { en: 'Using AI as a Writing Assistant', ko: 'AI 글쓰기 도우미 활용', ja: 'AIを文章作成アシスタントとして使う', zh: '将AI用作写作助手' },
		description: { en: 'Improve your writing with AI assistance.', ko: 'AI 도움으로 글쓰기를 개선하세요.', ja: 'AIの助けを借りて文章を改善しましょう。', zh: '借助AI帮助改善您的写作。' },
		content: { en: `AI can help with every stage of the writing process.

## Writing Tasks AI Can Help With

1. **Brainstorming** - Generate ideas
2. **Outlining** - Structure content
3. **Drafting** - Initial content creation
4. **Editing** - Grammar, style, clarity
5. **Rewriting** - Tone adjustment

## Effective Requests

- "Help me brainstorm topics about..."
- "Create an outline for..."
- "Make this more concise..."
- "Improve the flow of..."
- "Rewrite in a professional tone..."

## Best Practices

1. Start with your own ideas
2. Use AI to enhance, not replace
3. Always review AI suggestions
4. Maintain your voice
5. Fact-check content

## Writing Formats

- Blog posts
- Emails
- Reports
- Social media
- Marketing copy

Use our Writing Tools to enhance your content.`, ko: `AI는 글쓰기 과정의 모든 단계에서 도움을 줄 수 있습니다.

## AI가 도울 수 있는 글쓰기 작업

1. **브레인스토밍** - 아이디어 생성
2. **개요 작성** - 콘텐츠 구조화
3. **초안 작성** - 초기 콘텐츠 생성
4. **편집** - 문법, 스타일, 명확성
5. **재작성** - 어조 조정

글쓰기 도구를 사용하여 콘텐츠를 향상시키세요.`, ja: `AIは執筆プロセスのあらゆる段階で助けになります。

ライティングツールを使ってコンテンツを強化しましょう。`, zh: `AI可以帮助写作过程的每个阶段。

使用我们的写作工具增强您的内容。` },
		date: '2025-01-15', category: 'writing'
	},
	{
		slug: 'prompt-engineering',
		title: { en: 'Introduction to Prompt Engineering', ko: '프롬프트 엔지니어링 입문', ja: 'プロンプトエンジニアリング入門', zh: '提示词工程入门' },
		description: { en: 'Learn the fundamentals of prompt engineering.', ko: '프롬프트 엔지니어링의 기초를 배우세요.', ja: 'プロンプトエンジニアリングの基礎を学びましょう。', zh: '学习提示词工程的基础知识。' },
		content: { en: `Prompt engineering is the art of crafting inputs to get desired AI outputs.

## Core Concepts

1. **Context setting** - Establish background
2. **Instruction clarity** - Be specific
3. **Output formatting** - Define structure
4. **Iteration** - Refine based on results

## Techniques

### Zero-shot
Direct instruction without examples

### Few-shot
Provide examples before the task

### Chain of Thought
"Think step by step..."

### Role Playing
"Act as a senior developer..."

## Best Practices

1. Start simple, add complexity
2. Test variations
3. Document what works
4. Consider edge cases
5. Balance specificity and flexibility

## Applications

- Content generation
- Code assistance
- Data analysis
- Customer support
- Creative writing

Use our Prompt Tools to optimize your prompts.`, ko: `프롬프트 엔지니어링은 원하는 AI 출력을 얻기 위해 입력을 만드는 기술입니다.

## 핵심 개념

1. **맥락 설정** - 배경 확립
2. **지시 명확성** - 구체적으로
3. **출력 포맷팅** - 구조 정의
4. **반복** - 결과 기반으로 개선

## 기법

### Zero-shot
예시 없이 직접 지시

### Few-shot
작업 전 예시 제공

### 생각의 사슬
"단계별로 생각해..."

### 역할 플레이
"시니어 개발자로서 행동해..."

프롬프트 도구를 사용하여 프롬프트를 최적화하세요.`, ja: `プロンプトエンジニアリングは、望ましいAI出力を得るための入力を作成する技術です。

プロンプトツールを使ってプロンプトを最適化しましょう。`, zh: `提示词工程是制作输入以获得所需AI输出的艺术。

使用我们的提示词工具优化您的提示词。` },
		date: '2025-01-14', category: 'prompt'
	},
	{
		slug: 'ai-coding-assistant',
		title: { en: 'AI Coding Assistants: A Guide', ko: 'AI 코딩 어시스턴트 가이드', ja: 'AIコーディングアシスタントガイド', zh: 'AI编程助手指南' },
		description: { en: 'How to effectively use AI for coding tasks.', ko: 'AI를 코딩 작업에 효과적으로 활용하는 방법입니다.', ja: 'コーディングタスクにAIを効果的に活用する方法。', zh: '如何有效地将AI用于编程任务。' },
		content: { en: `AI can significantly boost coding productivity when used correctly.

## AI Coding Tasks

1. **Code generation** - Create boilerplate
2. **Bug fixing** - Identify and fix errors
3. **Code explanation** - Understand complex code
4. **Refactoring** - Improve code quality
5. **Testing** - Generate test cases

## Effective Prompts

- "Write a function that..."
- "What's wrong with this code..."
- "Explain this code line by line..."
- "Refactor this for better performance..."
- "Write unit tests for..."

## Best Practices

1. Be specific about requirements
2. Include error messages
3. Specify language/framework
4. Review all generated code
5. Test thoroughly

## Limitations

- May not follow best practices
- Can produce outdated code
- Security vulnerabilities possible
- Doesn't understand full context

Use our Code Tools for development assistance.`, ko: `AI는 올바르게 사용하면 코딩 생산성을 크게 높일 수 있습니다.

## AI 코딩 작업

1. **코드 생성** - 보일러플레이트 생성
2. **버그 수정** - 오류 식별 및 수정
3. **코드 설명** - 복잡한 코드 이해
4. **리팩토링** - 코드 품질 개선
5. **테스팅** - 테스트 케이스 생성

코드 도구를 사용하여 개발 지원을 받으세요.`, ja: `AIは正しく使えばコーディングの生産性を大幅に向上させることができます。

コードツールを使って開発支援を受けましょう。`, zh: `正确使用AI可以显著提高编码效率。

使用我们的代码工具获得开发支持。` },
		date: '2025-01-13', category: 'coding'
	},
	{
		slug: 'ai-image-editing',
		title: { en: 'AI Image Editing Tools', ko: 'AI 이미지 편집 도구', ja: 'AI画像編集ツール', zh: 'AI图像编辑工具' },
		description: { en: 'Explore AI-powered image editing capabilities.', ko: 'AI 기반 이미지 편집 기능을 살펴보세요.', ja: 'AI搭載の画像編集機能を探りましょう。', zh: '探索AI驱动的图像编辑功能。' },
		content: { en: `AI has revolutionized image editing with powerful new capabilities.

## AI Image Editing Features

1. **Background removal** - Instant cutouts
2. **Object removal** - Clean up unwanted elements
3. **Upscaling** - Enhance resolution
4. **Colorization** - Add color to B&W photos
5. **Style transfer** - Apply artistic styles

## When to Use AI Editing

- Quick edits needed
- Repetitive tasks
- Complex selections
- Enhancement automation

## Traditional vs AI

| Task | Traditional | AI |
|------|-------------|-----|
| Background removal | 10-30 min | Seconds |
| Upscaling | Quality loss | Enhanced detail |
| Object removal | Clone stamp | Automatic fill |

## Best Results Tips

1. Use high-quality originals
2. Check edges carefully
3. Multiple passes if needed
4. Combine with traditional tools

Use our AI Image Tools for quick editing.`, ko: `AI는 강력한 새 기능으로 이미지 편집에 혁명을 일으켰습니다.

## AI 이미지 편집 기능

1. **배경 제거** - 즉석 컷아웃
2. **객체 제거** - 원치 않는 요소 정리
3. **업스케일링** - 해상도 향상
4. **컬러화** - 흑백 사진에 색상 추가
5. **스타일 변환** - 예술적 스타일 적용

AI 이미지 도구를 사용하여 빠르게 편집하세요.`, ja: `AIは強力な新機能で画像編集に革命を起こしました。

AI画像ツールを使って素早く編集しましょう。`, zh: `AI以强大的新功能革新了图像编辑。

使用我们的AI图像工具快速编辑。` },
		date: '2025-01-12', category: 'image'
	},
	{
		slug: 'ai-productivity',
		title: { en: 'Boosting Productivity with AI', ko: 'AI로 생산성 향상하기', ja: 'AIで生産性を向上させる', zh: '用AI提高生产力' },
		description: { en: 'Practical ways to use AI for everyday productivity.', ko: '일상적인 생산성을 위해 AI를 활용하는 실용적인 방법입니다.', ja: '日常の生産性向上にAIを活用する実践的な方法。', zh: '使用AI提高日常生产力的实用方法。' },
		content: { en: `AI can automate and accelerate many daily tasks.

## Productivity Use Cases

1. **Email drafting** - Quick professional responses
2. **Meeting notes** - Summarize discussions
3. **Research** - Gather and synthesize information
4. **Scheduling** - Optimize time management
5. **Document creation** - Templates and drafts

## Daily Workflow Integration

### Morning
- Review AI-summarized news
- Draft email responses

### Work Hours
- Use AI for research
- Generate content drafts
- Automate repetitive tasks

### End of Day
- Summarize completed work
- Plan next day tasks

## Tools by Task

| Task | AI Application |
|------|---------------|
| Writing | Draft generation |
| Analysis | Data interpretation |
| Communication | Response suggestions |
| Planning | Schedule optimization |

Use our Productivity Tools to work smarter.`, ko: `AI는 많은 일상 작업을 자동화하고 가속화할 수 있습니다.

## 생산성 사용 사례

1. **이메일 초안** - 빠른 전문적 응답
2. **회의록** - 토론 요약
3. **리서치** - 정보 수집 및 종합
4. **일정 관리** - 시간 관리 최적화
5. **문서 작성** - 템플릿 및 초안

생산성 도구를 사용하여 더 스마트하게 일하세요.`, ja: `AIは多くの日常タスクを自動化し、加速させることができます。

生産性ツールを使ってよりスマートに働きましょう。`, zh: `AI可以自动化和加速许多日常任务。

使用我们的生产力工具更聪明地工作。` },
		date: '2025-01-11', category: 'productivity'
	}
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
