<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SDK.ac';
	const SITE_DOMAIN = 'sdk.ac';
	const CONTACT_EMAIL = 'contact@sdk.ac';
	const COMPANY_NAME = 'SDK Co., Ltd.';
	const BUSINESS_NUMBER = '871-81-03242';
	const ECOMMERCE_NUMBER = '2024-고양일산서-1820';
	const COMPANY_ADDRESS = '제주특별자치도 제주시 남성로 127, 4층';
	const COMPANY_ADDRESS_EN = '4F, 127 Namseong-ro, Jeju-si, Jeju Special Self-Governing Province, Republic of Korea';

	type ContactContent = {
		title: string;
		subtitle: string;
		emailHeading: string;
		emailIntro: string;
		email: string;
		responseHeading: string;
		responseParagraphs: string[];
		topicsHeading: string;
		topicsIntro: string;
		topics: { tag: string; title: string; description: string }[];
		beforeYouEmailHeading: string;
		beforeYouEmailIntro: string;
		beforeYouEmail: { q: string; a: string }[];
		whatNotToEmailHeading: string;
		whatNotToEmail: string[];
		companyHeading: string;
		companyParagraphs: string[];
		companyDetails: { label: string; value: string }[];
		languagesHeading: string;
		languagesText: string;
	};

	const content: Partial<Record<Locale, ContactContent>> & { en: ContactContent } = {
		en: {
			title: 'Contact Us',
			subtitle: `We read every message. Whether you found a bug in a tool, want a new AI utility, or need to reach us about privacy or business — write to us and we will write back.`,
			emailHeading: 'Email Us',
			emailIntro: 'The fastest way to reach a real human on our team is e-mail. Please use the address below.',
			email: CONTACT_EMAIL,
			responseHeading: 'Response Time and Hours',
			responseParagraphs: [
				`We aim to acknowledge every message within 24 hours on business days (Monday through Friday, 09:00–18:00 Korea Standard Time, excluding Korean public holidays). Substantive replies typically take 24–48 hours, depending on how much investigation is required.`,
				`If your message is time-sensitive — a tool producing broken output for everyone, a press deadline, or a legal notice — please add "URGENT" to your subject line and we will move it to the top of the queue.`,
				`Messages received during weekends and holidays are queued and answered on the next business day. We are a small, sustainable team, and that is part of why we can keep ${SITE_NAME} free.`
			],
			topicsHeading: 'Pick the Right Topic',
			topicsIntro: 'A clear subject line gets you a faster, more accurate reply. These topics get routed automatically:',
			topics: [
				{ tag: '[BUG]', title: 'Bug Reports', description: `Something is broken — a tool produces garbled output, an option does nothing, a page will not load, or copy-to-clipboard fails. Please include the tool name, your exact inputs and selected options, your browser and version, your operating system, and what you expected to happen. A screenshot helps enormously.` },
				{ tag: '[FEATURE]', title: 'Feature & Tool Requests', description: `You wish a specific AI task had a one-button tool — a new tone for the email writer, another platform for the hashtag generator, or an entirely new tool. Describe the use case in a sentence or two; real workflows beat one-word requests by a wide margin.` },
				{ tag: '[BUSINESS]', title: 'Business & Advertising', description: `You represent an organisation interested in advertising, sponsorship, or a commercial partnership with ${SITE_NAME}. Include your organisation, what you have in mind, and any timing constraints. We are selective but open.` },
				{ tag: '[PRESS]', title: 'Press / Media', description: `You are a journalist, podcaster, or analyst working on a piece that involves ${SITE_NAME}, free AI tools, or our team. Include your outlet, deadline, and angle.` },
				{ tag: '[LEGAL]', title: 'Privacy & Legal Requests', description: 'GDPR or PIPA data-subject requests, privacy questions, takedown requests, DMCA notices, or court orders. We respond in writing only and route these to our designated privacy officer. See the Privacy Policy for formal details.' },
				{ tag: '[TAKEDOWN]', title: 'Content Takedown', description: 'You believe content on this site (a blog post, a guide, an example) infringes your rights. Include the exact URL, the material at issue, the right you hold, and your contact details. We review every notice and act promptly on valid ones.' },
				{ tag: '[FEEDBACK]', title: 'General Feedback', description: 'You like the site, you do not, a tool saved your afternoon or wasted it — all of it is welcome. Critical feedback is the highest-value input we get.' }
			],

			beforeYouEmailHeading: 'Before You Email Us',
			beforeYouEmailIntro: 'Some common questions are answered faster right here. Please skim these first:',
			beforeYouEmail: [
				{ q: 'Is my text sent to your servers when I use a tool?', a: 'No. Every tool processes your input in your browser. Text you type never reaches our servers, is never logged, and is never stored. See the Privacy Policy for full details.' },
				{ q: 'Do I need an account or API key to use the tools?', a: 'No. Every tool works immediately, with no signup, no login, and no API key. That is the whole point of the site.' },
				{ q: 'The tool gave me a prompt, not a finished result. Why?', a: 'Most of our tools are prompt builders: they assemble a carefully structured prompt that you paste into the AI assistant you already use (ChatGPT, Claude, Gemini, etc.). This keeps your text on your device and lets you use whichever model you trust.' },
				{ q: 'Can I use outputs commercially?', a: 'Yes. Prompts and text you create with our tools are yours to use for personal or commercial purposes. Note that content generated by third-party AI services is governed by their terms too.' },
				{ q: 'Why are there ads on the site?', a: `Display ads pay for hosting, development, and translation review. Without them ${SITE_NAME} would not exist as a free service. We keep ad density well below the industry average.` },
				{ q: 'Can I turn off personalised ads?', a: 'Yes. Visit https://www.google.com/settings/ads to opt out of personalised advertising from Google, or use the consent banner shown on your first visit from the EU, UK, or Korea.' },
				{ q: 'How do I delete data the site has stored?', a: 'The only data stored is preferences (theme, language) in your own browser localStorage. Clear your browser’s site data for our domain and it is gone. There is nothing on our side to delete.' },
				{ q: 'A translation on the site is wrong or awkward. Where do I report it?', a: 'Email us with [BUG] in the subject and the exact page URL and language. We review every localisation report with native speakers.' },
				{ q: 'Do you have an API I can call from my own app?', a: 'Not currently. If there is meaningful demand for a programmatic API for a particular tool, email us with [FEATURE] and tell us about your use case.' },
				{ q: 'Will you add support for my language?', a: 'The interface currently ships in English, Korean, Japanese, and Chinese, with more languages progressively rolling out. If you are willing to help review translations for your language, mention it in your email.' }
			],

			whatNotToEmailHeading: `Please Don't Email Us For…`,
			whatNotToEmail: [
				`Requests to generate content for you — the tools on the site do that, and we cannot run prompts on your behalf.`,
				'Cryptocurrency / NFT / token offers. Auto-deleted.',
				'SEO outreach asking for backlinks in exchange for "high-quality content." Auto-deleted.',
				'Generic mass mailings sent to every AI site you found — we can tell.'
			],

			companyHeading: 'Company Information',
			companyParagraphs: [
				`${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean software company. The legal information below is required by Korean e-commerce regulations and is provided for transparency.`
			],
			companyDetails: [
				{ label: 'Operator', value: COMPANY_NAME },
				{ label: 'Business Registration Number', value: BUSINESS_NUMBER },
				{ label: 'E-Commerce Registration Number', value: ECOMMERCE_NUMBER },
				{ label: 'Address', value: COMPANY_ADDRESS_EN },
				{ label: 'Address (Korean)', value: COMPANY_ADDRESS },
				{ label: 'Contact', value: CONTACT_EMAIL },
				{ label: 'Website', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: 'Languages',
			languagesText: 'You can write to us in English or Korean. We can also read Japanese and Chinese, though replies in those languages may take a little longer while we review them.'
		},

		ko: {
			title: '문의하기',
			subtitle: `모든 메시지를 읽습니다. 도구에서 버그를 발견했든, 새 AI 유틸리티를 원하든, 개인정보나 비즈니스 관련 연락이 필요하든 — 보내주시면 답장드립니다.`,
			emailHeading: '이메일 보내기',
			emailIntro: '우리 팀의 실제 사람에게 닿는 가장 빠른 방법은 이메일입니다. 아래 주소를 사용해 주세요.',
			email: CONTACT_EMAIL,
			responseHeading: '응답 시간과 운영 시간',
			responseParagraphs: [
				`영업일 기준(월–금, 한국 표준시 09:00–18:00, 한국 공휴일 제외) 24시간 이내에 모든 메시지의 수신을 확인하는 것을 목표로 합니다. 실질적인 답변은 조사가 얼마나 필요한지에 따라 보통 24–48시간이 걸립니다.`,
				`시간이 급한 사안 — 모두에게 잘못된 출력을 내는 도구, 보도 마감, 법적 고지 — 이라면 제목에 "URGENT"를 추가해 주세요. 대기열 맨 앞으로 옮기겠습니다.`,
				`주말·공휴일에 받은 메시지는 대기열에 쌓였다가 다음 영업일에 답변됩니다. 우리는 작고 지속 가능한 팀이며, 그것이 ${SITE_NAME}를 무료로 유지할 수 있는 이유 중 하나입니다.`
			],
			topicsHeading: '알맞은 주제 고르기',
			topicsIntro: '명확한 제목이 더 빠르고 정확한 답변으로 이어집니다. 다음 주제들은 자동으로 분류됩니다:',
			topics: [
				{ tag: '[BUG]', title: '버그 신고', description: '무언가 고장났습니다 — 도구가 깨진 출력을 내거나, 옵션이 동작하지 않거나, 페이지가 로드되지 않거나, 클립보드 복사가 실패합니다. 도구 이름, 정확한 입력과 선택한 옵션, 브라우저와 버전, 운영체제, 기대했던 동작을 포함해 주세요. 스크린샷이 큰 도움이 됩니다.' },
				{ tag: '[FEATURE]', title: '기능·도구 제안', description: '특정 AI 작업이 버튼 하나로 되면 좋겠다고 생각하시나요 — 이메일 작성기의 새 어조, 해시태그 생성기의 다른 플랫폼, 혹은 완전히 새로운 도구. 사용 사례를 한두 문장으로 설명해 주세요. 실제 워크플로가 한 단어짜리 요청보다 훨씬 힘이 셉니다.' },
				{ tag: '[BUSINESS]', title: '비즈니스·광고', description: `${SITE_NAME}와의 광고, 스폰서십, 상업적 파트너십에 관심 있는 조직을 대표하시나요? 조직명, 구상하시는 내용, 일정 제약을 포함해 주세요. 우리는 선별적이지만 열려 있습니다.` },
				{ tag: '[PRESS]', title: '보도·미디어', description: `${SITE_NAME}, 무료 AI 도구, 또는 우리 팀에 관한 기사를 쓰는 기자, 팟캐스터, 애널리스트라면 매체명, 마감일, 취재 각도를 알려주세요.` },
				{ tag: '[LEGAL]', title: '개인정보·법적 요청', description: 'GDPR·개인정보보호법상 정보주체 요청, 개인정보 질문, 게시중단 요청, DMCA 통지, 법원 명령. 서면으로만 답변하며 지정된 개인정보 보호책임자에게 전달됩니다. 공식 정보는 개인정보처리방침을 참조하세요.' },
				{ tag: '[TAKEDOWN]', title: '콘텐츠 게시중단', description: '이 사이트의 콘텐츠(블로그 글, 가이드, 예시)가 귀하의 권리를 침해한다고 판단되면 정확한 URL, 문제가 되는 자료, 보유한 권리, 연락처를 포함해 주세요. 모든 통지를 검토하고 유효한 통지에는 신속히 조치합니다.' },
				{ tag: '[FEEDBACK]', title: '일반 피드백', description: '사이트가 좋든, 싫든, 도구가 오후를 구했든 낭비했든 — 모두 환영합니다. 비판적 피드백은 우리가 받는 가장 가치 있는 입력입니다.' }
			],

			beforeYouEmailHeading: '이메일 보내기 전에',
			beforeYouEmailIntro: '자주 묻는 질문들은 여기서 더 빨리 답을 찾을 수 있습니다. 먼저 훑어봐 주세요:',
			beforeYouEmail: [
				{ q: '도구를 쓰면 제 텍스트가 서버로 전송되나요?', a: '아니요. 모든 도구는 입력을 브라우저에서 처리합니다. 입력한 텍스트는 우리 서버에 도달하지 않고, 기록되지 않으며, 저장되지 않습니다. 자세한 내용은 개인정보처리방침을 참조하세요.' },
				{ q: '도구를 쓰려면 계정이나 API 키가 필요한가요?', a: '아니요. 모든 도구는 가입, 로그인, API 키 없이 즉시 작동합니다. 그것이 이 사이트의 존재 이유입니다.' },
				{ q: '도구가 완성된 결과가 아니라 프롬프트를 줬어요. 왜죠?', a: '도구 대부분은 프롬프트 빌더입니다. 정교하게 구조화된 프롬프트를 조립해 주면, 이미 쓰고 계신 AI 어시스턴트(ChatGPT, Claude, Gemini 등)에 붙여넣으시면 됩니다. 이 방식은 텍스트를 기기 안에 두면서 신뢰하는 모델을 자유롭게 선택할 수 있게 합니다.' },
				{ q: '결과물을 상업적으로 사용할 수 있나요?', a: '네. 도구로 만든 프롬프트와 텍스트는 개인적·상업적 목적으로 자유롭게 사용할 수 있습니다. 다만 제3자 AI 서비스가 생성한 콘텐츠에는 해당 서비스의 약관도 적용됩니다.' },
				{ q: '사이트에 광고가 있는 이유는?', a: `디스플레이 광고가 호스팅, 개발, 번역 검수 비용을 부담합니다. 광고가 없다면 ${SITE_NAME}는 무료 서비스로 존재할 수 없습니다. 광고 밀도는 업계 평균보다 훨씬 낮게 유지합니다.` },
				{ q: '맞춤형 광고를 끌 수 있나요?', a: '네. https://www.google.com/settings/ads 에서 Google 맞춤형 광고를 거부하거나, EU·영국·한국에서 처음 방문할 때 표시되는 동의 배너를 이용하세요.' },
				{ q: '사이트가 저장한 데이터를 삭제하려면?', a: '저장되는 데이터는 이용자 본인 브라우저 localStorage의 환경설정(테마, 언어)뿐입니다. 브라우저에서 우리 도메인의 사이트 데이터를 지우면 끝입니다. 우리 쪽에는 삭제할 것이 없습니다.' },
				{ q: '사이트의 번역이 틀리거나 어색해요. 어디에 신고하나요?', a: '제목에 [BUG]를 넣고 정확한 페이지 URL과 언어를 적어 이메일 주세요. 모든 현지화 신고는 원어민과 함께 검토합니다.' },
				{ q: '제 앱에서 호출할 수 있는 API가 있나요?', a: '현재는 없습니다. 특정 도구의 프로그래매틱 API에 의미 있는 수요가 있다면 [FEATURE]로 사용 사례와 함께 알려주세요.' },
				{ q: '제 언어 지원을 추가해 줄 수 있나요?', a: '인터페이스는 현재 영어, 한국어, 일본어, 중국어로 제공되며 더 많은 언어가 순차적으로 추가되고 있습니다. 번역 검수를 도와주실 수 있다면 이메일에 언급해 주세요.' }
			],

			whatNotToEmailHeading: '이런 이메일은 삼가 주세요…',
			whatNotToEmail: [
				'콘텐츠를 대신 생성해 달라는 요청 — 그것은 사이트의 도구가 하는 일이며, 우리가 대신 프롬프트를 실행해 드릴 수는 없습니다.',
				'암호화폐 / NFT / 토큰 제안. 자동 삭제됩니다.',
				'"고품질 콘텐츠"를 대가로 백링크를 요구하는 SEO 아웃리치. 자동 삭제됩니다.',
				'찾아낸 모든 AI 사이트에 뿌리는 대량 메일 — 티가 납니다.'
			],

			companyHeading: '회사 정보',
			companyParagraphs: [
				`${SITE_NAME}는 한국 소프트웨어 회사 ${COMPANY_NAME}이 운영합니다. 아래 법적 정보는 한국 전자상거래 규정에 따라 요구되며 투명성을 위해 제공됩니다.`
			],
			companyDetails: [
				{ label: '운영자', value: COMPANY_NAME },
				{ label: '사업자등록번호', value: BUSINESS_NUMBER },
				{ label: '통신판매업 신고번호', value: ECOMMERCE_NUMBER },
				{ label: '주소', value: COMPANY_ADDRESS },
				{ label: '주소 (영문)', value: COMPANY_ADDRESS_EN },
				{ label: '연락처', value: CONTACT_EMAIL },
				{ label: '웹사이트', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '사용 언어',
			languagesText: '영어 또는 한국어로 보내주시면 됩니다. 일본어와 중국어도 읽을 수 있으나, 해당 언어로의 답변은 검수 과정 때문에 조금 더 걸릴 수 있습니다.'
		},

		ja: {
			title: 'お問い合わせ',
			subtitle: `すべてのメッセージに目を通しています。ツールの不具合を見つけた、新しい AI ユーティリティが欲しい、プライバシーやビジネスの件で連絡したい — どんな内容でも、お送りいただければ必ず返信します。`,
			emailHeading: 'メールを送る',
			emailIntro: '当チームの生身の人間に届く最速の方法はメールです。以下のアドレスをご利用ください。',
			email: CONTACT_EMAIL,
			responseHeading: '返信時間と営業時間',
			responseParagraphs: [
				`営業日（月〜金、韓国標準時 09:00–18:00、韓国の祝日を除く）には、24 時間以内にすべてのメッセージの受領確認を行うことを目標としています。実質的な回答は、必要な調査の量に応じて通常 24〜48 時間かかります。`,
				`急を要する内容 — 全員に壊れた出力を返すツール、報道の締め切り、法的通知など — の場合は、件名に「URGENT」を追加してください。キューの先頭に移動します。`,
				`週末・祝日に受信したメッセージはキューに入り、翌営業日に回答されます。私たちは小さく持続可能なチームであり、それが ${SITE_NAME} を無料に保てる理由の一つです。`
			],
			topicsHeading: '適切なトピックを選ぶ',
			topicsIntro: '明確な件名は、より速く正確な返信につながります。以下のトピックは自動的に振り分けられます:',
			topics: [
				{ tag: '[BUG]', title: '不具合報告', description: '何かが壊れています — ツールが乱れた出力を返す、オプションが機能しない、ページが読み込めない、クリップボードへのコピーが失敗する。ツール名、正確な入力と選択したオプション、ブラウザとバージョン、OS、期待した動作を含めてください。スクリーンショットが大いに役立ちます。' },
				{ tag: '[FEATURE]', title: '機能・ツールのリクエスト', description: '特定の AI タスクがボタン 1 つでできたら、と思いませんか — メール作成の新しいトーン、ハッシュタグ生成の別プラットフォーム対応、あるいは全く新しいツール。ユースケースを一、二文で説明してください。実際のワークフローは一言のリクエストよりはるかに説得力があります。' },
				{ tag: '[BUSINESS]', title: 'ビジネス・広告', description: `${SITE_NAME} への広告出稿、スポンサーシップ、商業的パートナーシップに関心のある組織を代表されている場合は、組織名、構想、スケジュール上の制約をお知らせください。選別は行いますが、扉は開いています。` },
				{ tag: '[PRESS]', title: '報道・メディア', description: `${SITE_NAME}、無料 AI ツール、または当チームに関する記事を執筆中のジャーナリスト、ポッドキャスター、アナリストの方は、媒体名、締め切り、切り口をお知らせください。` },
				{ tag: '[LEGAL]', title: 'プライバシー・法的請求', description: 'GDPR や韓国個人情報保護法に基づくデータ主体の請求、プライバシーに関する質問、掲載停止請求、DMCA 通知、裁判所命令。書面でのみ回答し、指定の個人情報保護責任者に転送されます。正式な詳細はプライバシーポリシーをご覧ください。' },
				{ tag: '[TAKEDOWN]', title: 'コンテンツの削除請求', description: 'このサイトのコンテンツ（ブログ記事、ガイド、例文）があなたの権利を侵害しているとお考えの場合は、正確な URL、問題となる素材、保有する権利、連絡先を含めてください。すべての通知を審査し、有効なものには速やかに対応します。' },
				{ tag: '[FEEDBACK]', title: '一般的なフィードバック', description: 'サイトが好き、嫌い、ツールに午後を救われた、無駄にされた — すべて歓迎します。批判的なフィードバックこそ、私たちが受け取る最も価値ある入力です。' }
			],

			beforeYouEmailHeading: 'メールを送る前に',
			beforeYouEmailIntro: 'よくある質問はここで先に答えが見つかります。まずご一読ください:',
			beforeYouEmail: [
				{ q: 'ツールを使うと、テキストはサーバーに送信されますか？', a: 'いいえ。すべてのツールは入力をブラウザ内で処理します。入力したテキストが当社サーバーに届くことはなく、記録も保存もされません。詳細はプライバシーポリシーをご覧ください。' },
				{ q: 'ツールの利用にアカウントや API キーは必要ですか？', a: 'いいえ。すべてのツールは登録・ログイン・API キーなしで即座に使えます。それこそがこのサイトの存在意義です。' },
				{ q: 'ツールが完成した結果ではなくプロンプトを出しました。なぜ？', a: '当サイトのツールの多くはプロンプトビルダーです。丁寧に構造化されたプロンプトを組み立てるので、それをお使いの AI アシスタント（ChatGPT、Claude、Gemini など）に貼り付けてください。この方式ならテキストは端末内に留まり、信頼するモデルを自由に選べます。' },
				{ q: '出力を商用利用できますか？', a: 'はい。ツールで作成したプロンプトやテキストは、個人・商用を問わず自由に使えます。ただし、第三者の AI サービスが生成したコンテンツには、そのサービスの規約も適用されます。' },
				{ q: 'なぜサイトに広告があるのですか？', a: `ディスプレイ広告がホスティング、開発、翻訳レビューの費用を負担しています。広告がなければ ${SITE_NAME} は無料サービスとして存在できません。広告密度は業界平均よりはるかに低く保っています。` },
				{ q: 'パーソナライズ広告をオフにできますか？', a: 'はい。https://www.google.com/settings/ads で Google のパーソナライズ広告をオプトアウトするか、EU・英国・韓国からの初回訪問時に表示される同意バナーをご利用ください。' },
				{ q: 'サイトが保存したデータを削除するには？', a: '保存されるデータは、あなた自身のブラウザの localStorage にある設定（テーマ、言語）だけです。ブラウザで当ドメインのサイトデータを消去すれば完了です。当社側に削除すべきものはありません。' },
				{ q: 'サイトの翻訳が間違っている・不自然です。どこに報告すれば？', a: '件名に [BUG] を入れ、正確なページ URL と言語を添えてメールしてください。すべてのローカライズ報告はネイティブスピーカーと共にレビューします。' },
				{ q: '自分のアプリから呼べる API はありますか？', a: '現在はありません。特定のツールのプログラマティック API に有意義な需要があれば、[FEATURE] でユースケースと共にお知らせください。' },
				{ q: '私の言語のサポートを追加してくれますか？', a: 'インターフェースは現在、英語、韓国語、日本語、中国語で提供されており、さらに多くの言語を順次展開中です。あなたの言語の翻訳レビューを手伝っていただける場合は、メールにその旨をお書きください。' }
			],

			whatNotToEmailHeading: 'こんなメールはご遠慮ください…',
			whatNotToEmail: [
				'コンテンツの代理生成の依頼 — それはサイト上のツールの仕事であり、私たちが代わりにプロンプトを実行することはできません。',
				'暗号資産 / NFT / トークンの勧誘。自動削除されます。',
				'「高品質コンテンツ」と引き換えにバックリンクを求める SEO 営業。自動削除されます。',
				'見つけたすべての AI サイトに送る一斉メール — 分かります。'
			],

			companyHeading: '会社情報',
			companyParagraphs: [
				`${SITE_NAME} は韓国のソフトウェア会社 ${COMPANY_NAME} が運営しています。以下の法的情報は韓国の電子商取引規制により要求されるもので、透明性のために掲載しています。`
			],
			companyDetails: [
				{ label: '運営者', value: COMPANY_NAME },
				{ label: '事業者登録番号', value: BUSINESS_NUMBER },
				{ label: '通信販売業申告番号', value: ECOMMERCE_NUMBER },
				{ label: '住所', value: COMPANY_ADDRESS },
				{ label: '住所（英語）', value: COMPANY_ADDRESS_EN },
				{ label: '連絡先', value: CONTACT_EMAIL },
				{ label: 'ウェブサイト', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '対応言語',
			languagesText: '英語または韓国語でお書きください。日本語と中国語も読めますが、それらの言語での返信はレビューのため少し時間がかかる場合があります。'
		},

		zh: {
			title: '联系我们',
			subtitle: `每一条消息我们都会阅读。无论您发现了工具的错误、想要新的 AI 实用工具，还是需要就隐私或商务事宜与我们联系 —— 写信给我们，我们一定会回复。`,
			emailHeading: '给我们发邮件',
			emailIntro: '联系到我们团队真人的最快方式是电子邮件。请使用以下地址。',
			email: CONTACT_EMAIL,
			responseHeading: '响应时间与工作时间',
			responseParagraphs: [
				`在工作日（周一至周五，韩国标准时间 09:00–18:00，韩国公共假日除外），我们的目标是在 24 小时内确认收到每条消息。实质性回复通常需要 24–48 小时，取决于需要多少调查。`,
				`如果您的消息时间紧迫 —— 某个工具对所有人输出错误、媒体截稿、或法律通知 —— 请在主题中加上"URGENT"，我们会将其移到队列最前面。`,
				`周末和节假日收到的消息会进入队列，并在下一个工作日回复。我们是一个小而可持续的团队，这也是 ${SITE_NAME} 能保持免费的原因之一。`
			],
			topicsHeading: '选对主题',
			topicsIntro: '清晰的主题行能让您更快得到更准确的回复。以下主题会被自动分流:',
			topics: [
				{ tag: '[BUG]', title: '错误报告', description: '有东西坏了 —— 工具输出乱码、某个选项不起作用、页面无法加载、或复制到剪贴板失败。请附上工具名称、您的确切输入和所选选项、浏览器及版本、操作系统，以及您期望的结果。截图会有极大帮助。' },
				{ tag: '[FEATURE]', title: '功能与工具请求', description: '您希望某个 AI 任务能一键完成 —— 邮件写作器的新语气、标签生成器支持新平台、或一个全新的工具。请用一两句话描述使用场景；真实的工作流程远比一个词的请求更有说服力。' },
				{ tag: '[BUSINESS]', title: '商务与广告', description: `您代表的组织对在 ${SITE_NAME} 投放广告、赞助或商业合作感兴趣？请附上组织名称、您的构想以及时间安排上的限制。我们有所筛选，但保持开放。` },
				{ tag: '[PRESS]', title: '媒体与报道', description: `您是正在撰写涉及 ${SITE_NAME}、免费 AI 工具或我们团队的报道的记者、播客主持人或分析师？请附上媒体名称、截稿日期和报道角度。` },
				{ tag: '[LEGAL]', title: '隐私与法律请求', description: 'GDPR 或韩国《个人信息保护法》下的数据主体请求、隐私问题、下架请求、DMCA 通知或法院命令。我们仅以书面形式回复，并转交指定的个人信息保护负责人。正式信息请参阅《隐私政策》。' },
				{ tag: '[TAKEDOWN]', title: '内容下架', description: '如果您认为本站内容（博客文章、指南、示例）侵犯了您的权利，请附上确切 URL、涉事材料、您持有的权利以及联系方式。我们会审查每一份通知，并对有效通知及时处理。' },
				{ tag: '[FEEDBACK]', title: '一般反馈', description: '您喜欢这个网站、不喜欢、某个工具拯救了您的下午或浪费了它 —— 都欢迎告诉我们。批评性反馈是我们收到的最有价值的输入。' }
			],

			beforeYouEmailHeading: '发邮件之前',
			beforeYouEmailIntro: '一些常见问题在这里能更快找到答案。请先浏览:',
			beforeYouEmail: [
				{ q: '使用工具时，我的文本会被发送到你们的服务器吗？', a: '不会。每个工具都在您的浏览器中处理输入。您输入的文本不会到达我们的服务器，不会被记录，也不会被存储。详情请参阅《隐私政策》。' },
				{ q: '使用工具需要账号或 API 密钥吗？', a: '不需要。所有工具无需注册、登录或 API 密钥即可立即使用。这正是本站存在的意义。' },
				{ q: '工具给我的是提示词，而不是成品结果。为什么？', a: '我们的大多数工具是提示词构建器：它们组装出精心结构化的提示词，供您粘贴到您已在使用的 AI 助手（ChatGPT、Claude、Gemini 等）中。这样您的文本留在自己的设备上，还能自由选择您信任的模型。' },
				{ q: '可以将输出用于商业用途吗？', a: '可以。您用我们的工具创建的提示词和文本可自由用于个人或商业目的。请注意，第三方 AI 服务生成的内容还受其服务条款约束。' },
				{ q: '网站上为什么有广告？', a: `展示广告支付了托管、开发和翻译审校的费用。没有广告，${SITE_NAME} 就无法作为免费服务存在。我们的广告密度远低于行业平均水平。` },
				{ q: '可以关闭个性化广告吗？', a: '可以。访问 https://www.google.com/settings/ads 退出 Google 的个性化广告，或使用您从欧盟、英国或韩国首次访问时显示的同意横幅。' },
				{ q: '如何删除网站存储的数据？', a: '唯一存储的数据是您自己浏览器 localStorage 中的偏好设置（主题、语言）。清除浏览器中本域名的站点数据即可。我们这边没有任何需要删除的东西。' },
				{ q: '网站上的某个翻译有误或不通顺，去哪里报告？', a: '请在主题中加 [BUG]，并附上确切的页面 URL 和语言发邮件给我们。所有本地化报告都会与母语者一起审查。' },
				{ q: '有可以从我自己的应用调用的 API 吗？', a: '目前没有。如果某个工具的程序化 API 有切实需求，请以 [FEATURE] 为主题告诉我们您的使用场景。' },
				{ q: '会增加对我的语言的支持吗？', a: '界面目前提供英语、韩语、日语和中文，更多语言正在逐步推出。如果您愿意帮助审校您语言的翻译，请在邮件中说明。' }
			],

			whatNotToEmailHeading: '请不要为这些事发邮件…',
			whatNotToEmail: [
				'请求我们代为生成内容 —— 那是网站上工具的工作，我们无法替您运行提示词。',
				'加密货币 / NFT / 代币推销。自动删除。',
				'以"高质量内容"换取外链的 SEO 推广。自动删除。',
				'群发给每一个 AI 网站的模板邮件 —— 我们看得出来。'
			],

			companyHeading: '公司信息',
			companyParagraphs: [
				`${SITE_NAME} 由韩国软件公司 ${COMPANY_NAME} 运营。以下法律信息为韩国电子商务法规所要求，出于透明度考虑在此公示。`
			],
			companyDetails: [
				{ label: '运营者', value: COMPANY_NAME },
				{ label: '营业执照编号', value: BUSINESS_NUMBER },
				{ label: '电子商务备案编号', value: ECOMMERCE_NUMBER },
				{ label: '地址', value: COMPANY_ADDRESS },
				{ label: '地址（英文）', value: COMPANY_ADDRESS_EN },
				{ label: '联系方式', value: CONTACT_EMAIL },
				{ label: '网站', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '语言',
			languagesText: '您可以用英语或韩语给我们写信。我们也能阅读日语和中文，但以这些语言回复可能需要稍长时间进行核对。'
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
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-3">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{t.subtitle}</p>
	</div>

	<section class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 mb-8 text-center">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">{t.emailHeading}</h2>
		<p class="text-gray-600 dark:text-dark-400 mb-4">{t.emailIntro}</p>
		<a href="mailto:{t.email}" class="inline-block text-primary-500 hover:text-primary-400 font-semibold text-lg">{t.email}</a>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.responseHeading}</h2>
		{#each t.responseParagraphs as p}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-3">{p}</p>
		{/each}
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.topicsHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-6">{t.topicsIntro}</p>
		<div class="space-y-4">
			{#each t.topics as topic}
				<div class="bg-white dark:bg-dark-800 p-5 rounded-2xl border border-gray-200 dark:border-dark-700">
					<div class="flex items-baseline gap-3 mb-2">
						<code class="text-primary-500 font-mono text-sm">{topic.tag}</code>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100">{topic.title}</h3>
					</div>
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{topic.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.beforeYouEmailHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-6">{t.beforeYouEmailIntro}</p>
		<div class="space-y-3">
			{#each t.beforeYouEmail as item}
				<details class="group bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700">
					<summary class="cursor-pointer p-4 font-semibold text-gray-900 dark:text-dark-100">{item.q}</summary>
					<p class="px-4 pb-4 text-gray-600 dark:text-dark-400 leading-relaxed">{item.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.whatNotToEmailHeading}</h2>
		<ul class="list-disc pl-6 text-gray-700 dark:text-dark-300 space-y-2 leading-relaxed">
			{#each t.whatNotToEmail as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.companyHeading}</h2>
		{#each t.companyParagraphs as p}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{p}</p>
		{/each}
		<dl class="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 divide-y divide-gray-200 dark:divide-dark-700">
			{#each t.companyDetails as detail}
				<div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-3">
					<dt class="text-sm uppercase tracking-wide text-primary-500 sm:w-56 shrink-0">{detail.label}</dt>
					<dd class="text-gray-900 dark:text-dark-100 break-all">{detail.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.languagesHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.languagesText}</p>
	</section>
</div>
