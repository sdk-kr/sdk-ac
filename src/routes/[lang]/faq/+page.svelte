<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SDK.ac';
	const CONTACT_EMAIL = 'contact@sdk.ac';

	type FaqContent = {
		title: string;
		subtitle: string;
		categories: { name: string; faqs: { q: string; a: string }[] }[];
	};

	const content: Partial<Record<Locale, FaqContent>> & { en: FaqContent } = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: `Answers to common questions about ${SITE_NAME}'s AI tools, accuracy, advertising, privacy, and technical requirements.`,
			categories: [
				{
					name: 'Using the Tools',
					faqs: [
						{ q: `What is ${SITE_NAME} and which tools does it offer?`, a: `${SITE_NAME} is a free collection of eight browser-based AI utility tools: an AI translator, a text summarizer, a prompt generator, an image prompt builder, a code explainer, an email writer, a hashtag generator, and a writing assistant. Each tool page also includes an in-depth guide explaining the technique behind the tool, so you learn how to get better results from AI models — not just what button to press.` },
						{ q: 'Do the tools produce finished text, or prompts for an AI assistant?', a: `Our tools are structured prompt builders. You describe what you need — the text to translate, the article to summarize, the email situation — and the tool assembles a detailed, instruction-rich prompt that encodes best practices (register, format, constraints, verification steps). You then paste that prompt into the AI assistant you already use, such as ChatGPT, Claude, or Gemini. This design keeps your text on your own device and works with whichever model you prefer.` },
						{ q: 'How do I use the AI Translator?', a: `Paste your source text, choose the source and target languages, and set options such as formality (for example Korean 해요체 vs 합쇼체, Japanese keigo, or the French tu/vous distinction), tone, and terms that must not be translated (brand names, product codes). The tool builds a translation prompt that carries all of that context, which produces far more consistent results than pasting raw text into a chatbot.` },
						{ q: 'What does the Text Summarizer do?', a: `It turns a long text into a summarization prompt tuned to your goal: an executive summary, bullet-point key takeaways, a TL;DR of a fixed length, or an abstract in a different language. You control length, audience, and whether the summary should preserve numbers and named entities exactly — a common failure point of naive summarization.` },
						{ q: 'How does the Prompt Generator work?', a: `The Prompt Generator walks you through the elements of an effective prompt — role, task, context, constraints, output format, and examples — and assembles them into a clean, reusable prompt template. It is useful both for one-off tasks and for building a personal prompt library you refine over time.` },
						{ q: 'Which image AI services does the Image Prompt Builder support?', a: `The Image Prompt Builder composes prompts using the vocabulary that text-to-image models respond to: subject, style, medium, lighting, camera and lens terms, composition, aspect ratio, and negative prompts. The output works with Midjourney, DALL-E, Stable Diffusion, and similar generators; you can adjust syntax details (such as parameter flags) for your target service.` },
						{ q: 'What can the Code Explainer help me with?', a: `Paste a code snippet and the tool builds a prompt asking an AI model to explain it at the depth you choose — line-by-line for learners, or architecture-level for reviewers — including edge cases, potential bugs, and complexity. It is language-agnostic: JavaScript, TypeScript, Python, Java, Go, SQL, and most mainstream languages work well. Never paste proprietary code you are not allowed to share into a third-party AI service.` },
						{ q: 'How does the Email Writer work?', a: `You specify the situation (request, apology, follow-up, cold outreach, refusal), the relationship between sender and recipient, the desired tone, and the key points that must appear. The tool generates a prompt that produces a complete, culturally appropriate email draft — including proper formality levels for Korean and Japanese business email, which generic chatbot requests often get wrong.` },
						{ q: 'What does the Hashtag Generator do?', a: `Describe your post and target platform (Instagram, X/Twitter, TikTok, LinkedIn, YouTube), and the tool builds a prompt for generating a balanced hashtag set: a few high-volume discovery tags, mid-size niche tags, and specific long-tail tags, matched to each platform's conventions and recommended tag counts.` },
						{ q: 'How is the Writing Assistant different from the other tools?', a: `The Writing Assistant is a general-purpose companion for drafting, rewriting, expanding, shortening, and proofreading text. You choose the operation, audience, tone, and format, and it constructs the editing prompt. Use it when your task doesn't fit a specialised tool — blog outlines, product descriptions, social posts, or polishing text written in your second language.` },
						{ q: 'Can I use the content I create for commercial purposes?', a: `Yes. We claim no ownership over prompts or text you create with the tools, and you may use them personally or commercially at your own responsibility. Note that the copyright status of AI-generated content varies by country, similar output may be generated for other users, and the third-party AI service you paste a prompt into may apply its own terms to the generated result. See Article 9 of our Terms of Service.` }
					]
				},
				{
					name: 'AI Accuracy & Limitations',
					faqs: [
						{ q: 'How accurate are the results generated with these tools?', a: `A well-structured prompt significantly improves output quality, but the final text comes from a statistical language model, and no AI output is guaranteed to be accurate. Treat every result as a draft: read it critically, check facts and numbers, and edit before you use it. Our tool guides describe the typical failure modes of each task so you know what to check.` },
						{ q: 'What are AI "hallucinations"?', a: `A hallucination is when an AI model states fabricated information with complete confidence — invented citations, non-existent API functions, wrong dates, made-up statistics. It happens because language models predict plausible text rather than retrieve verified facts. The risk is highest when you ask for specific facts, sources, or figures, and lowest when the model transforms text you provided (translating, summarizing, rewriting). Always verify names, numbers, quotes, and references independently.` },
						{ q: 'Can I rely on AI translations or summaries for legal, medical, or official use?', a: `No — not without qualified human review. AI translation and summarization are excellent for understanding, drafting, and internal communication, but contracts, court documents, medical information, visa paperwork, safety instructions, and financial filings need a professional. An error in these contexts can have serious consequences, and AI models produce fluent-sounding text even when they are wrong, which makes errors hard to spot.` },
						{ q: 'Why do I get different results each time with the same prompt?', a: `Large language models are non-deterministic: they sample from a probability distribution over possible next words, so the same prompt can yield different phrasings or structures on each run. This is normal. If you need consistency, make your prompt more specific (exact format, length, terminology), or regenerate a few times and pick the best result.` },
						{ q: 'What other limitations should I know about?', a: `Key ones: (1) training cutoff — models do not know about events after their training data ends, unless they have web access; (2) bias — models learn from human text and can reproduce social and cultural biases; (3) arithmetic and logic — models can make calculation and reasoning mistakes while sounding confident; (4) context limits — very long inputs may be partially ignored; (5) instruction drift — subtle requirements in long prompts are sometimes missed. Our per-tool guides explain how to mitigate each of these.` }
					]
				},
				{
					name: 'Advertising',
					faqs: [
						{ q: `Why does ${SITE_NAME} show ads?`, a: `Advertising is what allows every tool and guide on ${SITE_NAME} to stay free, with no account, no subscription, and no usage limits. We serve ads through Google AdSense and keep placements moderate so they do not interfere with using the tools.` },
						{ q: 'How are ads personalised, and can I opt out?', a: `Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to show ads based on your visits to this and other websites. You can opt out of personalised advertising in Google's Ads Settings at https://www.google.com/settings/ads, and opt out of many other vendors at https://www.aboutads.info/choices. Where required by law, a consent banner lets you refuse advertising cookies before any are set. You will still see ads after opting out, but they will not be tailored to your interests.` },
						{ q: 'Do ads see or affect the text I type into the tools?', a: `No. Tool inputs are processed in your browser and are never shared with advertising systems. Ad cookies relate to page visits, not to the content you type. Blocking ad cookies or using an ad blocker does not break the tools, since they run entirely client-side.` }
					]
				},
				{
					name: 'Data & Privacy',
					faqs: [
						{ q: 'What happens to the text I type into a tool?', a: `It is processed in your browser, on your device. The tools build their output locally; your input is never transmitted to, logged by, or permanently stored on our servers — there is no server-side database of user text. When you clear the input or leave the page, the text is gone. Full details are in Section 3 of our Privacy Policy.` },
						{ q: 'Is my text sent to an AI API?', a: `Not by us. Your text reaches an AI model API only at the moment you yourself copy a generated prompt and paste it into a third-party assistant such as ChatGPT, Claude, or Gemini — and from that point the provider's own privacy policy governs how it is transmitted and retained. If we ever add a tool that calls an AI API directly, we will say so clearly on the tool page before you submit anything, send your text over an encrypted connection solely to generate your result, and never store it permanently.` },
						{ q: 'Do you store my data or use it to train AI models?', a: `No. We store no accounts (there is no sign-up), no tool inputs, and no generated outputs. Your text is never used to train, fine-tune, or evaluate any machine-learning model, by us or on our behalf. The only data we handle is aggregated analytics (page views, approximate country, browser type) and standard advertising cookies, as described in our Privacy Policy.` },
						{ q: 'How do I delete data related to me?', a: `Almost everything lives only in your own browser: tool inputs exist only in page memory, and your theme/language preferences sit in localStorage. Clearing your browser's site data for ${SITE_NAME} removes all of it. For anything else — for example deleting an e-mail you sent us — write to ${CONTACT_EMAIL} and we will handle it within the statutory deadlines.` }
					]
				},
				{
					name: 'Technical & Access',
					faqs: [
						{ q: `Is ${SITE_NAME} really free? Are there usage limits?`, a: `Yes, completely free — no account, no subscription, no paid tier, and no usage caps on our side. The site is funded by advertising. Note that the third-party AI assistant you paste prompts into may have its own free-tier limits (message caps, model restrictions), which are governed by that provider, not by us.` },
						{ q: 'Which browsers and devices are supported?', a: `${SITE_NAME} works in all modern browsers — Chrome, Edge, Safari, Firefox, and Chromium-based browsers — on desktop and mobile. The interface is responsive, so the tools are fully usable on phones and tablets. We recommend keeping your browser up to date; very old browsers may not render the tools correctly.` },
						{ q: 'Do the tools work offline?', a: `Once a tool page has loaded, the prompt-building logic runs locally in your browser, so brief connection drops usually do not interrupt your work. You do need a connection to load pages initially and, of course, to use any third-party AI assistant with the prompt you generated.` },
						{ q: 'How do I report a bug, suggest a tool, or ask something not covered here?', a: `E-mail us at ${CONTACT_EMAIL}. Bug reports are most useful with your browser name and version and the steps to reproduce the problem. We read every suggestion, and several tools on the site started as user requests. We aim to reply within a few business days.` }
					]
				}
			]
		},

		ko: {
			title: '자주 묻는 질문',
			subtitle: `${SITE_NAME}의 AI 도구 사용법, 정확도, 광고, 개인정보, 기술 요건에 관한 질문과 답변입니다.`,
			categories: [
				{
					name: '도구 사용법',
					faqs: [
						{ q: `${SITE_NAME}는 무엇이고 어떤 도구를 제공하나요?`, a: `${SITE_NAME}는 8종의 무료 브라우저 기반 AI 유틸리티 도구 모음입니다: AI 번역기, 텍스트 요약기, 프롬프트 생성기, 이미지 프롬프트 빌더, 코드 설명기, 이메일 작성기, 해시태그 생성기, 글쓰기 도우미. 각 도구 페이지에는 해당 기법의 원리를 설명하는 심층 가이드가 함께 있어, 단순히 버튼 사용법이 아니라 AI 모델에서 더 좋은 결과를 얻는 방법 자체를 배울 수 있습니다.` },
						{ q: '도구가 완성된 텍스트를 만들어 주나요, 아니면 AI용 프롬프트를 만들어 주나요?', a: `당사의 도구는 구조화된 프롬프트 빌더입니다. 번역할 텍스트, 요약할 글, 이메일 상황 등 필요한 것을 입력하면, 도구가 문체·형식·제약조건·검증 단계 같은 모범 사례를 담은 상세한 프롬프트를 조립해 줍니다. 그 프롬프트를 ChatGPT, Claude, Gemini 등 평소 쓰는 AI 어시스턴트에 붙여넣으면 됩니다. 이 설계 덕분에 텍스트가 이용자의 기기를 벗어나지 않고, 어떤 모델과도 함께 사용할 수 있습니다.` },
						{ q: 'AI 번역기는 어떻게 사용하나요?', a: `원문을 붙여넣고 출발어·도착어를 선택한 뒤, 격식(예: 해요체 vs 합쇼체, 일본어 케이고, 프랑스어 tu/vous 구분), 톤, 번역하면 안 되는 용어(브랜드명, 제품 코드) 같은 옵션을 설정하세요. 도구가 이 모든 맥락을 담은 번역 프롬프트를 만들어 주며, 챗봇에 원문만 붙여넣는 것보다 훨씬 일관된 결과를 얻을 수 있습니다.` },
						{ q: '텍스트 요약기는 무엇을 하나요?', a: `긴 글을 목적에 맞춘 요약 프롬프트로 바꿔 줍니다: 경영진용 요약, 핵심 포인트 불릿, 지정 길이의 TL;DR, 다른 언어로 된 초록 등. 길이, 대상 독자, 그리고 단순 요약에서 자주 틀리는 부분인 숫자·고유명사의 정확한 보존 여부까지 직접 제어할 수 있습니다.` },
						{ q: '프롬프트 생성기는 어떻게 작동하나요?', a: `프롬프트 생성기는 효과적인 프롬프트의 구성 요소 — 역할, 과제, 맥락, 제약조건, 출력 형식, 예시 — 를 단계별로 안내하고, 이를 깔끔하고 재사용 가능한 프롬프트 템플릿으로 조립합니다. 일회성 작업에도 유용하고, 시간을 들여 다듬어 가는 개인 프롬프트 라이브러리를 만들 때도 좋습니다.` },
						{ q: '이미지 프롬프트 빌더는 어떤 이미지 AI를 지원하나요?', a: `이미지 프롬프트 빌더는 텍스트-이미지 모델이 잘 반응하는 어휘 — 피사체, 스타일, 매체, 조명, 카메라·렌즈 용어, 구도, 종횡비, 네거티브 프롬프트 — 로 프롬프트를 구성합니다. 결과물은 Midjourney, DALL-E, Stable Diffusion 등에서 사용할 수 있으며, 대상 서비스에 맞게 파라미터 플래그 같은 문법 세부사항을 조정할 수 있습니다.` },
						{ q: '코드 설명기는 어디에 쓰나요?', a: `코드 조각을 붙여넣으면, 원하는 깊이 — 학습자를 위한 줄 단위 설명부터 리뷰어를 위한 아키텍처 수준 분석까지 — 로 AI 모델에게 설명을 요청하는 프롬프트를 만들어 주며, 엣지 케이스, 잠재적 버그, 복잡도까지 다룹니다. JavaScript, TypeScript, Python, Java, Go, SQL 등 대부분의 주요 언어를 지원합니다. 단, 공유가 허용되지 않은 사내 코드를 제3자 AI 서비스에 붙여넣어서는 안 됩니다.` },
						{ q: '이메일 작성기는 어떻게 작동하나요?', a: `상황(요청, 사과, 후속 연락, 콜드 메일, 거절), 발신자와 수신자의 관계, 원하는 톤, 반드시 들어가야 할 핵심 내용을 지정하면, 완성도 높고 문화적으로 적절한 이메일 초안을 생성하는 프롬프트를 만들어 줍니다. 일반 챗봇 요청이 자주 틀리는 한국어·일본어 비즈니스 이메일의 격식 수준까지 반영합니다.` },
						{ q: '해시태그 생성기는 무엇을 하나요?', a: `게시물 내용과 대상 플랫폼(Instagram, X/Twitter, TikTok, LinkedIn, YouTube)을 설명하면, 균형 잡힌 해시태그 세트 — 노출용 대형 태그 몇 개, 중간 규모의 니치 태그, 구체적인 롱테일 태그 — 를 생성하는 프롬프트를 만들어 줍니다. 각 플랫폼의 관례와 권장 태그 수에 맞춰 조정됩니다.` },
						{ q: '글쓰기 도우미는 다른 도구와 무엇이 다른가요?', a: `글쓰기 도우미는 초안 작성, 고쳐쓰기, 늘리기, 줄이기, 교정을 위한 범용 도구입니다. 작업 종류, 대상 독자, 톤, 형식을 선택하면 편집 프롬프트를 구성해 줍니다. 블로그 개요, 제품 설명, SNS 게시물, 외국어로 쓴 글 다듬기처럼 특화 도구에 맞지 않는 작업에 사용하세요.` },
						{ q: '만든 콘텐츠를 상업적으로 사용할 수 있나요?', a: `네. 회사는 이용자가 도구로 만든 프롬프트나 텍스트에 대해 소유권을 주장하지 않으며, 이용자는 자신의 책임 하에 개인적·상업적으로 사용할 수 있습니다. 다만 AI 생성 콘텐츠의 저작권 인정 여부는 국가마다 다르고, 다른 이용자에게 유사한 출력물이 생성될 수 있으며, 프롬프트를 붙여넣는 제3자 AI 서비스가 결과물에 자체 약관을 적용할 수 있습니다. 이용약관 제9조를 참고하세요.` }
					]
				},
				{
					name: 'AI 정확도와 한계',
					faqs: [
						{ q: '이 도구로 생성한 결과는 얼마나 정확한가요?', a: `잘 구조화된 프롬프트는 출력 품질을 크게 높이지만, 최종 텍스트는 통계적 언어 모델이 만들며 어떤 AI 출력물도 정확성이 보장되지 않습니다. 모든 결과를 초안으로 취급하세요: 비판적으로 읽고, 사실과 숫자를 확인하고, 사용 전에 다듬어야 합니다. 각 도구 가이드에 해당 작업의 대표적인 실패 유형이 정리되어 있어 무엇을 확인해야 하는지 알 수 있습니다.` },
						{ q: 'AI "환각(hallucination)"이란 무엇인가요?', a: `환각이란 AI 모델이 지어낸 정보를 확신에 찬 어조로 제시하는 현상입니다 — 존재하지 않는 출처, 없는 API 함수, 틀린 날짜, 조작된 통계 등. 언어 모델은 검증된 사실을 조회하는 것이 아니라 그럴듯한 텍스트를 예측하기 때문에 발생합니다. 특정 사실·출처·수치를 물을 때 위험이 가장 크고, 이용자가 제공한 텍스트를 변환할 때(번역·요약·고쳐쓰기)는 상대적으로 낮습니다. 이름, 숫자, 인용, 참고문헌은 반드시 별도로 검증하세요.` },
						{ q: 'AI 번역이나 요약을 법률·의료·공식 용도로 신뢰해도 되나요?', a: `아니요 — 자격 있는 사람의 검토 없이는 안 됩니다. AI 번역·요약은 이해, 초안 작성, 내부 커뮤니케이션에는 훌륭하지만, 계약서, 법원 서류, 의료 정보, 비자 서류, 안전 지침, 재무 신고에는 전문가가 필요합니다. 이런 맥락의 오류는 심각한 결과를 낳을 수 있고, AI 모델은 틀렸을 때조차 유창한 문장을 만들어 내기 때문에 오류를 발견하기 어렵습니다.` },
						{ q: '같은 프롬프트인데 왜 매번 결과가 다른가요?', a: `대규모 언어 모델은 비결정적입니다. 다음 단어의 확률 분포에서 샘플링하기 때문에 같은 프롬프트라도 실행할 때마다 표현이나 구조가 달라질 수 있습니다. 정상적인 동작입니다. 일관성이 필요하면 프롬프트를 더 구체적으로(정확한 형식, 길이, 용어) 작성하거나, 몇 번 다시 생성해서 가장 좋은 결과를 고르세요.` },
						{ q: '그 밖에 알아야 할 한계는 무엇인가요?', a: `핵심적인 것들: (1) 학습 시점 한계 — 웹 접근 기능이 없는 한 모델은 학습 데이터 종료 이후의 사건을 모릅니다; (2) 편향 — 인간의 텍스트로 학습하므로 사회적·문화적 편향을 재현할 수 있습니다; (3) 산술과 논리 — 자신 있는 어조로 계산·추론 오류를 낼 수 있습니다; (4) 컨텍스트 한계 — 아주 긴 입력은 일부가 무시될 수 있습니다; (5) 지시 누락 — 긴 프롬프트 속 미세한 요구사항을 놓치기도 합니다. 각 도구 가이드에서 이를 줄이는 방법을 설명합니다.` }
					]
				},
				{
					name: '광고',
					faqs: [
						{ q: `${SITE_NAME}에는 왜 광고가 표시되나요?`, a: `광고는 ${SITE_NAME}의 모든 도구와 가이드를 계정도, 구독도, 사용 제한도 없이 무료로 유지할 수 있게 하는 재원입니다. 광고는 Google AdSense를 통해 게재되며, 도구 사용에 방해되지 않도록 배치를 절제하고 있습니다.` },
						{ q: '광고는 어떻게 개인화되고, 어떻게 거부할 수 있나요?', a: `제3자 공급업체인 Google은 쿠키(DoubleClick 쿠키 포함)를 사용하여 본 사이트 및 다른 웹사이트 방문 기록을 기반으로 광고를 게재합니다. Google 광고 설정(https://www.google.com/settings/ads)에서 맞춤형 광고를 거부할 수 있고, https://www.aboutads.info/choices 에서 다른 여러 공급업체의 맞춤형 광고도 거부할 수 있습니다. 법령상 요구되는 지역에서는 광고 쿠키가 설정되기 전에 동의 배너에서 거부할 수 있습니다. 거부해도 광고는 표시되지만 관심사 기반 맞춤은 되지 않습니다.` },
						{ q: '광고가 도구에 입력한 텍스트를 보거나 영향을 주나요?', a: `아니요. 도구 입력값은 브라우저에서 처리되며 광고 시스템과 절대 공유되지 않습니다. 광고 쿠키는 페이지 방문과 관련될 뿐, 입력한 내용과는 무관합니다. 광고 쿠키를 차단하거나 광고 차단기를 사용해도 도구는 전부 클라이언트 측에서 실행되므로 정상 작동합니다.` }
					]
				},
				{
					name: '데이터와 개인정보',
					faqs: [
						{ q: '도구에 입력한 텍스트는 어떻게 되나요?', a: `이용자의 기기, 즉 브라우저 안에서 처리됩니다. 도구는 출력을 로컬에서 생성하며, 입력값은 회사 서버로 전송·기록되거나 영구 저장되지 않습니다 — 이용자 텍스트의 서버측 데이터베이스 자체가 없습니다. 입력을 지우거나 페이지를 떠나면 텍스트는 사라집니다. 자세한 내용은 개인정보 처리방침 제3조에 있습니다.` },
						{ q: '제 텍스트가 AI API로 전송되나요?', a: `회사가 전송하지는 않습니다. 이용자의 텍스트는 이용자 본인이 생성된 프롬프트를 복사해서 ChatGPT, Claude, Gemini 같은 제3자 어시스턴트에 붙여넣는 순간에만 AI 모델 API에 도달하며, 그 시점부터의 전송·보관은 해당 사업자의 개인정보처리방침이 규율합니다. 향후 AI API를 직접 호출하는 도구를 추가하는 경우, 제출 전에 도구 페이지에 명확히 표시하고, 결과 생성 목적으로만 암호화된 연결로 전송하며, 영구 저장하지 않겠습니다.` },
						{ q: '제 데이터를 저장하거나 AI 학습에 사용하나요?', a: `아니요. 계정(가입 자체가 없음), 도구 입력값, 생성된 출력물 어느 것도 저장하지 않습니다. 이용자의 텍스트는 회사에 의해서든 회사를 대신해서든 어떤 기계학습 모델의 학습·미세조정·평가에도 사용되지 않습니다. 회사가 다루는 데이터는 개인정보 처리방침에 기재된 집계 분석 데이터(페이지뷰, 대략적 국가, 브라우저 종류)와 표준 광고 쿠키뿐입니다.` },
						{ q: '저와 관련된 데이터를 삭제하려면 어떻게 하나요?', a: `거의 모든 것이 이용자 본인의 브라우저에만 존재합니다. 도구 입력값은 페이지 메모리에만 있고, 테마·언어 설정은 localStorage에 있습니다. 브라우저에서 ${SITE_NAME}의 사이트 데이터를 지우면 전부 삭제됩니다. 그 밖의 것 — 예를 들어 보내주신 이메일 삭제 — 은 ${CONTACT_EMAIL} 로 요청하시면 법정 기한 내에 처리해 드립니다.` }
					]
				},
				{
					name: '기술 및 이용 환경',
					faqs: [
						{ q: `${SITE_NAME}는 정말 무료인가요? 사용 제한이 있나요?`, a: `네, 완전 무료입니다 — 계정도, 구독도, 유료 등급도 없고 당사 측 사용량 제한도 없습니다. 사이트는 광고로 운영됩니다. 다만 프롬프트를 붙여넣는 제3자 AI 어시스턴트에는 자체 무료 이용 한도(메시지 수 제한, 모델 제한 등)가 있을 수 있으며, 이는 해당 사업자가 정하는 것입니다.` },
						{ q: '어떤 브라우저와 기기를 지원하나요?', a: `${SITE_NAME}는 Chrome, Edge, Safari, Firefox 및 Chromium 기반 브라우저 등 모든 최신 브라우저에서, 데스크톱과 모바일 모두 작동합니다. 인터페이스가 반응형이어서 휴대폰과 태블릿에서도 도구를 온전히 사용할 수 있습니다. 브라우저를 최신 상태로 유지하는 것을 권장하며, 아주 오래된 브라우저에서는 도구가 제대로 표시되지 않을 수 있습니다.` },
						{ q: '도구가 오프라인에서도 작동하나요?', a: `도구 페이지가 한 번 로드되면 프롬프트 생성 로직은 브라우저에서 로컬로 실행되므로, 잠깐의 연결 끊김은 보통 작업에 지장을 주지 않습니다. 다만 페이지를 처음 불러올 때, 그리고 생성한 프롬프트로 제3자 AI 어시스턴트를 사용할 때는 당연히 인터넷 연결이 필요합니다.` },
						{ q: '버그 신고, 도구 제안, 기타 문의는 어떻게 하나요?', a: `${CONTACT_EMAIL} 로 이메일을 보내주세요. 버그 신고에는 브라우저 이름·버전과 재현 절차를 함께 적어 주시면 가장 도움이 됩니다. 모든 제안을 읽고 있으며, 사이트의 여러 도구가 실제로 이용자 요청에서 시작되었습니다. 영업일 기준 며칠 내 회신을 목표로 합니다.` }
					]
				}
			]
		},

		ja: {
			title: 'よくある質問',
			subtitle: `${SITE_NAME} の AI ツールの使い方、精度、広告、プライバシー、動作環境に関する質問と回答です。`,
			categories: [
				{
					name: 'ツールの使い方',
					faqs: [
						{ q: `${SITE_NAME} とは何ですか？どんなツールがありますか？`, a: `${SITE_NAME} は 8 種類の無料ブラウザベース AI ユーティリティツール集です: AI 翻訳、テキスト要約、プロンプト生成、画像プロンプトビルダー、コード解説、メール作成、ハッシュタグ生成、ライティングアシスタント。各ツールページには、その手法の原理を解説する詳細ガイドが付属しており、単なるボタンの使い方ではなく、AI モデルからより良い結果を引き出す方法そのものを学べます。` },
						{ q: 'ツールは完成したテキストを作るのですか？それとも AI 用のプロンプトですか？', a: `当社のツールは構造化されたプロンプトビルダーです。翻訳したいテキスト、要約したい記事、メールの状況など、必要なことを入力すると、文体・形式・制約条件・検証手順といったベストプラクティスを組み込んだ詳細なプロンプトを組み立てます。それを ChatGPT、Claude、Gemini など、普段お使いの AI アシスタントに貼り付けてください。この設計により、テキストが端末の外に出ることなく、どのモデルとも組み合わせて使えます。` },
						{ q: 'AI 翻訳はどう使いますか？', a: `原文を貼り付け、翻訳元・翻訳先の言語を選び、文体(例: 韓国語の해요체と합쇼체、日本語の敬語、フランス語の tu/vous の区別)、トーン、翻訳してはいけない用語(ブランド名、製品コード)などのオプションを設定します。ツールがこれらの文脈をすべて盛り込んだ翻訳プロンプトを作成するため、チャットボットに原文だけを貼るよりはるかに一貫した結果が得られます。` },
						{ q: 'テキスト要約は何をしてくれますか？', a: `長い文章を、目的に合わせた要約プロンプトに変換します: 経営層向けサマリー、箇条書きの要点、指定した長さの TL;DR、別言語での要旨など。長さ、想定読者、そして単純な要約で崩れやすい数値や固有名詞を正確に保持するかどうかまで、細かく制御できます。` },
						{ q: 'プロンプト生成はどのように動きますか？', a: `プロンプト生成は、効果的なプロンプトの構成要素 — 役割、タスク、文脈、制約条件、出力形式、例示 — を順に案内し、整った再利用可能なプロンプトテンプレートに組み上げます。単発のタスクにも、時間をかけて磨き上げる個人のプロンプトライブラリ作りにも役立ちます。` },
						{ q: '画像プロンプトビルダーはどの画像 AI に対応していますか？', a: `画像プロンプトビルダーは、テキスト画像モデルがよく反応する語彙 — 被写体、スタイル、画材、ライティング、カメラ・レンズ用語、構図、アスペクト比、ネガティブプロンプト — でプロンプトを構成します。出力は Midjourney、DALL-E、Stable Diffusion などで使用でき、対象サービスに合わせてパラメータフラグなどの記法の詳細を調整できます。` },
						{ q: 'コード解説は何に使えますか？', a: `コード片を貼り付けると、学習者向けの行単位の説明からレビュアー向けのアーキテクチャレベルの分析まで、選んだ深さで AI モデルに解説を求めるプロンプトを作成します。エッジケース、潜在的なバグ、計算量にも触れます。JavaScript、TypeScript、Python、Java、Go、SQL など主要言語のほとんどに対応します。ただし、共有が許可されていない社内コードを第三者の AI サービスに貼り付けないでください。` },
						{ q: 'メール作成はどう動きますか？', a: `状況(依頼、謝罪、フォローアップ、新規開拓、断り)、送信者と受信者の関係、希望するトーン、必ず盛り込むべき要点を指定すると、完成度が高く文化的にも適切なメール草稿を生成するプロンプトを作成します。一般的なチャットボットへの依頼では間違えやすい、日本語・韓国語ビジネスメールの敬語レベルまで反映します。` },
						{ q: 'ハッシュタグ生成は何をしますか？', a: `投稿内容と対象プラットフォーム(Instagram、X/Twitter、TikTok、LinkedIn、YouTube)を記述すると、バランスの取れたハッシュタグセット — 露出向けの大型タグ数個、中規模のニッチタグ、具体的なロングテールタグ — を生成するプロンプトを作成します。各プラットフォームの慣習と推奨タグ数に合わせて調整されます。` },
						{ q: 'ライティングアシスタントは他のツールと何が違いますか？', a: `ライティングアシスタントは、草稿作成、書き直し、加筆、短縮、校正のための汎用ツールです。作業の種類、想定読者、トーン、形式を選ぶと、編集用プロンプトを構成します。ブログの構成案、商品説明、SNS 投稿、外国語で書いた文章の推敲など、特化ツールに当てはまらない作業にお使いください。` },
						{ q: '作成したコンテンツを商用利用できますか？', a: `はい。当社は、ユーザーがツールで作成したプロンプトやテキストについて所有権を主張せず、ユーザーは自己の責任において個人的にも商業的にも利用できます。ただし、AI 生成コンテンツの著作権の扱いは国により異なり、他のユーザーに類似の出力が生成される可能性があり、プロンプトを貼り付ける第三者 AI サービスが成果物に独自の規約を適用する場合があります。利用規約第 9 条をご参照ください。` }
					]
				},
				{
					name: 'AI の精度と限界',
					faqs: [
						{ q: 'これらのツールで生成した結果はどれくらい正確ですか？', a: `よく構造化されたプロンプトは出力品質を大きく高めますが、最終的なテキストは統計的言語モデルが生成するものであり、いかなる AI 出力も正確性は保証されません。すべての結果を草稿として扱ってください: 批判的に読み、事実と数値を確認し、使用前に手を入れる必要があります。各ツールのガイドには、そのタスクの典型的な失敗パターンがまとめてあり、何を確認すべきかが分かります。` },
						{ q: 'AI の「ハルシネーション」とは何ですか？', a: `ハルシネーションとは、AI モデルが捏造した情報を完全な自信を持って述べる現象です — 実在しない引用、存在しない API 関数、誤った日付、でっち上げの統計など。言語モデルは検証済みの事実を検索するのではなく、もっともらしいテキストを予測するために起こります。特定の事実・出典・数値を尋ねるときにリスクが最も高く、ユーザーが提供したテキストの変換(翻訳・要約・書き直し)では比較的低くなります。名前、数値、引用、参考文献は必ず独自に検証してください。` },
						{ q: 'AI の翻訳や要約を法律・医療・公的な用途で信頼してよいですか？', a: `いいえ — 資格を持つ人間のレビューなしには使えません。AI の翻訳・要約は、理解、草稿作成、社内コミュニケーションには優れていますが、契約書、裁判書類、医療情報、ビザ申請書類、安全指示、財務報告には専門家が必要です。こうした場面での誤りは深刻な結果を招きかねず、AI モデルは間違っているときでも流暢な文章を生成するため、誤りに気づきにくいのです。` },
						{ q: '同じプロンプトなのに毎回結果が違うのはなぜですか？', a: `大規模言語モデルは非決定的です。次の単語の確率分布からサンプリングするため、同じプロンプトでも実行のたびに表現や構成が変わることがあります。これは正常な動作です。一貫性が必要な場合は、プロンプトをより具体的に(正確な形式、長さ、用語)書くか、数回生成し直して最良の結果を選んでください。` },
						{ q: 'ほかに知っておくべき限界はありますか？', a: `主なもの: (1) 学習データの締切 — ウェブアクセス機能がない限り、モデルは学習データ終了後の出来事を知りません; (2) バイアス — 人間のテキストから学習するため、社会的・文化的偏りを再現することがあります; (3) 計算と論理 — 自信ありげな口調のまま計算・推論を誤ることがあります; (4) コンテキスト制限 — 非常に長い入力は一部が無視される場合があります; (5) 指示の取りこぼし — 長いプロンプト内の細かい要件を見落とすことがあります。各ツールのガイドで、それぞれの軽減方法を解説しています。` }
					]
				},
				{
					name: '広告について',
					faqs: [
						{ q: `${SITE_NAME} に広告が表示されるのはなぜですか？`, a: `広告収入があるからこそ、${SITE_NAME} のすべてのツールとガイドを、アカウント不要・サブスクリプション不要・利用制限なしの無料で提供し続けられます。広告は Google AdSense を通じて配信しており、ツールの利用を妨げないよう配置は控えめにしています。` },
						{ q: '広告はどのようにパーソナライズされ、どうすれば拒否できますか？', a: `第三者ベンダーである Google は、Cookie(DoubleClick Cookie を含む)を使用し、本サイトおよび他のウェブサイトへの訪問に基づいて広告を配信します。Google 広告設定(https://www.google.com/settings/ads)でパーソナライズ広告をオプトアウトでき、https://www.aboutads.info/choices では他の多くのベンダーについてもオプトアウトできます。法令上必要な地域では、広告 Cookie が設定される前に同意バナーで拒否できます。オプトアウト後も広告は表示されますが、興味関心に基づく調整は行われません。` },
						{ q: '広告はツールに入力したテキストを見たり、影響を与えたりしますか？', a: `いいえ。ツールへの入力はブラウザ内で処理され、広告システムと共有されることは決してありません。広告 Cookie が関係するのはページ訪問であって、入力内容ではありません。広告 Cookie をブロックしたり広告ブロッカーを使ったりしても、ツールはすべてクライアントサイドで動作するため正常に機能します。` }
					]
				},
				{
					name: 'データとプライバシー',
					faqs: [
						{ q: 'ツールに入力したテキストはどうなりますか？', a: `ユーザーの端末、つまりブラウザの中で処理されます。ツールは出力をローカルで生成し、入力が当社サーバーへ送信・記録されたり、恒久的に保存されたりすることはありません — ユーザーテキストのサーバー側データベース自体が存在しません。入力を消去するかページを離れれば、テキストは消えます。詳細はプライバシーポリシー第 3 条をご覧ください。` },
						{ q: '私のテキストは AI の API に送信されますか？', a: `当社からは送信しません。テキストが AI モデルの API に到達するのは、ユーザー自身が生成されたプロンプトをコピーして ChatGPT、Claude、Gemini などの第三者アシスタントに貼り付けた瞬間だけであり、その時点以降の送信・保持は当該事業者のプライバシーポリシーが規律します。将来、AI API を直接呼び出すツールを追加する場合は、送信前にツールページで明確にその旨を表示し、結果生成の目的に限り暗号化接続で送信し、恒久的な保存は行いません。` },
						{ q: '私のデータを保存したり、AI の学習に使ったりしますか？', a: `いいえ。アカウント(登録自体が存在しません)、ツールへの入力、生成された出力のいずれも保存しません。ユーザーのテキストが、当社によって、または当社のために、機械学習モデルの学習・ファインチューニング・評価に使われることはありません。当社が扱うのは、プライバシーポリシーに記載した集計分析データ(ページビュー、おおよその国、ブラウザ種別)と標準的な広告 Cookie だけです。` },
						{ q: '自分に関するデータを削除するには？', a: `ほぼすべてがユーザー自身のブラウザ内にのみ存在します。ツールへの入力はページのメモリ上にのみあり、テーマ・言語設定は localStorage にあります。ブラウザで ${SITE_NAME} のサイトデータを消去すれば、すべて削除されます。それ以外 — たとえばお送りいただいたメールの削除 — は ${CONTACT_EMAIL} までご依頼いただければ、法定期限内に対応します。` }
					]
				},
				{
					name: '動作環境・その他',
					faqs: [
						{ q: `${SITE_NAME} は本当に無料ですか？利用制限はありますか？`, a: `はい、完全に無料です — アカウントも、サブスクリプションも、有料プランもなく、当社側の利用回数制限もありません。サイトは広告収入で運営されています。ただし、プロンプトを貼り付ける先の第三者 AI アシスタントには独自の無料枠の制限(メッセージ数上限、モデル制限など)がある場合があり、それは当該事業者の定めによります。` },
						{ q: '対応しているブラウザとデバイスは？', a: `${SITE_NAME} は、Chrome、Edge、Safari、Firefox、Chromium 系ブラウザなど、あらゆるモダンブラウザで、デスクトップでもモバイルでも動作します。インターフェースはレスポンシブなので、スマートフォンやタブレットでもツールをフルに使えます。ブラウザは最新の状態に保つことをお勧めします。非常に古いブラウザではツールが正しく表示されない場合があります。` },
						{ q: 'ツールはオフラインでも動きますか？', a: `ツールページが一度読み込まれれば、プロンプト生成ロジックはブラウザ内でローカルに実行されるため、短時間の接続断で作業が中断されることは通常ありません。ただし、ページの初回読み込み時と、生成したプロンプトで第三者の AI アシスタントを使うときには、当然ながらインターネット接続が必要です。` },
						{ q: 'バグ報告、ツールの提案、その他の問い合わせはどうすればよいですか？', a: `${CONTACT_EMAIL} までメールをお送りください。バグ報告には、ブラウザ名・バージョンと再現手順を添えていただけると最も助かります。すべてのご提案に目を通しており、サイト上のいくつかのツールは実際にユーザーのリクエストから生まれました。数営業日以内の返信を目標にしています。` }
					]
				}
			]
		},

		zh: {
			title: '常见问题',
			subtitle: `关于 ${SITE_NAME} AI 工具的使用方法、准确性、广告、隐私和技术要求的常见问题解答。`,
			categories: [
				{
					name: '工具使用',
					faqs: [
						{ q: `${SITE_NAME} 是什么？提供哪些工具？`, a: `${SITE_NAME} 是一套免费的浏览器端 AI 实用工具集，共八款：AI 翻译器、文本摘要器、提示词生成器、图像提示词构建器、代码解释器、邮件写作器、标签生成器和写作助手。每个工具页面还配有深度指南，讲解工具背后的方法原理，让你学会的不只是按哪个按钮，而是如何从 AI 模型中获得更好的结果。` },
						{ q: '工具生成的是成品文本，还是给 AI 助手用的提示词？', a: `我们的工具是结构化的提示词构建器。你描述需求 —— 要翻译的文本、要摘要的文章、邮件的场景 —— 工具便会组装出一条包含最佳实践（语体、格式、约束条件、核验步骤）的详细提示词。然后你把它粘贴到自己常用的 AI 助手中，如 ChatGPT、Claude 或 Gemini。这种设计让你的文本始终留在自己的设备上，并且适配你喜欢的任何模型。` },
						{ q: '如何使用 AI 翻译器？', a: `粘贴原文，选择源语言和目标语言，再设置语体（例如韩语的해요체与합쇼체、日语敬语、法语的 tu/vous 之分）、语气，以及不可翻译的词汇（品牌名、产品代码）等选项。工具会生成一条携带全部上下文的翻译提示词，比直接把原文丢给聊天机器人得到的结果一致得多。` },
						{ q: '文本摘要器有什么用？', a: `它把长文转换成贴合你目标的摘要提示词：管理层摘要、要点列表、指定长度的 TL;DR，或用另一种语言写的摘要。你可以控制长度、目标读者，以及是否必须原样保留数字和专有名词 —— 这是简单摘要最常出错的地方。` },
						{ q: '提示词生成器如何工作？', a: `提示词生成器会引导你逐项填写有效提示词的构成要素 —— 角色、任务、上下文、约束条件、输出格式和示例 —— 并组装成一条整洁、可复用的提示词模板。既适合一次性任务，也适合逐步打磨、积累属于自己的提示词库。` },
						{ q: '图像提示词构建器支持哪些图像 AI？', a: `图像提示词构建器使用文生图模型最易响应的词汇来组织提示词：主体、风格、媒介、光线、相机与镜头术语、构图、宽高比和负面提示词。生成结果适用于 Midjourney、DALL-E、Stable Diffusion 等生成器，你也可以按目标服务调整语法细节（如参数标志）。` },
						{ q: '代码解释器能帮我做什么？', a: `粘贴一段代码，工具会构建一条提示词，让 AI 模型按你选择的深度进行讲解 —— 面向学习者的逐行解释，或面向审查者的架构级分析 —— 并涵盖边界情况、潜在缺陷和复杂度。它与语言无关：JavaScript、TypeScript、Python、Java、Go、SQL 等主流语言都适用。请注意：不要把无权分享的私有代码粘贴到第三方 AI 服务中。` },
						{ q: '邮件写作器如何使用？', a: `你指定场景（请求、致歉、跟进、陌生开发信、婉拒）、收发双方的关系、期望的语气以及必须包含的要点，工具就会生成一条能产出完整且符合文化习惯的邮件草稿的提示词 —— 包括韩语和日语商务邮件的敬语层级，这恰恰是随手向聊天机器人提问时最容易出错的地方。` },
						{ q: '标签生成器是做什么的？', a: `描述你的帖子内容和目标平台（Instagram、X/Twitter、TikTok、LinkedIn、YouTube），工具会构建一条提示词，生成配比均衡的标签组合：几个高流量的曝光标签、中等规模的细分标签，以及具体的长尾标签，并按各平台的惯例和推荐标签数量进行调整。` },
						{ q: '写作助手与其他工具有何不同？', a: `写作助手是用于起草、改写、扩写、缩写和校对文本的通用工具。你选择操作类型、目标读者、语气和格式，它就会构建相应的编辑提示词。当你的任务不属于任何专门工具时就用它 —— 博客提纲、产品描述、社交帖子，或润色用外语写的文字。` },
						{ q: '我可以将创建的内容用于商业用途吗？', a: `可以。我们不对你用工具创建的提示词或文本主张任何所有权，你可以自担责任地将其用于个人或商业目的。请注意：AI 生成内容的著作权地位因国家而异，其他用户可能获得相似的输出，你粘贴提示词所用的第三方 AI 服务也可能对生成结果适用自己的条款。详见服务条款第九条。` }
					]
				},
				{
					name: 'AI 准确性与局限',
					faqs: [
						{ q: '用这些工具生成的结果有多准确？', a: `结构良好的提示词能显著提升输出质量，但最终文本出自统计语言模型，任何 AI 输出都无法保证准确。请把每个结果都当作草稿：批判性地阅读、核对事实和数字、修改后再使用。我们的工具指南列出了每类任务的典型失败模式，让你知道该检查什么。` },
						{ q: '什么是 AI "幻觉"？', a: `幻觉是指 AI 模型以十足的自信陈述编造的信息 —— 虚构的引用、不存在的 API 函数、错误的日期、捏造的统计数据。其根源在于语言模型是在预测"听起来合理"的文本，而不是检索经过验证的事实。当你询问具体事实、来源或数字时风险最高；当模型只是转换你提供的文本（翻译、摘要、改写）时风险相对较低。姓名、数字、引文和参考文献务必独立核实。` },
						{ q: '可以把 AI 翻译或摘要直接用于法律、医疗或官方用途吗？', a: `不可以 —— 未经具备资质的人工审核不行。AI 翻译和摘要非常适合理解材料、起草和内部沟通，但合同、法院文书、医疗信息、签证材料、安全说明和财务申报需要专业人士。这些场景中的错误可能造成严重后果，而 AI 模型即使出错也会生成流畅的文字，使错误更难被发现。` },
						{ q: '同一条提示词，为什么每次结果都不一样？', a: `大语言模型是非确定性的：它从可能的下一个词的概率分布中采样，因此同一条提示词每次运行可能产生不同的措辞或结构。这是正常现象。如果需要一致性，请把提示词写得更具体（明确格式、长度、术语），或多生成几次，选出最好的结果。` },
						{ q: '还有哪些局限需要了解？', a: `主要有：(1) 训练截止 —— 除非具备联网能力，模型不知道训练数据截止之后发生的事；(2) 偏见 —— 模型从人类文本中学习，可能复制社会和文化偏见；(3) 算术与逻辑 —— 模型可能在语气自信的同时算错、推理错；(4) 上下文限制 —— 超长输入可能被部分忽略；(5) 指令遗漏 —— 长提示词中细微的要求有时会被漏掉。各工具指南分别讲解了应对方法。` }
					]
				},
				{
					name: '广告相关',
					faqs: [
						{ q: `${SITE_NAME} 为什么显示广告？`, a: `正是广告让 ${SITE_NAME} 的所有工具和指南得以保持免费 —— 无需账号、无需订阅、没有使用限制。我们通过 Google AdSense 投放广告，并有节制地安排广告位置，避免干扰工具的使用。` },
						{ q: '广告如何个性化？我可以退出吗？', a: `作为第三方供应商，Google 使用 Cookie（包括 DoubleClick Cookie），基于你对本站及其他网站的访问来投放广告。你可以在 Google 广告设置（https://www.google.com/settings/ads）中退出个性化广告，也可以在 https://www.aboutads.info/choices 退出许多其他供应商的个性化广告。在法律要求的地区，同意横幅会在设置任何广告 Cookie 之前让你选择拒绝。退出后仍会看到广告，但不再基于你的兴趣定制。` },
						{ q: '广告会看到或影响我在工具中输入的文本吗？', a: `不会。工具输入在你的浏览器中处理，绝不与广告系统共享。广告 Cookie 只与页面访问相关，与你输入的内容无关。屏蔽广告 Cookie 或使用广告拦截器也不会影响工具运行，因为它们完全在客户端执行。` }
					]
				},
				{
					name: '数据与隐私',
					faqs: [
						{ q: '我在工具里输入的文本会怎样？', a: `它在你的设备上、也就是浏览器中被处理。工具在本地生成输出；你的输入绝不会被传输到我们的服务器、被记录或被永久存储 —— 根本不存在用户文本的服务器端数据库。清除输入或离开页面后，文本即消失。详见隐私政策第 3 条。` },
						{ q: '我的文本会被发送到 AI API 吗？', a: `我们不会发送。只有当你自己复制生成的提示词并粘贴到 ChatGPT、Claude、Gemini 等第三方助手时，你的文本才会到达 AI 模型的 API —— 自那一刻起，其传输和保留由该提供商自己的隐私政策约束。如果我们将来新增直接调用 AI API 的工具，会在你提交任何内容之前在工具页面上明确说明，仅为生成结果而通过加密连接传输文本，且绝不永久存储。` },
						{ q: '你们会存储我的数据或用它训练 AI 模型吗？', a: `不会。我们不存储账号（根本没有注册功能）、不存储工具输入，也不存储生成的输出。你的文本绝不会被我们或代表我们的任何一方用于训练、微调或评估任何机器学习模型。我们处理的数据仅限于隐私政策中所述的聚合分析数据（页面访问量、大致国家、浏览器类型）和标准广告 Cookie。` },
						{ q: '如何删除与我有关的数据？', a: `几乎所有数据都只存在于你自己的浏览器中：工具输入只存在于页面内存，主题/语言偏好保存在 localStorage 中。在浏览器中清除 ${SITE_NAME} 的站点数据即可全部删除。其他事项 —— 例如删除你发给我们的邮件 —— 请写信至 ${CONTACT_EMAIL}，我们会在法定期限内处理。` }
					]
				},
				{
					name: '技术与访问',
					faqs: [
						{ q: `${SITE_NAME} 真的免费吗？有使用限制吗？`, a: `是的，完全免费 —— 没有账号、没有订阅、没有付费档位，我们这边也没有任何用量上限。网站靠广告维持运营。请注意，你粘贴提示词所用的第三方 AI 助手可能有自己的免费额度限制（消息数量上限、模型限制等），那由该提供商决定，与我们无关。` },
						{ q: '支持哪些浏览器和设备？', a: `${SITE_NAME} 可在所有现代浏览器中运行 —— Chrome、Edge、Safari、Firefox 及各类 Chromium 内核浏览器 —— 桌面端和移动端均可。界面为响应式设计，手机和平板上也能完整使用所有工具。建议保持浏览器更新；非常老旧的浏览器可能无法正确渲染工具。` },
						{ q: '工具可以离线使用吗？', a: `工具页面加载完成后，提示词构建逻辑就在浏览器中本地运行，因此短暂断网通常不会打断你的工作。但首次加载页面时需要联网，把生成的提示词拿去第三方 AI 助手使用时自然也需要联网。` },
						{ q: '如何报告错误、建议新工具或咨询其他问题？', a: `请发邮件至 ${CONTACT_EMAIL}。报告错误时附上浏览器名称、版本和复现步骤最有帮助。我们会阅读每一条建议，站上有好几款工具正是源于用户的请求。我们争取在几个工作日内回复。` }
					]
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - {SITE_NAME}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t.subtitle}</p>
	</div>

	<div class="space-y-10">
		{#each t.categories as category}
			<section>
				<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{category.name}</h2>
				<div class="space-y-4">
					{#each category.faqs as faq}
						<details class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700">
							<summary class="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-dark-100">
								<span>{faq.q}</span>
								<svg class="w-5 h-5 shrink-0 ml-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</summary>
							<div class="px-6 pb-6">
								<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{faq.a}</p>
							</div>
						</details>
					{/each}
				</div>
			</section>
		{/each}
	</div>

	<div class="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
		<a href="/{lang}" class="text-primary-500 hover:text-primary-400 transition-colors">
			← {lang === 'ko' ? '홈으로 돌아가기' : lang === 'ja' ? 'ホームに戻る' : lang === 'zh' ? '返回首页' : 'Back to Home'}
		</a>
	</div>
</div>
