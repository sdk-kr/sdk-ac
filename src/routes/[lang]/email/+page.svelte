<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'The Subject Line and First Sentence Do Most of the Work',
				ko: '제목과 첫 문장이 일의 대부분을 한다',
				ja: '件名と最初の一文が仕事の大半をする',
				zh: '标题和第一句话决定成败'
			},
			body: {
				en: `Most emails are decided before they are opened. The subject line and preview text determine whether the message is read now, later, or never — and AI drafts are consistently weakest exactly there, defaulting to vague labels like "Quick question" or "Following up".

Strong subject lines carry three things: the topic, the action wanted, and any deadline. "Q3 budget: approval needed by Friday" beats "Budget question" in every inbox on earth. If nothing is needed from the reader, say so — "FYI: vendor contract signed" lets people file it in two seconds, which they will thank you for.

The first sentence should carry the ask, not the throat-clearing. Busy readers read the first line and the last line; everything between is skimmed. The professional pattern is context in one clause, request in the next: "We are finalizing the Q3 budget this week — could you approve the marketing line by Friday?" Background, justification, and options go below, for the minority who need them.

When you generate a draft with this tool, write the topic field as the ask itself, not the theme. "Request 2-day deadline extension for the API migration" produces a sharper draft than "deadline extension" every time.`,
				ko: `대부분의 이메일은 열리기 전에 운명이 결정됩니다. 제목과 미리보기 텍스트가 이 메일이 지금 읽힐지, 나중에 읽힐지, 영영 안 읽힐지를 정합니다. 그런데 AI 초안은 정확히 그 지점에서 가장 약해서, '간단한 질문'이나 '팔로업'처럼 막연한 제목을 기본값으로 내놓습니다.

강한 제목은 세 가지를 담습니다. 주제, 원하는 행동, 그리고 기한. '3분기 예산: 금요일까지 승인 요청'은 '예산 문의'를 지구상 모든 받은편지함에서 이깁니다. 읽는 사람이 할 일이 없다면 그것도 밝히세요. '공유: 벤더 계약 체결 완료'는 2초 만에 분류하게 해 주고, 상대는 그걸 고마워합니다.

첫 문장은 헛기침이 아니라 용건을 실어야 합니다. 바쁜 독자는 첫 줄과 마지막 줄을 읽고 나머지는 훑습니다. 프로의 패턴은 앞 절에 맥락, 다음 절에 요청입니다. '이번 주에 3분기 예산을 확정하는데, 금요일까지 마케팅 항목을 승인해 주실 수 있을까요?' 배경, 근거, 대안은 그 아래에, 필요한 소수를 위해 둡니다.

이 도구로 초안을 만들 때는 주제 칸에 테마가 아니라 용건 자체를 쓰세요. 'API 마이그레이션 마감 2일 연장 요청'이 '마감 연장'보다 매번 더 날카로운 초안을 만듭니다.`,
				ja: `ほとんどのメールは、開かれる前に運命が決まっています。件名とプレビューテキストが、そのメッセージが今読まれるか、後で読まれるか、永遠に読まれないかを決めます。そしてAIの下書きは、まさにその部分が一貫して最も弱く、「ちょっとした質問」や「フォローアップ」のような曖昧なラベルをデフォルトで出してきます。

強い件名は3つを運びます。トピック、求める行動、そして期限。「Q3予算:金曜までに承認のお願い」は「予算の件」に、地球上のどの受信箱でも勝ちます。読み手に何も求めないなら、それも明示しましょう。「共有:ベンダー契約締結済み」なら2秒で振り分けられ、相手はそれに感謝します。

最初の一文には、前置きではなく用件を載せます。忙しい読み手は最初の行と最後の行を読み、間はすべて流し読みします。プロのパターンは、前半の節に文脈、次の節に依頼。「今週Q3予算を確定するのですが、金曜までにマーケティング項目を承認いただけますか?」背景・根拠・選択肢はその下に、必要とする少数のために置きます。

このツールで下書きを作るときは、トピック欄にテーマではなく用件そのものを書いてください。「APIマイグレーションの締切2日延長のお願い」は「締切延長」より、毎回鋭い下書きを生みます。`,
				zh: `大多数邮件在被打开之前就已定局。标题和预览文本决定这封信是现在被读、稍后被读,还是永远不被读——而 AI 草稿恰恰在这里最弱,默认给出"一个小问题"或"跟进一下"这类含糊标签。

强标题承载三样东西:主题、想要的行动、以及截止时间。"Q3 预算:请在周五前审批"在地球上任何收件箱里都胜过"预算问题"。如果不需要收件人做任何事,也要说明——"知会:供应商合同已签署"让人两秒钟就能归档,对方会感激这一点。

第一句话应该承载请求,而不是清嗓子。忙碌的读者只读第一行和最后一行,中间全靠扫。专业的写法是前半句给背景、后半句提请求:"我们本周敲定 Q3 预算——能否请您在周五前审批市场预算项?"背景、理由和备选方案放在下面,留给需要它们的少数人。

用这个工具生成草稿时,把主题栏写成请求本身,而不是话题。"请求将 API 迁移截止日期延长两天"每次都比"延期"生成更锋利的草稿。`
			}
		},
		{
			heading: {
				en: 'Email Etiquette Is Not Universal: Korea, Japan, and the West',
				ko: '이메일 예절은 만국 공통이 아니다: 한국, 일본, 서구',
				ja: 'メールの作法は万国共通ではない:韓国・日本・欧米',
				zh: '邮件礼仪并不通用:韩国、日本与西方'
			},
			body: {
				en: `AI email tools are trained mostly on English correspondence, and it shows. Ask for a formal business email and you get an American formal email — which can read as cold, abrupt, or even rude in Seoul or Tokyo.

Korean business email has structural conventions the models rarely apply unprompted. Recipients are organized as 수신 (to) and 참조 (cc), and the greeting names the person with title attached — 김민수 부장님, never a bare name. Titles (대리, 과장, 차장, 부장, 이사) function as the politeness architecture; omitting them reads as a status claim. The body opens with a relationship line ("안녕하세요, OO팀 OOO입니다") before any business, and requests are softened into capability questions: "검토해 주실 수 있을까요?" rather than "검토해 주세요."

Japanese email is more codified still: お世話になっております as the near-mandatory opener, the company-then-name order, and a closing よろしくお願いいたします that has no real English equivalent.

Western — especially US — norms invert this: directness signals respect for the reader's time. "I'm writing to ask for X by Friday" is polite precisely because it is efficient; padding it with three paragraphs of context reads as evasive.

The practical move: tell the generator who the reader is culturally, not just their role. "Formal email to a Korean 부장 I have never met, written in Korean business style" produces a fundamentally different — and safer — draft than "formal email to a manager". And have a native colleague review anything high-stakes; models still miss honorific nuances that humans notice instantly.`,
				ko: `AI 이메일 도구는 대부분 영어 서신으로 학습됐고, 티가 납니다. '격식 있는 비즈니스 이메일'을 요청하면 미국식 격식 이메일이 나오는데, 서울이나 도쿄에서는 차갑거나 퉁명스럽거나 심지어 무례하게 읽힐 수 있습니다.

한국 비즈니스 이메일에는 모델이 시키지 않으면 좀처럼 적용하지 않는 구조적 관례가 있습니다. 받는 사람은 수신과 참조로 구분하고, 인사는 직함을 붙여 상대를 부릅니다. 김민수 부장님이지, 맨 이름이 아닙니다. 직급(대리, 과장, 차장, 부장, 이사)은 곧 공손함의 구조물이라서, 빠뜨리면 서열 주장으로 읽힙니다. 본문은 용건 전에 관계를 여는 문장('안녕하세요, OO팀 OOO입니다')으로 시작하고, 요청은 가능성 질문으로 부드럽게 만듭니다. '검토해 주세요'보다 '검토해 주실 수 있을까요?'입니다.

일본 이메일은 한층 더 정형화되어 있습니다. 거의 의무에 가까운 첫인사 お世話になっております, 회사명 다음 이름 순서, 그리고 영어에 마땅한 대응어가 없는 맺음말 よろしくお願いいたします.

서구, 특히 미국의 규범은 이걸 뒤집습니다. 직설이 곧 독자의 시간에 대한 존중입니다. 'X를 금요일까지 부탁드립니다'는 효율적이기 때문에 공손한 것이고, 맥락 세 문단으로 감싸면 오히려 회피적으로 읽힙니다.

실전 요령: 생성기에 독자의 역할만이 아니라 문화적 정체를 알려주세요. '한 번도 만난 적 없는 한국인 부장님께 보내는, 한국 비즈니스 문체의 격식 있는 이메일'은 '매니저에게 보내는 격식 있는 이메일'과 근본적으로 다른, 더 안전한 초안을 만듭니다. 그리고 중요한 메일은 원어민 동료에게 검토받으세요. 사람은 즉시 알아채는 경어 뉘앙스를 모델은 여전히 놓칩니다.`,
				ja: `AIメールツールは主に英語の書簡で学習されており、それが表に出ます。「フォーマルなビジネスメール」を頼むと出てくるのはアメリカ式のフォーマルなメールで、ソウルや東京では冷たく、ぶっきらぼうに、時に無礼にさえ読まれかねません。

韓国のビジネスメールには、指示しない限りモデルがまず適用しない構造的慣習があります。宛先は수신(宛先)と참조(CC)で整理し、挨拶では役職を付けて相手を呼びます。김민수 부장님(キム・ミンス部長)であって、名前の呼び捨てではありません。職級(대리・과장・차장・부장・이사)は丁寧さの構造そのもので、省くと序列の主張として読まれます。本文は用件の前に関係を開く一文(「안녕하세요、OOチームのOOOです」)から始まり、依頼は可能性の質問に和らげます。「ご検討ください」より「ご検討いただけますでしょうか」。

日本のメールはさらに定型化されています。ほぼ必須の書き出しである「お世話になっております」、会社名の後に名前という順序、そして英語に対応物のない結びの「よろしくお願いいたします」。

欧米、特に米国の規範はこれを反転させます。率直さが読み手の時間への敬意を示すのです。「Xを金曜までにお願いします」は効率的だからこそ丁寧であり、3段落の背景で包むとかえって回避的に読まれます。

実践的な一手:生成ツールには読み手の役割だけでなく、文化的な素性を伝えましょう。「一度も会ったことのない韓国人の部長宛て、韓国のビジネス文体のフォーマルなメール」は、「上司宛てのフォーマルなメール」とは根本的に異なる、より安全な下書きを生みます。そして重要なメールはネイティブの同僚にレビューしてもらってください。人間なら即座に気づく敬語のニュアンスを、モデルはいまだに取りこぼします。`,
				zh: `AI 邮件工具主要用英文书信训练,这一点藏不住。你要一封"正式商务邮件",得到的是一封美式正式邮件——放在首尔或东京,可能读起来冷淡、生硬,甚至无礼。

韩国商务邮件有一套模型不被提醒就很少应用的结构惯例。收件人分为수신(致)和참조(抄送),称呼必须带职衔——김민수 부장님(金民秀部长),绝不能只叫名字。职级(대리、과장、차장、부장、이사)本身就是礼貌的骨架,漏掉会被读成对地位的宣示。正文在谈正事之前先有一句关系铺垫("您好,我是OO组的OOO"),请求也要软化成能力疑问句:"能否请您审阅?"而不是"请审阅。"

日本邮件更加程式化:几乎必写的开场白お世話になっております、先公司后姓名的顺序,以及英文中没有真正对应物的结尾语よろしくお願いいたします。

西方——尤其美国——的规范正好相反:直接就是对读者时间的尊重。"我写信是想请您在周五前完成 X"恰恰因为高效而显得礼貌;用三段背景把它裹起来,反而显得闪烁其词。

实用做法:告诉生成器读者的文化身份,而不只是职位。"写给一位素未谋面的韩国部长、采用韩国商务文体的正式邮件",与"写给经理的正式邮件"产生的是根本不同、也安全得多的草稿。高风险邮件请务必找母语同事把关;人一眼就能察觉的敬语分寸,模型至今仍会漏掉。`
			}
		},
		{
			heading: {
				en: 'Prompting for Tone: Adjectives Are Not Enough',
				ko: '톤을 지시하는 법: 형용사로는 부족하다',
				ja: 'トーンの指定:形容詞だけでは足りない',
				zh: '控制语气:光靠形容词不够'
			},
			body: {
				en: `"Make it friendly but professional" is the most common tone instruction and the least effective one. Every model has a house interpretation of friendly — usually an exclamation point and a "Hope you're doing well!" — that has nothing to do with your voice.

Three techniques control tone far more reliably. First, constrain the surface features directly: sentence length, contractions, exclamation points, emoji, greeting formula. "Short sentences. Contractions fine. No exclamation points. No pleasantries beyond one greeting line" beats any adjective.

Second, give a calibration sample. Paste two or three sentences you actually wrote and ask the tool to match their register. Models are dramatically better at imitating a sample than at interpreting a label — this is the single most underused feature of AI writing tools.

Third, name the relationship and the stakes, because tone is a function of both: a vendor you may drop next quarter and a client you are apologizing to for a second missed deadline need different drafts even for the same message type. The apology case has its own rule: state the failure plainly, own it without hedging ("we missed the deadline", not "the deadline was missed"), give the fix and the prevention, and skip the adjectives. Over-apologizing reads as weakness in Western business culture and as insincerity almost everywhere.`,
				ko: `'친근하지만 프로페셔널하게'는 가장 흔한 톤 지시이자 가장 효과 없는 지시입니다. 모든 모델에는 '친근함'에 대한 자기 식 해석이 있는데 — 대개 느낌표 하나와 '잘 지내시죠!' — 당신의 목소리와는 아무 상관이 없습니다.

세 가지 기법이 톤을 훨씬 확실하게 통제합니다. 첫째, 표면 특징을 직접 제약하세요. 문장 길이, 축약형, 느낌표, 이모지, 인사 공식. '짧은 문장. 느낌표 금지. 인사말은 한 줄까지만'이 어떤 형용사보다 낫습니다.

둘째, 보정 샘플을 주세요. 실제로 당신이 쓴 문장 두세 개를 붙여 넣고 그 어조에 맞추라고 하세요. 모델은 라벨을 해석하는 것보다 샘플을 모방하는 데 극적으로 더 뛰어납니다. AI 글쓰기 도구에서 가장 덜 쓰이는 최고 기능입니다.

셋째, 관계와 이해관계를 명시하세요. 톤은 이 둘의 함수입니다. '다음 분기에 정리할지도 모르는 벤더'와 '두 번째 마감을 놓쳐 사과해야 하는 고객'은 같은 유형의 메일이라도 다른 초안이 필요합니다. 사과 메일에는 고유한 규칙이 있습니다. 실패를 담백하게 진술하고, 얼버무리지 말고 소유하고('마감이 지켜지지 못했습니다'가 아니라 '저희가 마감을 놓쳤습니다'), 수습책과 재발 방지책을 제시하고, 형용사는 빼세요. 과잉 사과는 서구 비즈니스 문화에서는 약점으로, 거의 모든 곳에서는 진정성 부족으로 읽힙니다.`,
				ja: `「フレンドリーだけどプロフェッショナルに」は最もよくあるトーン指示であり、最も効かない指示です。どのモデルにも「フレンドリー」の社内解釈があり — たいていは感嘆符1つと「お元気ですか!」 — あなたの声とは何の関係もありません。

3つのテクニックがトーンをはるかに確実に制御します。第一に、表面的特徴を直接制約する。文の長さ、砕けた表現、感嘆符、絵文字、挨拶の定型。「短い文。感嘆符は禁止。挨拶は1行まで」は、どんな形容詞にも勝ります。

第二に、キャリブレーション用のサンプルを与える。自分が実際に書いた文を2〜3個貼り付け、その調子に合わせるよう頼みます。モデルはラベルの解釈よりサンプルの模倣のほうが劇的に得意です。AIライティングツールで最も使われていない最高の機能です。

第三に、関係性と利害を明示する。トーンはその両方の関数だからです。「来期に切るかもしれないベンダー」と「2度目の納期遅延を謝罪すべきクライアント」では、同じ種類のメールでも別の下書きが要ります。謝罪メールには固有のルールがあります。失敗を率直に述べ、ぼかさずに引き受け(「納期が守られませんでした」ではなく「私どもが納期を逃しました」)、収拾策と再発防止策を示し、形容詞は削る。過剰な謝罪は、欧米のビジネス文化では弱さとして、ほぼどこでも誠実さの欠如として読まれます。`,
				zh: `"友好但专业"是最常见的语气指令,也是最无效的一条。每个模型对"友好"都有自己的一套默认演绎——通常是一个感叹号加一句"希望你一切都好!"——和你本人的声音毫无关系。

三个技巧能远为可靠地控制语气。第一,直接约束表层特征:句子长度、缩写、感叹号、表情符号、问候格式。"短句。禁用感叹号。问候不超过一行"胜过任何形容词。

第二,给一段校准样本。贴上两三句你真实写过的话,让工具匹配那个语域。模型模仿样本的能力,远远强于解读标签的能力——这是 AI 写作工具中最被低估的用法。

第三,说明关系和利害,因为语气是两者的函数:"一家下季度可能弃用的供应商"和"一位我们第二次错过交付、需要道歉的客户",即便邮件类型相同,也需要完全不同的草稿。道歉邮件另有铁律:平实地陈述失误,不打太极地承担("我们错过了期限",而不是"期限被错过了"),给出补救和预防措施,删掉所有形容词。过度道歉在西方商务文化里被读作软弱,在几乎所有地方都被读作缺乏诚意。`
			},
			code: {
				example: `Weak: "Write a friendly but professional follow-up."

Strong:
"Write a follow-up to a client whose project we delayed.
Relationship: 3-year client, warm but formal.
Tone rules:
- Sentences under 20 words. Contractions OK.
- No exclamation points, no 'hope you're well'.
- Own the delay in the first sentence ('we', active voice).
- One concrete recovery date, one prevention step.
Match this register: 'Thanks for flagging this early.
We'll have the revised scope to you Tuesday.'"`
			}
		},
		{
			heading: {
				en: 'Follow-Ups: Cadence, Framing, and When to Stop',
				ko: '팔로업: 주기, 프레이밍, 그리고 멈출 때',
				ja: 'フォローアップ:間隔・組み立て・やめどき',
				zh: '跟进邮件:节奏、措辞与止损点'
			},
			body: {
				en: `Most follow-ups fail twice: they come too soon, and they say nothing new. "Just bumping this to the top of your inbox" asks the reader to do the same work again with added guilt attached.

A defensible cadence for business requests: first follow-up after three business days, second after a week, then one final message that closes the loop. Internal asks can move faster; cold outreach should move slower. Each message must reduce the reader's cost of replying, not just repeat the ask. Shrink the request ("even a yes/no on the direction helps"), add the deadline's consequence ("we lock the vendor list Thursday"), or offer a default ("if I don't hear back, I'll proceed with option A") — the default-option close is the highest-response pattern in professional correspondence because silence becomes an answer.

The final message should release the pressure honestly: "Closing this out for now — if it becomes relevant again, happy to pick it up." It preserves the relationship and, paradoxically, gets more replies than a fourth nudge.

One cultural note: this cadence is calibrated for Western norms. In Korean and Japanese contexts, a phone call or messenger ping after the first unanswered email is often more appropriate than a chain of written reminders directed at a senior person.`,
				ko: `대부분의 팔로업은 두 번 실패합니다. 너무 일찍 오고, 새로운 내용이 없습니다. '다시 한번 상기시켜 드립니다'는 독자에게 죄책감을 얹어 같은 일을 또 시키는 것입니다.

비즈니스 요청의 무난한 주기: 첫 팔로업은 영업일 3일 후, 두 번째는 일주일 후, 그다음 매듭을 짓는 마지막 메시지 하나. 사내 요청은 더 빨라도 되고, 콜드 아웃리치는 더 느려야 합니다. 각 메시지는 요청을 반복하는 게 아니라 답장의 비용을 낮춰야 합니다. 요청을 줄이거나('방향에 대한 예/아니오만이라도 도움이 됩니다'), 기한의 결과를 덧붙이거나('목요일에 벤더 목록을 확정합니다'), 기본값을 제시하세요('회신이 없으시면 A안으로 진행하겠습니다'). 기본값 제시형 마무리는 침묵조차 답이 되게 만들기 때문에 업무 서신에서 응답률이 가장 높은 패턴입니다.

마지막 메시지는 압박을 정직하게 풀어야 합니다. '일단 여기서 정리하겠습니다. 다시 필요해지면 기꺼이 이어가겠습니다.' 관계를 보존하고, 역설적으로 네 번째 재촉보다 더 많은 답장을 받습니다.

문화적 주석 하나: 이 주기는 서구 규범에 맞춘 것입니다. 한국과 일본 맥락에서는, 답 없는 첫 메일 뒤에는 윗사람에게 문서 리마인더를 쌓는 것보다 전화나 메신저가 더 적절한 경우가 많습니다.`,
				ja: `ほとんどのフォローアップは二重に失敗します。早すぎるうえ、新しい内容がないのです。「念のため再送します」は、読み手に罪悪感を上乗せして同じ作業をもう一度させるだけです。

ビジネス依頼の妥当な間隔:最初のフォローアップは3営業日後、2回目は1週間後、その後に区切りをつける最後のメッセージを1通。社内の依頼はもっと速くてよく、コールドメールはもっと遅くすべきです。各メッセージは依頼の繰り返しではなく、返信のコストを下げなければなりません。依頼を縮める(「方向性へのイエス/ノーだけでも助かります」)、期限の帰結を添える(「木曜にベンダーリストを確定します」)、デフォルトを提示する(「ご返信がなければA案で進めます」)— デフォルト提示型の締めは、沈黙さえ答えに変わるため、ビジネス書簡で最も返信率の高いパターンです。

最後のメッセージでは圧を正直に抜きます。「いったんここで区切ります。また必要になれば喜んで再開します」。関係を保ち、逆説的ですが、4通目の催促より多くの返信を得られます。

文化的な注記を1つ。この間隔は欧米の規範に合わせたものです。韓国や日本の文脈では、返信のない最初のメールの後、目上の人に文書のリマインダーを重ねるより、電話やメッセンジャーのほうが適切な場合が多くあります。`,
				zh: `大多数跟进邮件败在两点:来得太早,又没说任何新东西。"把这封邮件顶到您收件箱顶部"等于让对方带着负罪感把同样的活再干一遍。

商务请求的稳妥节奏:第一次跟进在三个工作日后,第二次在一周后,然后发一封收尾的最后邮件。内部请求可以更快;陌生开发信应该更慢。每封邮件都必须降低对方回复的成本,而不是重复请求。缩小请求("哪怕对方向给个是/否也有帮助"),补上期限的后果("我们周四锁定供应商名单"),或者给出默认选项("如未收到回复,我将按方案 A 推进")——默认选项式收尾是职场信函中回复率最高的模式,因为沉默本身也成了答案。

最后一封邮件要诚实地卸掉压力:"这件事暂且收尾——若日后再有需要,随时乐意继续。"它保住了关系,而且吊诡的是,比第四次催促能换来更多回复。

一条文化注记:这套节奏是按西方规范校准的。在韩国和日本的语境里,第一封邮件石沉大海之后,给上级打个电话或发条即时消息,往往比连环书面提醒更得体。`
			}
		},
		{
			heading: {
				en: 'Before and After — and What to Check Before You Hit Send',
				ko: '전과 후 — 그리고 보내기 전에 확인할 것',
				ja: 'ビフォーアフター — 送信前に確認すべきこと',
				zh: '修改前后对照——以及点击发送前要核查什么'
			},
			body: {
				en: `The example below shows the same request before and after applying the principles above: ask in the subject, ask in the first line, one topic, a default option, and a scannable shape.

Whatever the tool produces, a sixty-second check protects you from the failure modes specific to generated email. Verify every fact you did not type: AI drafts routinely invent meeting dates, misstate what was previously agreed, and fill gaps with plausible specifics — a fabricated "as we discussed on Tuesday" can quietly become a commitment. Check the names and honorifics letter by letter; a misspelled name undoes an otherwise perfect email. Delete the filler the model loves ("I hope this email finds you well", "I wanted to reach out") and any sentence that repeats the subject line. Make sure the draft contains exactly one question or request — generated drafts often smuggle in two or three, and multi-ask emails get partial answers. Finally, read it once aloud in the recipient's position: if any sentence would make you wince, rewrite that sentence yourself. The tool drafts; you remain the author of record, and the recipient will hold you — not the model — to every word.`,
				ko: `아래 예시는 위 원칙 — 제목에 용건, 첫 줄에 용건, 하나의 주제, 기본값 제시, 훑기 좋은 형태 — 을 적용하기 전과 후의 같은 요청입니다.

도구가 무엇을 내놓든, 60초 점검이 생성 이메일 특유의 실패 유형에서 당신을 지켜줍니다. 직접 입력하지 않은 모든 사실을 검증하세요. AI 초안은 회의 날짜를 지어내고, 이전 합의 내용을 잘못 서술하고, 빈틈을 그럴듯한 구체성으로 메웁니다. 지어낸 '화요일에 논의드린 대로'가 조용히 약속이 되어버릴 수 있습니다. 이름과 호칭은 글자 단위로 확인하세요. 이름 오타 하나가 완벽한 이메일을 무너뜨립니다. 모델이 사랑하는 군더더기('이 메일이 잘 도착하길 바랍니다', '연락드리고 싶었습니다')와 제목을 반복하는 문장은 지우세요. 초안에 질문이나 요청이 정확히 하나만 있는지 확인하세요. 생성 초안은 종종 두세 개를 몰래 끼워 넣고, 다중 요청 메일은 부분 답변만 받습니다. 마지막으로 수신자 입장에서 소리 내어 한 번 읽어 보세요. 움찔하게 되는 문장이 있다면 그 문장은 직접 다시 쓰세요. 도구는 초안을 쓸 뿐, 기록상의 저자는 당신이고, 수신자는 모델이 아니라 당신에게 모든 단어의 책임을 물을 것입니다.`,
				ja: `下の例は、上記の原則 — 件名に用件、最初の行に用件、トピックは1つ、デフォルトの提示、流し読みできる形 — を適用する前と後の、同じ依頼です。

ツールが何を出そうと、60秒のチェックが生成メール特有の失敗パターンからあなたを守ります。自分で入力していない事実はすべて検証してください。AIの下書きは会議の日付を捏造し、以前の合意内容を言い間違え、空白をもっともらしい具体性で埋めます。捏造された「火曜にお話しした通り」が、静かに約束へと変わりかねません。名前と敬称は一文字ずつ確認を。名前の誤字1つが、それ以外は完璧なメールを台無しにします。モデルが大好きな埋め草(「お元気でお過ごしのことと存じます」)や件名を繰り返すだけの文は削除。下書きに質問や依頼がちょうど1つだけあることを確認してください。生成された下書きはしばしば2つ3つを紛れ込ませ、複数依頼のメールは部分的な回答しか得られません。最後に、受信者の立場で一度音読を。ひるむ文があれば、その文は自分で書き直しましょう。ツールは下書きを作るだけで、記録に残る著者はあなたです。受信者は一語一句の責任を、モデルではなくあなたに問います。`,
				zh: `下面的例子展示了同一个请求在应用上述原则——标题里有请求、第一行有请求、只谈一件事、给出默认选项、形态便于扫读——前后的样子。

无论工具产出什么,一次六十秒的核查能保护你避开生成式邮件特有的失败模式。核实每一个不是你亲手输入的事实:AI 草稿经常发明会议日期、错述先前的约定、用貌似合理的细节填补空白——一句编造的"如我们周二所谈",可能悄悄变成一项承诺。逐字核对姓名和敬称;一个拼错的名字足以毁掉一封原本完美的邮件。删掉模型钟爱的废话("见信好""我想联系您一下")和任何重复标题的句子。确认草稿里恰好只有一个问题或请求——生成的草稿常常偷偷塞进两三个,而多请求邮件只会得到部分回答。最后,站在收件人的位置把它读一遍:哪句话让你皱眉,就亲手重写那句话。工具负责起草;署名的作者始终是你,收件人也只会拿每一个字来问责你,而不是模型。`
			},
			code: {
				example: `Before:
Subject: Question
Hi, I hope you're doing well! I was wondering if you
might have had a chance to look at the proposal we
sent over, and also whether the timeline works, and
if we should maybe set up a call sometime?

After:
Subject: Proposal sign-off — OK to start May 12?
Hi Sarah — could you confirm the proposal by Thursday?
Scope and pricing are unchanged from our April 28 call.
If I don't hear back, I'll assume the May 12 start
date works and send the kickoff invite.
Full timeline attached if you want the detail.`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	type EmailType = 'business' | 'followup' | 'apology' | 'thankyou' | 'request' | 'introduction';
	type ToneType = 'formal' | 'friendly' | 'casual';
	let emailType: EmailType = 'business';
	let recipient = '';
	let topic = '';
	let tone: ToneType = 'formal';
	let output = '';
	let copied = false;

	function generate() {
		if (!topic.trim()) return;

		const typeDesc = {
			business: 'a business inquiry email',
			followup: 'a follow-up email',
			apology: 'an apology email',
			thankyou: 'a thank you email',
			request: 'a request email',
			introduction: 'an introduction email'
		};

		const toneDesc = {
			formal: 'Use formal, professional language appropriate for business communication.',
			friendly: 'Use a warm, friendly but still professional tone.',
			casual: 'Use a relaxed, conversational tone while remaining respectful.'
		};

		let prompt = `Write ${typeDesc[emailType]}.\n\n`;
		if (recipient) {
			prompt += `Recipient: ${recipient}\n`;
		}
		prompt += `Topic/Purpose: ${topic}\n\n`;
		prompt += `${toneDesc[tone]}\n\n`;
		prompt += `Include:\n- Appropriate greeting\n- Clear body with the main message\n- Professional closing\n- Signature placeholder`;

		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		recipient = '';
		topic = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('email.title')} - SDK.ac</title>
	<meta name="description" content={t('email.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('email.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('email.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Email Type -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.type')}
			</label>
			<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
				{#each ['business', 'followup', 'apology', 'thankyou', 'request', 'introduction'] as type}
					<button
						on:click={() => emailType = type as EmailType}
						class="px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors {emailType === type
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`email.types.${type}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Recipient -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.recipient')}
			</label>
			<input
				type="text"
				bind:value={recipient}
				placeholder={t('email.recipientPlaceholder')}
				class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
			/>
		</div>

		<!-- Topic -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.topic')}
			</label>
			<textarea
				bind:value={topic}
				placeholder={t('email.topicPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Tone -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('email.tone')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['formal', 'friendly', 'casual'] as t}
					<button
						on:click={() => tone = t as ToneType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {tone === t
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{common[lang]?.[`email.tones.${t}`] || common['en'][`email.tones.${t}`]}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!topic.trim()}
				class="flex-1 py-3 bg-primary-400 hover:bg-primary-500 text-dark-900 font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{t('ui.generate')}
			</button>
			<button
				on:click={clear}
				class="px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 font-medium rounded-xl transition-colors"
			>
				{t('ui.clear')}
			</button>
		</div>

		<!-- Output -->
		{#if output}
			<div>
				<div class="flex justify-between items-center mb-2">
					<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
						{t('email.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<pre class="whitespace-pre-wrap text-sm text-gray-800 dark:text-dark-200">{output}</pre>
				</div>
			</div>
		{/if}
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
