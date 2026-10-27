<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SDK.ac';
	const SITE_DOMAIN = 'sdk.ac';
	const CONTACT_EMAIL = 'contact@sdklabs.org';
	const COMPANY_NAME = 'SDKLabs Co., Ltd.';
	const COMPANY_NAME_KO = '주식회사 에스디케이랩스';
	const BUSINESS_NUMBER = '424-86-03401';
	const COMPANY_ADDRESS = '서울특별시 서초구 태봉로 60, 542호(우면동, 황금빌딩)';
	const COMPANY_ADDRESS_EN = 'Suite 542, 60 Taebong-ro, Seocho-gu, Seoul, Republic of Korea';

	type AboutContent = {
		title: string;
		subtitle: string;
		storyHeading: string;
		storyParagraphs: string[];
		missionHeading: string;
		missionParagraphs: string[];
		whoWeAreHeading: string;
		whoWeAreParagraphs: string[];
		company: string;
		companyName: string;
		founded: string;
		foundedYear: string;
		focus: string;
		focusArea: string;
		businessNumberLabel: string;
		businessNumberValue: string;
		addressLabel: string;
		addressValue: string;
		catalogHeading: string;
		catalogIntro: string;
		catalogItems: { icon: string; title: string; description: string }[];
		principlesHeading: string;
		principles: { title: string; description: string }[];
		techHeading: string;
		techIntro: string;
		techParagraphs: string[];
		techStack: string[];
		aiHeading: string;
		aiParagraphs: string[];
		privacyHeading: string;
		privacyParagraphs: string[];
		contactHeading: string;
		contactIntro: string;
		contactPoints: string[];
		legalHeading: string;
		legalNote: string;
		linksHeading: string;
		linkPrivacy: string;
		linkTerms: string;
	};

	const content: Partial<Record<Locale, AboutContent>> & { en: AboutContent } = {
		en: {
			title: `About ${SITE_NAME}`,
			subtitle: "Free browser-based prompt builders and opening-text extraction",

			storyHeading: 'Our Story',
			storyParagraphs: [
				"SDK.ac provides simple browser tools for preparing requests and extracting opening text. Seven tools assemble prompts using your input and fixed options. The eighth, Leading-Sentence Summarizer, selects the first punctuation-delimited chunks of a text without judging their importance.",
				"You can inspect each result before using it. A prompt must be taken to a separate assistant to obtain a translation, email draft, code explanation, image, hashtag list, or revised passage. SDK.ac does not call a model or verify those external results.",
				"All eight tool functions process inputs locally in the browser. The guides show exact outputs for specified inputs, explain the fixed templates, and identify limitations such as conflicting instructions or omitted sentences."
			],

			missionHeading: 'Our Mission',
			missionParagraphs: [
				`${SITE_NAME} exists to make working with AI faster and less frustrating for people who write, code, translate, and publish for a living. We believe everyday AI utilities should be free, instant, mobile-friendly, and private by default. Whether you are drafting an email on a train, building an image prompt for a client mock-up, or trying to understand a block of unfamiliar code, you should get to a useful result in seconds — not after a signup flow.`,
				`We measure ourselves on three numbers: time-to-result (target: under three seconds from cold page load to usable output), clicks-to-result (target: as few as the task allows), and bytes of your text stored on our servers (target: zero). Every design decision on this site is downstream of those three numbers.`,
				`Long-term, the mission is bigger than the current catalogue. Prompting well is quickly becoming a basic literacy, like search queries were twenty years ago. We want ${SITE_NAME} to be the place a colleague recommends when you ask "is there a tool that helps with that?" — and we want you to feel zero regret when you click the link.`
			],

			whoWeAreHeading: 'Who We Are',
			whoWeAreParagraphs: [
				`${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean software company founded in 2025 that builds free online utilities and developer-focused tools. Our team has shipped consumer and developer web products used by millions of people, and we apply the same standards for UX, accuracy, and speed to every tool on this site.`,
				`Beyond ${SITE_NAME}, the same team operates SDK.is (developer utilities), JavaScript.ac (interactive JavaScript learning), SDK.bz (financial and crypto calculators), and SD.gy (everyday calculators). Lessons learned on one site — accessibility patterns, performance budgets, ad-density thresholds — get applied across all of them.`
			],
			company: 'Company',
			companyName: COMPANY_NAME,
			founded: 'Founded',
			foundedYear: '2025',
			focus: 'Focus',
			focusArea: "Prompt and text utilities, free web tools",
			businessNumberLabel: 'Business Registration',
			businessNumberValue: BUSINESS_NUMBER,
			addressLabel: 'Address',
			addressValue: COMPANY_ADDRESS_EN,

			catalogHeading: `What You'll Find on ${SITE_NAME}`,
			catalogIntro: "All eight tools are free and process inputs in your browser without an account. Seven assemble requests; one extracts opening text.",
			catalogItems: [
				{ icon: '文A', title: "Translation Prompt Builder", description: "Build a translation request from your text and selected languages. Does not translate it." },
				{ icon: 'TL;DR', title: "Leading-Sentence Summarizer", description: "Extract the first punctuation-delimited chunks locally. No importance ranking or model is used." },
				{ icon: '>', title: "Prompt Generator", description: "Assemble a request from your task, optional context, and a fixed style instruction. No model is called." },
				{ icon: 'IMG', title: "Image Prompt Builder", description: "Combine a subject with fixed style and mood phrases. Produces text, not an image." },
				{ icon: '{ }', title: "Code Explanation Prompt Builder", description: "Wrap code with its language label and a fixed explanation request. Does not run or analyze it." },
				{ icon: '@', title: "Email Prompt Builder", description: "Build an email drafting request from type, topic, recipient, and tone. Does not draft or send email." },
				{ icon: '#', title: "Hashtag Prompt Builder", description: "Build a hashtag request from topic, platform, and count. Does not fetch trends or generate tags." },
				{ icon: '✎', title: "Writing Revision Prompt Builder", description: "Combine your text with a fixed revision instruction. Does not edit or correct the text itself." }
			],

			principlesHeading: 'Our Principles',
			principles: [
				{ title: 'Free Forever', description: 'No paywalls, no premium tier, no generation credits. Ads keep the tools free for everyone.' },
				{ title: 'Your Text Stays Yours', description: 'Tool inputs are processed on your device. We never store, read, or train on what you type.' },
				{ title: 'No Login, Ever', description: 'No account, no signup, no email capture. Open the page and start working.' },
				{ title: 'Fast by Default', description: 'Sub-second loads on Cloudflare’s global edge network, on desktop and mobile alike.' },
				{ title: 'Honest About AI', description: 'AI output can be wrong. We say so plainly, on every page where it matters.' },
				{ title: 'No Dark Patterns', description: 'No fake countdowns, no "2 free uses left," no roach-motel cookie banners.' }
			],

			techHeading: 'Technology Stack',
			techIntro: 'Every piece of the stack was chosen to optimise load speed, reliability, and long-term maintainability for a small team.',
			techParagraphs: [
				`The frontend is built with SvelteKit and TypeScript, styled with Tailwind CSS, and deployed to Cloudflare Pages. There is no traditional backend: pages are rendered at the edge, tool logic runs in your browser, and preferences (theme, language) live in your own localStorage. Where a tool produces a prompt for an external AI assistant, you carry that prompt to the assistant yourself — we never proxy your text through our infrastructure.`,
				`This architecture has practical consequences for you. First, time-to-interactive is measured in tens of milliseconds, not seconds. Second, there is no server database of user text that could leak, be subpoenaed, or be sold — because it does not exist. Third, our infrastructure costs are low enough that ${SITE_NAME} can stay free indefinitely without ever introducing a paid tier.`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],

			aiHeading: 'AI Limitations, Honestly',
			aiParagraphs: [
				`We build tools for working with AI, so we owe you plain talk about what AI cannot do. Large language models generate plausible text; they do not guarantee true text. They hallucinate facts, invent citations, mistranslate idioms, produce code that compiles but is subtly wrong, and write with total confidence in every one of those failure modes. A well-structured prompt — which is what our tools help you build — meaningfully improves output quality, but it does not eliminate these risks.`,
				`Our position is simple: AI output is a draft, not a deliverable. Verify translations with a native speaker before publishing. Run and test generated code before shipping it. Fact-check summaries against the source document when the stakes are real. Nothing produced with the help of ${SITE_NAME} constitutes professional, legal, medical, or financial advice, and the responsibility for reviewing and using AI output rests with you. We would rather say this clearly on our About page than bury it in a footnote.`
			],

			privacyHeading: 'How We Handle Your Text',
			privacyParagraphs: [
				`Everything you type into a ${SITE_NAME} tool — text to summarize, code to explain, email points to draft — is processed on your device. It is not transmitted to our servers, not logged, not stored, and not used to train any model. When a tool generates a prompt for an external AI assistant, that prompt exists only in your browser until you choose to copy it and paste it somewhere else. What happens after you paste it into a third-party AI service is governed by that service's privacy policy, so choose your assistant accordingly for sensitive material.`,
				`The only data we collect is standard aggregated analytics (page views, country, device type) and the advertising cookies described in our Privacy Policy, which you can refuse. We never sell or share personal data. If our advertising provider changes its consent rules, we will update our consent handling immediately and note the change on the Privacy Policy page.`
			],

			contactHeading: 'Contact Us',
			contactIntro: `Have questions, suggestions, or feedback? We read every message.`,
			contactPoints: [
				`General questions and feedback: ${CONTACT_EMAIL}`,
				'Bug reports: please include the tool, your browser and OS, and steps to reproduce.',
				'Tool suggestions: tell us which AI task you wish had a one-button tool — real use cases move our roadmap.',
				'Business, partnership, and advertising: include "Business" in your subject line.',
				'Privacy requests and legal notices: include "Legal" in your subject line.'
			],

			legalHeading: 'Legal & Operator Information',
			legalNote: `${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean corporation registered with the competent authorities of the Republic of Korea (business registration ${BUSINESS_NUMBER}).`,

			linksHeading: 'Legal',
			linkPrivacy: 'Privacy Policy',
			linkTerms: 'Terms of Service'
		},

		ko: {
			title: `${SITE_NAME} 소개`,
			subtitle: "무료 브라우저 프롬프트 생성기와 앞문장 추출 도구",

			storyHeading: '운영자 이야기',
			storyParagraphs: [
				"SDK.ac는 요청문 준비와 텍스트 앞부분 추출을 위한 간단한 브라우저 도구를 제공합니다. 7개 도구는 입력과 고정 선택값으로 프롬프트를 조립합니다. 나머지 하나인 앞문장 추출 요약기는 중요도 판단 없이 문장부호로 나눈 첫 구간들을 선택합니다.",
				"결과는 사용하기 전에 확인할 수 있습니다. 번역, 이메일 초안, 코드 설명, 이미지, 해시태그 목록, 수정문을 얻으려면 프롬프트를 외부 AI로 가져가야 합니다. SDK.ac는 모델을 호출하거나 외부 결과를 검증하지 않습니다.",
				"8개 도구 함수 모두 브라우저에서 입력을 로컬 처리합니다. 가이드는 지정 입력의 정확한 출력과 고정 템플릿을 보여 주고, 지시 충돌이나 문장 누락 같은 한계를 설명합니다."
			],

			missionHeading: '미션',
			missionParagraphs: [
				`${SITE_NAME}는 글을 쓰고, 코드를 짜고, 번역하고, 콘텐츠를 만드는 사람들이 AI를 더 빠르고 덜 답답하게 쓸 수 있도록 존재합니다. 일상적인 AI 유틸리티는 무료여야 하고, 즉각적이어야 하고, 모바일 친화적이어야 하며, 기본적으로 프라이버시를 지켜야 한다고 믿습니다. 기차에서 이메일 초안을 쓰든, 클라이언트 시안용 이미지 프롬프트를 만들든, 낯선 코드 블록을 이해하려 하든 — 가입 절차가 아니라 몇 초 안에 쓸 만한 결과에 도달해야 합니다.`,
				`우리는 세 가지 숫자로 스스로를 평가합니다. 결과까지의 시간(목표: 콜드 로드부터 사용 가능한 출력까지 3초 미만), 결과까지의 클릭 수(목표: 과제가 허용하는 한 최소), 우리 서버에 저장되는 여러분 텍스트의 바이트 수(목표: 0). 이 사이트의 모든 설계 결정은 이 세 숫자의 결과물입니다.`,
				`장기적으로 미션은 현재 카탈로그보다 큽니다. 좋은 프롬프트를 쓰는 능력은 20년 전의 검색어 작성처럼 빠르게 기본 소양이 되어가고 있습니다. "그거 도와주는 도구 있어?"라고 물었을 때 동료가 추천하는 곳이 ${SITE_NAME}이길 바라고, 링크를 눌렀을 때 조금의 후회도 없기를 바랍니다.`
			],

			whoWeAreHeading: '운영 정보',
			whoWeAreParagraphs: [
				`${SITE_NAME}는 2025년 설립된 한국 소프트웨어 회사 ${COMPANY_NAME_KO}이 운영합니다. 무료 온라인 유틸리티와 개발자 도구를 만드는 회사로, 수백만 명이 쓰는 컨슈머·개발자 웹 제품을 출시한 팀이 UX·정확성·속도에 대한 동일한 기준을 이 사이트의 모든 도구에 적용합니다.`,
				`${SITE_NAME} 외에도 같은 팀이 SDK.is(개발자 유틸리티), JavaScript.ac(인터랙티브 JavaScript 학습), SDK.bz(금융·암호화폐 계산기), SD.gy(일상 계산기)를 운영합니다. 한 사이트에서 얻은 교훈 — 접근성 패턴, 성능 예산, 광고 밀도 임계치 — 이 모든 사이트에 적용됩니다.`
			],
			company: '회사',
			companyName: COMPANY_NAME_KO,
			founded: '설립',
			foundedYear: '2025',
			focus: '주력 분야',
			focusArea: "프롬프트·텍스트 유틸리티, 무료 웹 도구",
			businessNumberLabel: '사업자등록번호',
			businessNumberValue: BUSINESS_NUMBER,
			addressLabel: '주소',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `${SITE_NAME}에서 만나는 것`,
			catalogIntro: "8개 도구는 모두 무료이며 계정 없이 브라우저에서 입력을 처리합니다. 7개는 요청문을 조립하고 하나는 텍스트 앞부분을 추출합니다.",
			catalogItems: [
				{ icon: '文A', title: "번역 프롬프트 생성기", description: "텍스트와 선택 언어로 번역 요청문을 만듭니다. 직접 번역하지 않습니다." },
				{ icon: 'TL;DR', title: "앞문장 추출 요약기", description: "문장부호로 나눈 앞쪽 구간을 로컬에서 추출합니다. 중요도 평가나 모델을 사용하지 않습니다." },
				{ icon: '>', title: "프롬프트 생성기", description: "작업, 선택 맥락, 고정 스타일 지시를 조립해 요청문을 만듭니다. 모델은 호출하지 않습니다." },
				{ icon: 'IMG', title: "이미지 프롬프트 생성기", description: "대상에 고정 스타일·분위기 문구를 결합합니다. 이미지가 아닌 텍스트를 만듭니다." },
				{ icon: '{ }', title: "코드 설명 프롬프트 생성기", description: "코드에 언어 표시와 고정 설명 요청을 붙입니다. 실행하거나 분석하지 않습니다." },
				{ icon: '@', title: "이메일 프롬프트 생성기", description: "유형, 주제, 수신자, 어조로 이메일 작성 요청을 만듭니다. 직접 작성하거나 발송하지 않습니다." },
				{ icon: '#', title: "해시태그 프롬프트 생성기", description: "주제, 플랫폼, 개수로 해시태그 요청문을 만듭니다. 트렌드를 조회하거나 태그를 직접 만들지 않습니다." },
				{ icon: '✎', title: "글쓰기 수정 프롬프트 생성기", description: "텍스트에 고정 수정 지시를 결합합니다. 텍스트를 직접 편집하거나 교정하지 않습니다." }
			],

			principlesHeading: '운영 원칙',
			principles: [
				{ title: '영원히 무료', description: '페이월·프리미엄 티어·생성 크레딧 없음. 광고가 모두를 위한 도구를 무료로 유지합니다.' },
				{ title: '텍스트는 이용자의 것', description: '도구 입력은 기기에서 처리됩니다. 입력을 저장·열람하지 않으며 학습에 쓰지 않습니다.' },
				{ title: '로그인 없음', description: '계정도, 가입도, 이메일 수집도 없습니다. 페이지를 열고 바로 작업하세요.' },
				{ title: '기본적으로 빠름', description: 'Cloudflare 글로벌 엣지 네트워크 기반의 1초 미만 로딩. 데스크톱과 모바일 모두.' },
				{ title: 'AI에 대해 정직하게', description: 'AI 출력은 틀릴 수 있습니다. 중요한 모든 페이지에서 이를 분명히 말합니다.' },
				{ title: '다크 패턴 없음', description: '가짜 카운트다운, "무료 2회 남음", 빠져나갈 수 없는 쿠키 배너 모두 없습니다.' }
			],

			techHeading: '기술 스택',
			techIntro: '스택의 모든 부분은 로딩 속도, 안정성, 그리고 작은 팀의 장기 유지보수성을 위해 선택되었습니다.',
			techParagraphs: [
				`프런트엔드는 SvelteKit + TypeScript로 만들고, Tailwind CSS로 스타일링하며, Cloudflare Pages에 배포합니다. 전통적인 백엔드는 없습니다. 페이지는 엣지에서 렌더링되고, 도구 로직은 브라우저에서 실행되며, 환경설정(테마·언어)은 이용자 본인의 localStorage에 저장됩니다. 도구가 외부 AI 어시스턴트용 프롬프트를 만들어 주는 경우에도 그 프롬프트를 어시스턴트로 가져가는 것은 이용자 본인입니다 — 우리는 텍스트를 우리 인프라로 중계하지 않습니다.`,
				`이 아키텍처의 실용적 효과는 분명합니다. 첫째, TTI가 초 단위가 아니라 수십 ms 단위입니다. 둘째, 유출되거나, 압수되거나, 팔릴 수 있는 이용자 텍스트 데이터베이스가 서버에 존재하지 않습니다 — 애초에 없기 때문입니다. 셋째, 인프라 비용이 낮아 유료 티어를 도입하지 않고도 ${SITE_NAME}를 무한정 무료로 유지할 수 있습니다.`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],

			aiHeading: 'AI의 한계, 정직하게',
			aiParagraphs: [
				`AI를 다루는 도구를 만드는 만큼, AI가 하지 못하는 것에 대해 솔직히 말할 의무가 있습니다. 대규모 언어 모델은 그럴듯한 텍스트를 생성할 뿐, 참인 텍스트를 보장하지 않습니다. 사실을 지어내고, 존재하지 않는 출처를 만들어내고, 관용구를 오역하고, 컴파일은 되지만 미묘하게 틀린 코드를 내놓으며, 이 모든 실패를 완전한 확신에 찬 문장으로 저지릅니다. 잘 구조화된 프롬프트 — 우리 도구가 도와주는 바로 그것 — 는 출력 품질을 의미 있게 높이지만, 이런 위험을 제거하지는 못합니다.`,
				`우리의 입장은 단순합니다. AI 출력은 초안이지 완성물이 아닙니다. 번역은 게시 전에 원어민에게 검증받으세요. 생성된 코드는 배포 전에 실행하고 테스트하세요. 중요한 일이라면 요약을 원문과 대조해 사실 확인하세요. ${SITE_NAME}의 도움으로 만들어진 어떤 것도 전문적·법률적·의료적·재정적 조언이 아니며, AI 출력을 검토하고 사용하는 책임은 이용자에게 있습니다. 이것을 각주에 숨기기보다 소개 페이지에서 분명히 말하는 쪽을 택했습니다.`
			],

			privacyHeading: '입력한 텍스트를 다루는 방식',
			privacyParagraphs: [
				`${SITE_NAME} 도구에 입력하는 모든 것 — 요약할 텍스트, 설명이 필요한 코드, 이메일 요점 — 은 이용자의 기기에서 처리됩니다. 우리 서버로 전송되지 않고, 기록되지 않고, 저장되지 않으며, 어떤 모델 학습에도 사용되지 않습니다. 도구가 외부 AI 어시스턴트용 프롬프트를 생성하면 그 프롬프트는 이용자가 복사해 다른 곳에 붙여넣기 전까지 브라우저 안에만 존재합니다. 제3자 AI 서비스에 붙여넣은 이후는 해당 서비스의 개인정보처리방침이 적용되므로, 민감한 자료라면 어시스턴트를 신중히 선택하세요.`,
				`우리가 수집하는 것은 표준 집계 분석(페이지뷰, 국가, 기기 유형)과 개인정보처리방침에 명시된 광고 쿠키뿐이며, 광고 쿠키는 거부할 수 있습니다. 개인정보를 판매·공유하지 않습니다. 광고 사업자의 동의 정책이 변경되면 동의 처리를 즉시 업데이트하고 개인정보처리방침 페이지에 변경 사실을 남깁니다.`
			],

			contactHeading: '문의하기',
			contactIntro: '질문, 제안, 피드백이 있으신가요? 모든 메시지를 읽습니다.',
			contactPoints: [
				`일반 문의·피드백: ${CONTACT_EMAIL}`,
				'버그 신고: 도구 이름, 브라우저와 OS, 재현 단계를 포함해 주세요.',
				'도구 제안: 버튼 하나로 해결되었으면 하는 AI 작업을 알려주세요. 실제 사용 사례가 로드맵을 움직입니다.',
				'비즈니스·파트너십·광고: 제목에 "Business"를 포함해 주세요.',
				'개인정보 요청·법적 고지: 제목에 "Legal"을 포함해 주세요.'
			],

			legalHeading: '법적·운영자 정보',
			legalNote: `${SITE_NAME}는 대한민국 관계 기관에 등록된 한국 법인 ${COMPANY_NAME_KO}이 운영합니다(사업자등록번호 ${BUSINESS_NUMBER}).`,

			linksHeading: '법적 고지',
			linkPrivacy: '개인정보 처리방침',
			linkTerms: '이용약관'
		},

		ja: {
			title: `${SITE_NAME} について`,
			subtitle: '無料の AI ライティング＆プロンプトツール — ログイン不要、アップセルなし、入力したテキストは端末の中だけに。',

			storyHeading: '運営者の物語',
			storyParagraphs: [
				`${SITE_NAME} を始めたのは、ウェブ上で「無料 AI ツール」という言葉が意味するものに疲れ果てたからです。無料の AI 翻訳やテキスト要約を検索すると、行き着く先はいつも同じ 3 つです。1 文字も入力する前に現れるログインの壁。1 回使うと「無制限生成にはアップグレード」とせがむツール。そして最悪なのは — 貼り付けたテキストをこっそり収集することがビジネスモデルになっているサイト。私自身、プライバシーポリシーを読む前に、顧客へのメールや書きかけのブログ原稿、社内コードの断片をそういうサイトに貼り付けたことがあります。ほとんどの人がそうしています。それが問題なのです。`,
				`私が欲しかったものは拍子抜けするほど単純でした。テキストを貼り付けて、ボタンを 1 つ押せば、使える結果が出てくるページ。アカウントも、クレジットカウンターも、「本日の無料利用はあと 2 回」も、テキストエリアの前に立ちはだかるダークパターンの Cookie バナーもなしで。そこで 2024 年に ${SITE_NAME} の最初のバージョン — 入力欄 1 つとボタン 1 つだけのプロンプト生成ツール — を作り、自分の仕事で本当に必要になるたびにツールを追加してきました。製品を 4 か国語にローカライズしたときは翻訳プロンプトツールを、ジュニア開発者のオンボーディングにはコード解説ツールを、毎週同じビジネスメール 3 通を書き直していると気づいたときはメール作成ツールを。`,
				`現在 ${SITE_NAME} には 8 つの AI ツールがあり、どれも最初のツールと同じルールに従っています。ページ読み込みから 2 秒以内に使えること、そして入力したテキストがどこにも黙って送信されないこと。ツールの多くはプロンプトビルダーです — 入力とオプションから、丁寧に構造化された実績あるプロンプトを組み立て、それを ChatGPT、Claude、Gemini など、すでにお使いの AI アシスタントに貼り付けるだけです。要約ツールは抽出ロジック全体がブラウザ内で実行されます。入力内容が当社サーバーへ送信・記録・保存されることはありません。`,
				`運営費はディスプレイ広告でまかなっていますが、ここにも方針があります。広告密度は業界平均よりはるかに低く保ち、ユーザーとツールの間には決して広告を置きません。広告がツールを使いにくくするなら、広告を動かすか外します。それが約束であり、${SITE_NAME} が「Pro プラン」なしで無料であり続けられる理由です。`
			],

			missionHeading: 'ミッション',
			missionParagraphs: [
				`${SITE_NAME} は、書き、コーディングし、翻訳し、発信する人々が AI をより速く、よりストレスなく使えるようにするために存在します。日常の AI ユーティリティは無料で、即座に使えて、モバイルフレンドリーで、デフォルトでプライバシーを守るべきだと信じています。電車の中でメールを下書きするときも、クライアント向けモックの画像プロンプトを作るときも、見慣れないコードを理解しようとするときも — 登録フローではなく、数秒で使える結果にたどり着けるべきです。`,
				`私たちは 3 つの数値で自らを評価します。結果までの時間（目標: コールドロードから使える出力まで 3 秒未満）、結果までのクリック数（目標: タスクが許す限り最少）、当社サーバーに保存されるあなたのテキストのバイト数（目標: 0）。このサイトのすべての設計判断は、この 3 つの数値から導かれています。`,
				`長期的には、ミッションは現在のカタログより大きなものです。良いプロンプトを書く力は、20 年前の検索クエリのように、急速に基礎リテラシーになりつつあります。「それを手伝ってくれるツールある？」と聞かれた同僚が薦める場所が ${SITE_NAME} であってほしい — そしてリンクを開いた瞬間に一切の後悔がないことを願っています。`
			],

			whoWeAreHeading: '運営情報',
			whoWeAreParagraphs: [
				`${SITE_NAME} は、2025 年に設立された韓国のソフトウェア会社 ${COMPANY_NAME} が運営しています。無料オンラインユーティリティと開発者向けツールを作る会社で、数百万人が使うコンシューマー・開発者向け Web プロダクトを世に出してきたチームが、同じ UX・正確性・速度の基準をこのサイトのすべてのツールに適用しています。`,
				`${SITE_NAME} のほかにも、同じチームが SDK.is（開発者ユーティリティ）、JavaScript.ac（インタラクティブな JavaScript 学習）、SDK.bz（金融・暗号資産計算機）、SD.gy（日常計算機）を運営しています。1 つのサイトで得た学び — アクセシビリティパターン、パフォーマンス予算、広告密度のしきい値 — がすべてのサイトに反映されます。`
			],
			company: '会社',
			companyName: COMPANY_NAME,
			founded: '設立',
			foundedYear: '2024 年',
			focus: '注力分野',
			focusArea: 'AI ツール、プロンプトユーティリティ、無料 Web ツール',
			businessNumberLabel: '事業者登録番号',
			businessNumberValue: BUSINESS_NUMBER,
			addressLabel: '住所',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `${SITE_NAME} で出会えるもの`,
			catalogIntro: `${SITE_NAME} は現在 8 つの AI ツールを提供しています。すべて無料、アカウント不要で、入力はすべてユーザーの端末上で処理されます。`,
			catalogItems: [
				{ icon: '文A', title: 'AI 翻訳', description: '12 の主要言語のどの組み合わせでも、文脈を考慮した精密な翻訳プロンプトを生成します。ありきたりな「これ翻訳して」の代わりに、トーン・敬語レベル・書式を保つよう設計されたプロンプトが得られ、ChatGPT・Claude・Gemini から格段に良い出力を引き出せます。' },
				{ icon: 'TL;DR', title: 'テキスト要約', description: '長い記事、レポート、議事録を要点となる文に凝縮します。抽出処理は完全にブラウザ内で実行され、文書はアップロードされないため、社内メモや機密の下書きにも安心して使えます。' },
				{ icon: '>', title: 'AI プロンプト生成', description: '大まかなアイデア（「製品ローンチの記事を書いて」）を、役割・文脈・制約・出力形式を備えた構造化プロンプトに変換します。雑なプロンプトと構造化されたプロンプトの差は、たいてい「書き直し」と「即採用」の差です。' },
				{ icon: 'IMG', title: '画像プロンプトビルダー', description: '被写体・スタイル・ライティング・構図・ムードの選択から、Midjourney、DALL·E、Stable Diffusion 用の詳細プロンプトを組み立てます。欲しい絵は頭にあるのに、画像モデルが理解する言葉が分からないデザイナーに最適です。' },
				{ icon: '{ }', title: 'コード解説', description: 'あらゆるコードスニペットを、経験レベルに合わせた解説プロンプトで包みます — 「プログラミング初心者向けに説明」から「シニアレベルのレビュー」まで。主要言語をすべてサポートし、コードはどこにも送信されません。' },
				{ icon: '@', title: 'メール作成', description: '目的・トーン・いくつかの箇条書きから、プロフェッショナルなメールプロンプトを生成します。フォローアップ、コールドメール、お詫び、交渉など、誰もが送信前に 5 回は書き直すメールをカバーします。' },
				{ icon: '#', title: 'ハッシュタグ生成', description: 'トピックとターゲットから、Instagram、X、TikTok、LinkedIn に適したハッシュタグプロンプトを作ります。汎用タグを 30 個並べる代わりに、リーチ用タグとニッチタグのバランスを取ります。' },
				{ icon: '✎', title: 'ライティングアシスタント', description: 'どんな文章もワンクリックで改善・短縮・拡張・フォーマル化・平易化するプロンプトを提供します。AI チャットに文脈を一から説明し直さずに、一段落だけ磨きたいときに理想的です。' }
			],

			principlesHeading: '運営原則',
			principles: [
				{ title: '永久無料', description: 'ペイウォールもプレミアムプランも生成クレジットもなし。広告が全員のためにツールを無料に保ちます。' },
				{ title: 'テキストはあなたのもの', description: 'ツールへの入力は端末上で処理されます。入力を保存・閲覧せず、学習にも使いません。' },
				{ title: 'ログイン不要、永遠に', description: 'アカウントも登録もメール収集もなし。ページを開いてすぐ作業できます。' },
				{ title: 'デフォルトで高速', description: 'Cloudflare のグローバルエッジによる 1 秒未満のロード。デスクトップでもモバイルでも。' },
				{ title: 'AI について正直に', description: 'AI の出力は間違い得ます。重要なすべてのページでそれを明言します。' },
				{ title: 'ダークパターンなし', description: '偽のカウントダウン、「無料あと 2 回」、抜け出せない Cookie バナーは一切ありません。' }
			],

			techHeading: '技術スタック',
			techIntro: 'スタックの各要素は、読み込み速度、信頼性、そして小さなチームでの長期保守性のために選ばれました。',
			techParagraphs: [
				`フロントエンドは SvelteKit + TypeScript で構築し、Tailwind CSS でスタイリングし、Cloudflare Pages にデプロイしています。従来型のバックエンドはありません。ページはエッジでレンダリングされ、ツールロジックはブラウザで実行され、設定（テーマ・言語）はユーザー自身の localStorage に保存されます。ツールが外部 AI アシスタント用のプロンプトを生成する場合も、それをアシスタントへ持っていくのはユーザー自身です — 当社がテキストをインフラ経由で中継することはありません。`,
				`このアーキテクチャの実利は明確です。第一に、TTI は秒単位ではなく数十ミリ秒単位です。第二に、漏洩したり、差し押さえられたり、売られたりし得るユーザーテキストのデータベースがサーバー上に存在しません — そもそも存在しないからです。第三に、インフラコストが十分に低いため、有料プランを導入することなく ${SITE_NAME} を無期限に無料で維持できます。`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],

			aiHeading: 'AI の限界について、正直に',
			aiParagraphs: [
				`AI を扱うツールを作っている以上、AI にできないことを率直に伝える義務があります。大規模言語モデルは「もっともらしいテキスト」を生成するのであって、「真実のテキスト」を保証しません。事実を捏造し、存在しない出典を作り、慣用句を誤訳し、コンパイルは通るのに微妙に間違ったコードを出し、そのすべての失敗を完全な自信をもって行います。よく構造化されたプロンプト — まさに当ツールが作るのを手伝うもの — は出力品質を有意に高めますが、これらのリスクを消し去るわけではありません。`,
				`私たちの立場は単純です。AI の出力は下書きであって、成果物ではありません。翻訳は公開前にネイティブスピーカーに確認してもらってください。生成されたコードはリリース前に実行してテストしてください。重要な場面では、要約を元の文書と照らし合わせて事実確認してください。${SITE_NAME} の助けを借りて作られたいかなるものも、専門的・法的・医療的・金融的助言には当たらず、AI 出力を検証し使用する責任はユーザーにあります。これを脚注に埋めるのではなく、About ページで明言する道を選びました。`
			],

			privacyHeading: '入力テキストの扱い方',
			privacyParagraphs: [
				`${SITE_NAME} のツールに入力するすべてのもの — 要約したいテキスト、説明が必要なコード、メールの要点 — は、ユーザーの端末上で処理されます。当社サーバーへ送信されず、記録されず、保存されず、いかなるモデルの学習にも使われません。ツールが外部 AI アシスタント用のプロンプトを生成した場合、そのプロンプトはユーザーがコピーして別の場所に貼り付けるまで、ブラウザの中にだけ存在します。第三者の AI サービスに貼り付けた後は、そのサービスのプライバシーポリシーが適用されるため、機密性の高い内容ではアシスタントを慎重に選んでください。`,
				`当社が収集するのは、標準的な集計分析（ページビュー、国、デバイスタイプ）と、プライバシーポリシーに記載された広告 Cookie のみで、広告 Cookie は拒否できます。個人データを販売・共有することはありません。広告事業者の同意ルールが変更された場合は、同意の取り扱いを直ちに更新し、プライバシーポリシーのページに変更を明記します。`
			],

			contactHeading: 'お問い合わせ',
			contactIntro: 'ご質問、ご提案、フィードバックはありますか？すべてのメッセージに目を通しています。',
			contactPoints: [
				`一般のお問い合わせ・フィードバック: ${CONTACT_EMAIL}`,
				'不具合報告: ツール名、ブラウザと OS、再現手順を含めてください。',
				'ツールの提案: ボタン 1 つで済ませたい AI タスクを教えてください。実際のユースケースがロードマップを動かします。',
				'ビジネス・提携・広告: 件名に「Business」を含めてください。',
				'プライバシーに関する請求・法的通知: 件名に「Legal」を含めてください。'
			],

			legalHeading: '法的・運営者情報',
			legalNote: `${SITE_NAME} は、大韓民国の関係当局に登録された韓国法人 ${COMPANY_NAME} が運営しています（事業者登録番号 ${BUSINESS_NUMBER}）。`,

			linksHeading: '法的事項',
			linkPrivacy: 'プライバシーポリシー',
			linkTerms: '利用規約'
		},

		zh: {
			title: `关于 ${SITE_NAME}`,
			subtitle: '免费的 AI 写作与提示词工具 — 无需登录、没有推销，您的文本只留在您的设备上。',

			storyHeading: '运营故事',
			storyParagraphs: [
				`我创建 ${SITE_NAME}，是因为受够了如今网络上"免费 AI 工具"的真实含义。搜索一个免费 AI 翻译器或文本摘要工具，你总会落到这三种体验之一：还没输入一个字就冒出来的登录墙；用一次就开始纠缠你"升级解锁无限生成"的工具；最糟糕的是 —— 以悄悄收集你粘贴的文本为商业模式的网站。我自己也曾在没读隐私政策之前，把客户邮件、写了一半的博客草稿、公司代码片段粘进过那样的网站。大多数人都这样做。这就是问题所在。`,
				`我想要的东西简单得近乎可笑：一个页面，粘贴文本，按一个按钮，得到有用的结果。没有账号，没有额度计数器，没有"今日剩余 2 次免费使用"，没有挡在文本框前面的暗黑模式 Cookie 横幅。于是 2024 年我做出了 ${SITE_NAME} 的第一个版本 —— 只有一个输入框和一个按钮的提示词生成器 —— 之后每当我在自己的工作中遇到真实需求，就加一个工具：把产品本地化成四种语言时加了翻译提示工具，带新人时加了代码解释器，发现自己每周都在重写同样三封商务邮件时加了邮件写作器。`,
				`如今 ${SITE_NAME} 上有八个 AI 工具，每一个都遵循和第一个工具相同的规则：页面加载后两秒内必须可用，你的文本绝不在你不知情的情况下被发送到任何地方。我们的工具大多是提示词构建器 —— 它们根据你的输入和选项，组装出精心结构化、久经验证的提示词，你可以把它粘贴到 ChatGPT、Claude、Gemini 或任何你已在使用的 AI 助手中。摘要工具的提取逻辑完全在你的浏览器里运行。你输入的任何内容都不会被传输到我们的服务器、不会被记录、不会被存储。`,
				`我们靠展示广告维持运营，并且对此有明确的原则：广告密度远低于行业平均水平，绝不在你和你要用的工具之间放置广告。如果某个广告让工具变得难用，我们就挪走它或撤掉它。这是我们的承诺，也是 ${SITE_NAME} 能在没有"Pro 套餐"的情况下保持免费的原因。`
			],

			missionHeading: '使命',
			missionParagraphs: [
				`${SITE_NAME} 的存在，是为了让以写作、编程、翻译和内容创作为生的人更快、更省心地使用 AI。我们相信日常 AI 实用工具应当免费、即开即用、移动友好，并默认保护隐私。无论你是在火车上起草邮件、为客户方案构建图像提示词，还是想读懂一段陌生代码 —— 你都应该在几秒内得到有用的结果，而不是先走完一个注册流程。`,
				`我们用三个数字衡量自己：到结果的时间（目标：从冷加载到可用输出 3 秒以内）、到结果的点击数（目标：任务允许的最少次数）、留在我们服务器上的您的文本字节数（目标：0）。这个网站上的每一个设计决定，都是这三个数字的产物。`,
				`长期来看，使命比当前的工具目录更大。写好提示词正在迅速成为一种基本素养，就像二十年前的搜索技巧一样。我们希望当有人问"有没有能帮忙做这个的工具"时，同事推荐的就是 ${SITE_NAME} —— 而你点开链接时不会有一丝后悔。`
			],

			whoWeAreHeading: '运营信息',
			whoWeAreParagraphs: [
				`${SITE_NAME} 由 2025 年成立的韩国软件公司 ${COMPANY_NAME} 运营。我们的团队曾交付服务过数百万用户的消费者与开发者 Web 产品，并将同样的 UX、准确性与速度标准应用到本站的每一个工具上。`,
				`除 ${SITE_NAME} 外，同一团队还运营 SDK.is（开发者实用工具）、JavaScript.ac（交互式 JavaScript 学习）、SDK.bz（金融与加密计算器）和 SD.gy（日常计算器）。在一个站点学到的经验 —— 无障碍模式、性能预算、广告密度阈值 —— 会应用到所有站点。`
			],
			company: '公司',
			companyName: COMPANY_NAME,
			founded: '成立',
			foundedYear: '2024 年',
			focus: '专注领域',
			focusArea: 'AI 工具、提示词实用工具、免费网页工具',
			businessNumberLabel: '营业执照编号',
			businessNumberValue: BUSINESS_NUMBER,
			addressLabel: '地址',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `您能在 ${SITE_NAME} 上找到什么`,
			catalogIntro: `${SITE_NAME} 目前提供八个 AI 工具，全部免费、无需账号，所有输入都在您自己的设备上处理。`,
			catalogItems: [
				{ icon: '文A', title: 'AI 翻译器', description: '为十二种主要语言的任意组合构建精准、顾及上下文的翻译提示词。它给你的不是干巴巴的"翻译这个"，而是为保留语气、语域和格式而设计的提示词，能让 ChatGPT、Claude、Gemini 输出明显更好的译文。' },
				{ icon: 'TL;DR', title: '文本摘要', description: '将长文章、报告或会议记录压缩为关键句子。提取逻辑完全在浏览器中运行 —— 文档从不上传 —— 因此内部备忘录和机密草稿也可放心使用。' },
				{ icon: '>', title: 'AI 提示词生成器', description: '把粗略的想法（"写一篇产品发布文章"）变成包含角色、上下文、约束和输出格式的结构化提示词。随手写的提示词和结构化提示词的差别，通常就是"要重写"和"直接能用"的差别。' },
				{ icon: 'IMG', title: '图像提示词构建器', description: '根据你选择的主体、风格、光线、构图和氛围，组装出适用于 Midjourney、DALL·E 和 Stable Diffusion 的详细提示词。特别适合脑中有画面、却不知道图像模型想听什么的设计师。' },
				{ icon: '{ }', title: '代码解释器', description: '把任何代码片段包装成匹配你经验水平的解释提示词 —— 从"当我是编程新手来解释"到"给我一份资深工程师级别的评审"。支持所有常见语言，代码绝不外传。' },
				{ icon: '@', title: '邮件写作器', description: '根据目的、语气和几个要点生成专业邮件提示词。涵盖跟进、陌生开发、道歉、谈判，以及所有人发送前都要改五遍的那些邮件。' },
				{ icon: '#', title: '标签生成器', description: '根据主题和受众，为 Instagram、X、TikTok 和 LinkedIn 生成平台适配的话题标签提示词，在高曝光标签和细分标签之间取得平衡，而不是甩给你三十个泛泛的标签。' },
				{ icon: '✎', title: '写作助手', description: '一键生成改进、精简、扩写、正式化或简化任意文本段落的提示词。想只打磨一个段落、又不想向 AI 聊天从头解释全部上下文时，它是理想选择。' }
			],

			principlesHeading: '运营原则',
			principles: [
				{ title: '永久免费', description: '没有付费墙、没有高级版、没有生成额度。广告让工具对所有人保持免费。' },
				{ title: '您的文本属于您', description: '工具输入在您的设备上处理。我们不存储、不查看您输入的内容，也不用它训练模型。' },
				{ title: '永远无需登录', description: '没有账号、没有注册、不收集邮箱。打开页面即可开始工作。' },
				{ title: '默认快速', description: '基于 Cloudflare 全球边缘网络的亚秒级加载，桌面与移动端一致。' },
				{ title: '对 AI 保持诚实', description: 'AI 输出可能出错。在每一个重要的页面上，我们都直白地说明这一点。' },
				{ title: '杜绝暗黑模式', description: '没有虚假倒计时、没有"剩余 2 次免费"、没有让人出不去的 Cookie 横幅。' }
			],

			techHeading: '技术栈',
			techIntro: '技术栈的每一部分都是为了加载速度、可靠性以及小团队的长期可维护性而选择的。',
			techParagraphs: [
				`前端基于 SvelteKit + TypeScript 构建，使用 Tailwind CSS 设计样式，部署在 Cloudflare Pages 上。没有传统意义上的后端：页面在边缘节点渲染，工具逻辑在您的浏览器中运行，偏好设置（主题、语言）保存在您自己的 localStorage 里。当工具为外部 AI 助手生成提示词时，把提示词带去助手那里的是您本人 —— 我们绝不通过自己的基础设施中转您的文本。`,
				`这种架构给您带来的实际好处很明确。第一，TTI 以几十毫秒计，而不是以秒计。第二，服务器上不存在可能泄露、被调取或被出售的用户文本数据库 —— 因为它根本不存在。第三，基础设施成本足够低，让我们能在不引入付费套餐的前提下无限期保持 ${SITE_NAME} 免费。`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],

			aiHeading: '坦诚谈谈 AI 的局限',
			aiParagraphs: [
				`既然我们做的是与 AI 协作的工具，就有义务坦率说明 AI 做不到什么。大语言模型生成的是"听起来合理"的文本，而不是保证真实的文本。它们会编造事实、虚构引用、误译习语、产出能编译但暗藏错误的代码，并且在犯下所有这些错误时都带着十足的自信。结构良好的提示词 —— 正是我们的工具帮您构建的东西 —— 能显著提升输出质量，但无法消除这些风险。`,
				`我们的立场很简单：AI 输出是草稿，不是交付物。发布译文前请让母语者核对。上线生成的代码前请运行并测试。事关重大时，请把摘要与原文逐一核实。借助 ${SITE_NAME} 产生的任何内容都不构成专业、法律、医疗或财务建议，审核和使用 AI 输出的责任在于您。我们宁愿在"关于"页面把这些说清楚，也不愿把它埋进脚注里。`
			],

			privacyHeading: '我们如何处理您的文本',
			privacyParagraphs: [
				`您在 ${SITE_NAME} 工具中输入的一切 —— 要摘要的文本、要解释的代码、邮件要点 —— 都在您的设备上处理。它们不会传输到我们的服务器，不会被记录，不会被存储，也不会用于训练任何模型。当工具为外部 AI 助手生成提示词时，该提示词在您复制并粘贴到别处之前，只存在于您的浏览器中。粘贴到第三方 AI 服务之后的处理由该服务的隐私政策约束，因此涉及敏感材料时请谨慎选择您的助手。`,
				`我们收集的只有标准聚合分析数据（页面访问量、国家、设备类型）以及《隐私政策》中说明的广告 Cookie，后者可以拒绝。我们绝不出售或共享个人数据。如果广告服务商的同意规则发生变化，我们会立即更新同意处理方式，并在《隐私政策》页面注明变更。`
			],

			contactHeading: '联系我们',
			contactIntro: '有问题、建议或反馈吗？每一条消息我们都会阅读。',
			contactPoints: [
				`一般咨询与反馈：${CONTACT_EMAIL}`,
				'错误报告：请附上工具名称、浏览器与操作系统，以及重现步骤。',
				'工具建议：告诉我们您希望哪个 AI 任务能一键完成 —— 真实用例会推动我们的路线图。',
				'商务、合作与广告：请在邮件主题中注明 "Business"。',
				'隐私请求与法律通知：请在邮件主题中注明 "Legal"。'
			],

			legalHeading: '法律与运营者信息',
			legalNote: `${SITE_NAME} 由在大韩民国有关当局注册的韩国法人 ${COMPANY_NAME} 运营（营业执照编号 ${BUSINESS_NUMBER}）。`,

			linksHeading: '法律信息',
			linkPrivacy: '隐私政策',
			linkTerms: '服务条款'
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - {SITE_NAME}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="text-center mb-16">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-4">{t.title}</h1>
		<p class="text-xl text-primary-500 dark:text-primary-400">{t.subtitle}</p>
	</div>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.storyHeading}</h2>
		{#each t.storyParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.missionHeading}</h2>
		{#each t.missionParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.whoWeAreHeading}</h2>
		{#each t.whoWeAreParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
		<dl class="grid sm:grid-cols-2 gap-4 bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 mt-6">
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.company}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.companyName}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.founded}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.foundedYear}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.focus}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.focusArea}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.businessNumberLabel}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.businessNumberValue}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.addressLabel}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.addressValue}</dd>
			</div>
		</dl>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.catalogHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-8">{t.catalogIntro}</p>
		<div class="grid md:grid-cols-2 gap-6">
			{#each t.catalogItems as item}
				<div class="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
					<div class="text-xl font-bold text-primary-500 mb-3">{item.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">{item.title}</h3>
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{item.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-8">{t.principlesHeading}</h2>
		<div class="space-y-4">
			{#each t.principles as principle}
				<div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-5 border-l-4 border-primary-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-1">{principle.title}</h3>
					<p class="text-gray-600 dark:text-dark-400">{principle.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.techHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-4">{t.techIntro}</p>
		{#each t.techParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
		<div class="flex flex-wrap gap-3 mt-6">
			{#each t.techStack as tech}
				<span class="bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-dark-200 px-4 py-2 rounded-full text-sm">{tech}</span>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.aiHeading}</h2>
		{#each t.aiParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacyHeading}</h2>
		{#each t.privacyParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contactHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-4">{t.contactIntro}</p>
		<ul class="text-gray-700 dark:text-dark-300 leading-relaxed list-disc pl-6 space-y-2 mb-6">
			{#each t.contactPoints as point}
				<li>{point}</li>
			{/each}
		</ul>
		<a
			href="mailto:{CONTACT_EMAIL}"
			class="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700 rounded-lg px-6 py-3 text-gray-800 dark:text-dark-200 transition-colors"
		>
			{CONTACT_EMAIL}
		</a>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.legalHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.legalNote}</p>
	</section>

	<section class="pt-8 border-t border-gray-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.linksHeading}</h2>
		<div class="flex gap-6">
			<a href="/{lang}/privacy" class="text-primary-500 hover:text-primary-400 transition-colors">{t.linkPrivacy}</a>
			<a href="/{lang}/terms" class="text-primary-500 hover:text-primary-400 transition-colors">{t.linkTerms}</a>
		</div>
	</section>
</div>
