<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Neural MT vs LLM Translation: What Actually Changed',
				ko: '신경망 번역 vs LLM 번역: 실제로 무엇이 달라졌나',
				ja: 'ニューラル機械翻訳とLLM翻訳:実際に何が変わったのか',
				zh: '神经机器翻译 vs 大模型翻译:到底改变了什么'
			},
			body: {
				en: `Classic neural machine translation systems — Google Translate, DeepL, Papago — are encoder-decoder models trained specifically on parallel corpora. They translate one sentence at a time, with little or no memory of the surrounding document. That design makes them fast, cheap, and deterministic: the same input almost always produces the same output. But it also explains their most familiar failures. A pronoun in sentence twelve gets the wrong gender because the antecedent lived in sentence three. A product name is translated in the title and transliterated in the body. Formal address flips to casual halfway through a manual.

Large language models translate differently. They read the entire passage inside one context window, so cross-sentence references, running jokes, and document-level terminology stay coherent over thousands of words. They also follow instructions: you can hand an LLM a glossary, a target register, a character limit, or a "do not translate brand names" rule, and it will usually comply. The trade-off is that LLMs are slower, cost more per word, and are non-deterministic — the same prompt can yield different phrasings, and a model may quietly paraphrase or smooth over an ambiguity instead of flagging it.

A practical rule: use dedicated NMT for high-volume, low-stakes text where speed matters, and use LLM translation when context, tone, and terminology consistency matter more than latency. This tool builds the instruction-rich prompt that makes the LLM path work.`,
				ko: `구글 번역, DeepL, 파파고 같은 전통적인 신경망 기계번역(NMT) 시스템은 병렬 말뭉치로 학습된 인코더-디코더 모델입니다. 문장을 하나씩 번역하며, 주변 문서에 대한 기억이 거의 없습니다. 그래서 빠르고 저렴하고 결정적(deterministic)입니다. 같은 입력은 거의 항상 같은 출력을 냅니다. 하지만 익숙한 실패 패턴도 여기서 나옵니다. 3번째 문장에 있던 선행사를 잊어버려 12번째 문장의 대명사 성별이 틀리고, 제목에서는 번역된 제품명이 본문에서는 음차되고, 매뉴얼 중간에서 존댓말이 갑자기 반말로 바뀝니다.

대규모 언어 모델(LLM)은 다르게 번역합니다. 전체 지문을 하나의 컨텍스트 윈도우 안에서 읽기 때문에 문장 간 지시 관계, 반복되는 표현, 문서 전체의 용어가 수천 단어에 걸쳐 일관되게 유지됩니다. 또한 지시를 따릅니다. 용어집, 목표 문체, 글자 수 제한, "브랜드명은 번역하지 말 것" 같은 규칙을 주면 대체로 지켜줍니다. 대신 느리고, 단어당 비용이 높고, 비결정적입니다. 같은 프롬프트가 다른 표현을 낼 수 있고, 모호한 부분을 짚어주는 대신 조용히 뭉개고 넘어갈 수도 있습니다.

실용적인 기준은 이렇습니다. 속도가 중요한 대량·저위험 텍스트는 전용 NMT로, 맥락·톤·용어 일관성이 지연 시간보다 중요한 텍스트는 LLM 번역으로 처리하세요. 이 도구는 LLM 방식이 제대로 작동하도록 지시가 풍부한 프롬프트를 만들어 줍니다.`,
				ja: `Google翻訳、DeepL、Papagoといった従来型のニューラル機械翻訳(NMT)は、対訳コーパスで特化学習されたエンコーダ・デコーダモデルです。文書全体の記憶をほとんど持たず、一文ずつ翻訳します。その設計ゆえに高速・低コスト・決定的で、同じ入力にはほぼ同じ出力を返します。しかし、おなじみの失敗もここから生まれます。先行詞が3文目にあったせいで12文目の代名詞の性が誤る。製品名がタイトルでは翻訳され、本文では音訳される。マニュアルの途中で敬体が常体に変わる、といった具合です。

大規模言語モデル(LLM)の翻訳は異なります。文章全体をひとつのコンテキストウィンドウ内で読むため、文をまたぐ参照や繰り返し表現、文書レベルの用語が数千語にわたって一貫します。さらに指示に従います。用語集、目標の文体、文字数制限、「ブランド名は翻訳しない」といったルールを与えれば、おおむね守ってくれます。その代償として、速度は遅く、単語あたりのコストは高く、非決定的です。同じプロンプトでも表現が揺れ、曖昧さを指摘する代わりに静かに言い換えて済ませることもあります。

実用的な使い分けはこうです。速度重視の大量・低リスクなテキストは専用NMTに、文脈・トーン・用語の一貫性がレイテンシより重要なテキストはLLM翻訳に。このツールは、LLM方式を機能させるための指示の行き届いたプロンプトを組み立てます。`,
				zh: `谷歌翻译、DeepL、Papago 这类经典神经机器翻译(NMT)系统,是在平行语料上专门训练的编码器-解码器模型。它们逐句翻译,几乎不记得上下文。这种设计让它们快速、便宜、结果确定:同样的输入几乎总是产生同样的输出。但最常见的失败也源于此:先行词在第三句,第十二句的代词性别就错了;产品名在标题里被意译,正文里却被音译;说明书翻到一半,敬语突然变成了随意的口吻。

大语言模型(LLM)的翻译方式不同。它在一个上下文窗口内通读整段文字,因此跨句指代、反复出现的说法、全文术语在数千词的范围内都能保持一致。它还能听从指令:你可以给它术语表、目标语体、字数限制,或"品牌名不要翻译"之类的规则,它通常会遵守。代价是更慢、每字成本更高,而且是非确定性的——同一个提示词可能产出不同措辞,模型也可能悄悄把歧义抹平,而不是指出来。

实用的判断标准是:大批量、低风险、追求速度的文本用专用 NMT;当上下文、语气和术语一致性比延迟更重要时,用 LLM 翻译。这个工具做的,就是生成让 LLM 路线真正奏效的、指令充分的提示词。`
			}
		},
		{
			heading: {
				en: 'Formality Is Not Optional: 반말/존댓말, Keigo, and T-V',
				ko: '격식은 선택이 아니다: 반말/존댓말, 케이고, T-V 구분',
				ja: '文体は「おまけ」ではない:韓国語の반말/존댓말、敬語、T-V区別',
				zh: '语体不是可选项:韩语敬语、日语敬语与欧洲语言的 T-V 之分'
			},
			body: {
				en: `English mostly hides formality in word choice, so English speakers routinely underestimate how much of a translation is register, not vocabulary. Korean grammaticalizes politeness in the verb ending of nearly every sentence: 해체 (banmal, intimate), 해요체 (polite everyday), and 합쇼체 (formal, used in news and business documents) are all correct translations of the same English sentence, and picking the wrong one can read as rude or absurdly stiff. Japanese layers this further with keigo — plain form, です/ます polite form, and separate honorific (尊敬語) and humble (謙譲語) verb sets, where the verb changes depending on whose action is being elevated. European languages carry the T-V distinction: tu/vous in French, du/Sie in German, tú/usted in Spanish — and business German still defaults to Sie with people you would happily first-name in English.

Machine translators must guess a register, and they guess from surface cues that are often missing in short input. This is the single most fixable translation failure: state the register explicitly. Tell the model who is speaking, to whom, and in what setting — "a customer support reply from a company to an adult customer, polite but not stiff (해요체)" removes the guesswork entirely. When translating into a language you cannot read, ask the model to state which register it chose, so a native reviewer can verify the choice rather than reverse-engineer it.`,
				ko: `영어는 격식을 대부분 어휘 선택 속에 숨기기 때문에, 영어 화자는 번역에서 어휘가 아니라 문체(register)가 차지하는 비중을 늘 과소평가합니다. 한국어는 거의 모든 문장의 어미에 공손함이 문법화되어 있습니다. 해체(반말), 해요체(일상 존댓말), 합쇼체(뉴스·비즈니스 문서의 격식체)는 모두 같은 영어 문장의 "옳은" 번역이지만, 잘못 고르면 무례하거나 우스꽝스럽게 딱딱해집니다. 일본어는 여기에 케이고(敬語)를 겹칩니다. 보통체, です/ます체에 더해 존경어(尊敬語)와 겸양어(謙譲語)라는 별도의 동사 체계가 있어, 누구의 행위를 높이느냐에 따라 동사 자체가 바뀝니다. 유럽 언어에는 T-V 구분이 있습니다. 프랑스어 tu/vous, 독일어 du/Sie, 스페인어 tú/usted가 그것이고, 비즈니스 독일어는 영어라면 편하게 이름을 부를 상대에게도 여전히 Sie가 기본입니다.

기계 번역은 문체를 추측할 수밖에 없는데, 짧은 입력에는 그 추측의 근거가 되는 표면 단서가 없는 경우가 많습니다. 이것이 가장 고치기 쉬운 번역 실패입니다. 문체를 명시적으로 지정하세요. 누가, 누구에게, 어떤 상황에서 말하는지 알려주면 됩니다. "기업이 성인 고객에게 보내는 CS 답변, 공손하되 딱딱하지 않게(해요체)"라고 쓰면 추측의 여지가 사라집니다. 읽을 수 없는 언어로 번역할 때는 모델에게 어떤 문체를 선택했는지 명시하게 하세요. 원어민 검수자가 선택을 역추적하는 대신 바로 검증할 수 있습니다.`,
				ja: `英語は丁寧さの大半を語彙選択の中に隠しているため、英語話者は翻訳における「文体」の比重をいつも過小評価します。韓国語では、ほぼすべての文の語尾に丁寧さが文法として組み込まれています。해체(반말・ぞんざい体)、해요체(日常の丁寧体)、합쇼체(ニュースやビジネス文書の格式体)は、どれも同じ英文の「正しい」訳ですが、選択を誤ると失礼になるか、滑稽なほど堅くなります。日本語はさらに敬語が重なります。常体、です・ます体に加え、尊敬語と謙譲語という別々の動詞体系があり、誰の行為を高めるかで動詞そのものが変わります。ヨーロッパ言語にはT-V区別があります。フランス語のtu/vous、ドイツ語のdu/Sie、スペイン語のtú/usted。ビジネスドイツ語では、英語ならファーストネームで呼ぶ相手にも今なおSieが標準です。

機械翻訳は文体を推測するしかありませんが、短い入力にはその手がかりが欠けていることが多い。これは最も直しやすい翻訳の失敗です。文体を明示的に指定してください。誰が、誰に、どんな場面で話すのかを伝えるだけです。「企業から成人顧客へのサポート返信。丁寧だが堅すぎない文体で」と書けば、推測の余地は消えます。読めない言語へ翻訳するときは、どの文体を選んだかをモデル自身に明記させましょう。ネイティブのレビュアーが選択を逆算する代わりに、その場で検証できます。`,
				zh: `英语大多把礼貌藏在措辞选择里,所以英语使用者总是低估翻译中"语体"(而非词汇)所占的分量。韩语几乎在每个句子的动词词尾上都把礼貌语法化了:해체(반말,亲近随意)、해요체(日常敬语)、합쇼체(新闻和商务文书的正式体)都是同一句英文的"正确"译法,选错一个,读起来不是无礼就是僵硬得可笑。日语在此之上又叠加了敬语体系:除了简体和です/ます体,还有尊敬语和谦让语两套独立的动词,抬高谁的动作,动词本身就要换。欧洲语言则有 T-V 之分:法语 tu/vous、德语 du/Sie、西班牙语 tú/usted——在商务德语里,对英语中早就直呼其名的人,默认仍然要用 Sie。

机器翻译只能猜测语体,而短输入往往缺少可供猜测的表面线索。这是最容易修复的翻译失败:把语体明确写出来。告诉模型谁在说话、对谁说、在什么场合——"企业写给成年客户的客服回复,礼貌但不生硬",猜测空间就完全消失了。翻译成你看不懂的语言时,让模型说明它选择了哪种语体,这样母语审校者可以直接核对这个选择,而不必反向推断。`
			},
			code: {
				example: `Weak prompt:
"Translate to Korean: We're sorry, but your refund could not be processed."

Strong prompt:
"Translate to Korean. Context: customer-support email from an
e-commerce company to an adult customer. Register: polite 해요체,
warm but professional. Keep the brand name 'PayNow' untranslated.
Text: We're sorry, but your refund could not be processed."

Result (weak):  환불을 처리할 수 없다.        <- abrupt, near-반말
Result (strong): 죄송하지만 PayNow에서 환불을
                 처리하지 못했어요.            <- correct register`
			}
		},
		{
			heading: {
				en: 'Why Japanese and Korean Break Translators: は/が, Dropped Subjects, Counters',
				ko: '일본어와 한국어가 번역기를 무너뜨리는 이유: は/が, 주어 생략, 조수사',
				ja: '日本語と韓国語が翻訳機を壊す理由:「は/が」、主語の省略、助数詞',
				zh: '日语和韩语为什么让翻译器崩溃:「は/が」、主语省略与量词'
			},
			body: {
				en: `The hardest translation errors are the ones that produce fluent, grammatical, wrong output. Japanese は and が are the classic case. は marks the topic ("as for X"), が marks the grammatical subject, and swapping them changes emphasis or meaning: 私は行きます is a neutral "I will go," while 私が行きます means "I am the one who will go" — an answer to "who is going?". Translators flatten both to "I will go" and lose the contrast; going the other way, they must invent a distinction the English never expressed.

Both Japanese and Korean are pro-drop languages: subjects and objects vanish when context supplies them. A Korean sentence like 어제 봤어요 is literally "yesterday saw" — who saw what must be recovered from prior sentences. Sentence-by-sentence NMT guesses, and its favorite guess is "I," which is why so much translated Korean dialogue has phantom first-person subjects. LLMs with the full passage in context guess far better, but only if you actually give them the passage instead of one isolated line.

Then there are counters and classifiers. Japanese counts flat objects with 枚, machines with 台, small animals with 匹; Chinese requires measure words (一本书, 三张桌子); Korean pairs native and Sino-Korean numerals with different counters. Getting a counter wrong is instantly visible to natives and invisible to you. Always translate with surrounding context, and have a native speaker check anything customer-facing.`,
				ko: `가장 위험한 번역 오류는 유창하고 문법적으로 완벽한데 뜻이 틀린 출력입니다. 일본어의 は와 が가 고전적인 사례입니다. は는 화제("X로 말하자면")를, が는 문법적 주어를 표시하는데, 이 둘을 바꾸면 초점이나 의미가 달라집니다. 私は行きます는 중립적인 "저는 갑니다"지만, 私が行きます는 "가는 사람은 바로 저입니다"라는 뜻으로 "누가 가나요?"에 대한 대답입니다. 번역기는 둘 다 "I will go"로 뭉개서 대비를 잃고, 반대 방향에서는 영어가 표현한 적 없는 구분을 만들어내야 합니다.

일본어와 한국어는 모두 주어 생략(pro-drop) 언어입니다. 맥락이 채워주면 주어와 목적어가 사라집니다. "어제 봤어요"는 문자 그대로 "yesterday saw"이고, 누가 무엇을 봤는지는 앞 문장에서 복원해야 합니다. 문장 단위 NMT는 추측할 수밖에 없는데 가장 좋아하는 추측이 "I"라서, 번역된 한국어 대화문에 유령 1인칭 주어가 그렇게 많은 것입니다. 전체 지문을 컨텍스트로 가진 LLM은 훨씬 잘 추측하지만, 한 줄만 떼어 주지 말고 실제로 지문 전체를 줘야만 그렇습니다.

조수사와 분류사도 있습니다. 일본어는 평평한 물건을 枚로, 기계를 台로, 작은 동물을 匹로 세고, 중국어는 양사가 필수이며(一本书, 三张桌子), 한국어는 고유어 수사와 한자어 수사가 서로 다른 단위 명사와 결합합니다. 조수사가 틀리면 원어민에게는 즉시 보이고 여러분에게는 보이지 않습니다. 항상 주변 맥락과 함께 번역하고, 고객에게 노출되는 텍스트는 반드시 원어민 검수를 거치세요.`,
				ja: `最も危険な翻訳エラーは、流暢で文法的に正しいのに意味が違う出力です。日本語の「は」と「が」はその古典的な例です。「は」は主題(「Xについて言えば」)を、「が」は文法上の主語を示し、入れ替えると焦点や意味が変わります。「私は行きます」は中立的な表明ですが、「私が行きます」は「行くのは私です」という意味で、「誰が行くのか」への答えです。翻訳機はどちらも "I will go" に潰して対比を失い、逆方向では英語が表現していない区別を捏造しなければなりません。

日本語も韓国語も主語省略(pro-drop)言語です。文脈が補ってくれるなら主語も目的語も消えます。韓国語の「어제 봤어요」は文字どおり「昨日 見た」で、誰が何を見たかは前の文から復元するしかありません。一文ずつ処理するNMTは推測するほかなく、その一番のお気に入りが「I」なので、翻訳された会話文には幽霊のような一人称主語が大量発生します。文章全体をコンテキストに持つLLMははるかに上手に推測しますが、それは一行だけ切り出さず、実際に文章全体を与えた場合の話です。

さらに助数詞と類別詞があります。日本語は平たい物を「枚」、機械を「台」、小動物を「匹」で数え、中国語は量詞が必須(一本书、三张桌子)、韓国語は固有語数詞と漢数詞が異なる単位名詞と結びつきます。助数詞の誤りはネイティブには一瞬で見え、あなたには見えません。必ず前後の文脈ごと翻訳し、顧客の目に触れるものはネイティブチェックを通してください。`,
				zh: `最危险的翻译错误,是那些流畅、合乎语法、但意思错了的输出。日语的「は」和「が」是经典案例。「は」标记话题("说到X"),「が」标记语法主语,换用一个,重点或意思就变了:「私は行きます」是中性的"我会去",而「私が行きます」意为"去的人是我"——是对"谁去?"的回答。翻译器把两者都压平成 "I will go",对比就丢了;反过来翻译时,它还得凭空造出英语从未表达过的区分。

日语和韩语都是可以省略主语的语言:只要语境能补上,主语和宾语就会消失。韩语的「어제 봤어요」字面上就是"昨天 看了",谁看了什么必须从前文恢复。逐句处理的 NMT 只能猜,而它最爱的猜测是"我",这就是为什么机翻的韩语对话里到处是幽灵般的第一人称主语。拿到全文上下文的 LLM 猜得好得多——但前提是你真的把全文给它,而不是孤零零一行。

还有量词的问题。日语数扁平物用「枚」、数机器用「台」、数小动物用「匹」;中文必须用量词(一本书、三张桌子);韩语的固有词数词和汉字词数词要搭配不同的单位名词。量词用错,母语者一眼就能看出,而你完全看不见。所以要始终连同上下文一起翻译,任何面向客户的文本都请母语者把关。`
			},
			code: {
				example: `Context-free input (1 line):
  "봤어요?"
NMT output:
  "Did you see it?"   <- "you"/"it" are pure guesses

Same line with context supplied:
  "A: 어제 새로 나온 예고편 봤어요?
   B: 아직요. 오늘 밤에 보려고요."
LLM output:
  "A: Did you watch the new trailer that came out yesterday?
   B: Not yet. I'm planning to watch it tonight."

Rule: never translate dialogue line-by-line.
Paste the whole exchange and translate it in one pass.`
			}
		},
		{
			heading: {
				en: 'A Working Translation Workflow: Context, Glossary, Back-Translation',
				ko: '실전 번역 워크플로: 맥락, 용어집, 역번역',
				ja: '実務で機能する翻訳ワークフロー:文脈・用語集・逆翻訳',
				zh: '可落地的翻译工作流:上下文、术语表与回译'
			},
			body: {
				en: `Professional translators do not start typing immediately; they build context first. You can borrow that discipline in three steps.

First, front-load context. Before the text itself, state the domain (legal, medical, marketing, casual chat), the audience, the purpose, and any constraints such as maximum length for UI strings. Two sentences of context routinely improve a translation more than any amount of post-editing.

Second, maintain a glossary. Every product, feature, and role name should have exactly one approved translation, and you should paste that list into every translation request. Terminology drift — the same feature called three different things across your help center — is the most common defect in AI-translated documentation, and a pasted glossary eliminates most of it. Include the terms you do NOT want translated: brand names, code identifiers, legal terms of art.

Third, verify with back-translation, carefully. Translate the output back to the source language with a fresh request (not in the same conversation, where the model can see the original and simply echo it). Back-translation is a smoke test: it reliably catches omissions, negation flips, and wrong numbers, but it cannot certify nuance, register, or naturalness — a stilted translation often back-translates perfectly. For anything with legal, medical, or financial consequences, back-translation supplements a human native review; it never replaces one.`,
				ko: `전문 번역가는 바로 타이핑을 시작하지 않습니다. 먼저 맥락을 구축합니다. 그 규율을 세 단계로 빌려올 수 있습니다.

첫째, 맥락을 앞에 실으세요. 본문에 앞서 도메인(법률, 의료, 마케팅, 일상 대화), 독자, 목적, 그리고 UI 문자열의 최대 길이 같은 제약을 명시하세요. 맥락 두 문장이 사후 편집 어떤 것보다 번역 품질을 크게 끌어올리는 경우가 흔합니다.

둘째, 용어집을 유지하세요. 모든 제품명, 기능명, 직책명에는 승인된 번역이 정확히 하나씩 있어야 하고, 그 목록을 모든 번역 요청에 붙여 넣어야 합니다. 용어 표류 — 같은 기능이 헬프센터 곳곳에서 세 가지 이름으로 불리는 것 — 는 AI 번역 문서의 가장 흔한 결함인데, 붙여 넣은 용어집이 대부분을 제거합니다. 번역하지 말아야 할 항목도 포함하세요. 브랜드명, 코드 식별자, 법률 전문용어가 그렇습니다.

셋째, 역번역으로 검증하되 신중하게 하세요. 결과물을 새 요청에서(모델이 원문을 보고 그대로 되풀이할 수 있는 같은 대화가 아니라) 원어로 다시 번역해 보세요. 역번역은 스모크 테스트입니다. 누락, 부정문 뒤집힘, 숫자 오류는 확실히 잡아내지만, 뉘앙스·문체·자연스러움은 보증하지 못합니다. 어색한 번역도 역번역은 완벽하게 되는 경우가 많습니다. 법률·의료·금융처럼 결과가 무거운 텍스트에서 역번역은 원어민 검수를 보완할 뿐, 결코 대체하지 못합니다.`,
				ja: `プロの翻訳者はいきなり訳し始めません。まず文脈を組み立てます。その規律を3ステップで拝借しましょう。

第一に、文脈を先に載せる。本文の前に、分野(法務・医療・マーケティング・雑談)、読者、目的、そしてUI文字列の最大長といった制約を明示します。2文の文脈が、どんな事後編集よりも訳質を改善することは珍しくありません。

第二に、用語集を維持する。すべての製品名・機能名・役職名には承認済みの訳語がちょうど1つずつあるべきで、そのリストを毎回の翻訳依頼に貼り付けます。用語のブレ — 同じ機能がヘルプセンターのあちこちで3通りに呼ばれる現象 — はAI翻訳ドキュメントで最も多い欠陥ですが、貼り付けた用語集がその大半を消します。訳してはいけない語も含めてください。ブランド名、コード識別子、法律の専門用語などです。

第三に、逆翻訳で検証する。ただし慎重に。訳文を新しいリクエストで(モデルが原文を見てそのまま繰り返せる同一会話内ではなく)元の言語へ訳し戻します。逆翻訳はスモークテストです。脱落、否定の反転、数字の誤りは確実に捕まえますが、ニュアンス・文体・自然さは保証できません。ぎこちない訳文ほど逆翻訳は完璧に通ったりします。法務・医療・金融など結果の重いテキストでは、逆翻訳はネイティブレビューの補助であって、代替には決してなりません。`,
				zh: `专业译者不会立刻动笔,他们先搭建上下文。你可以分三步借用这套纪律。

第一,把上下文放在最前面。在正文之前,写明领域(法律、医疗、营销、日常聊天)、读者、目的,以及诸如 UI 字符串最大长度之类的限制。两句话的背景说明,往往比任何事后修改都更能提升译文质量。

第二,维护术语表。每个产品名、功能名、职位名都应有且只有一个批准译法,并且每次翻译请求都要把这份清单贴进去。术语漂移——同一个功能在帮助中心里被叫成三个名字——是 AI 翻译文档最常见的缺陷,而贴上术语表能消除其中大半。也要列出"不要翻译"的内容:品牌名、代码标识符、法律术语。

第三,用回译来验证,但要小心。在一个全新的请求里(不要在同一段对话里,那样模型能看到原文照抄)把译文翻回源语言。回译是冒烟测试:它能可靠地发现漏译、否定颠倒和数字错误,但无法证明语感、语体和自然度——生硬的译文往往回译得完美无缺。凡涉及法律、医疗、金融后果的文本,回译只能作为母语人工审校的补充,永远不能取而代之。`
			},
			code: {
				example: `Glossary block to prepend to every request:

GLOSSARY (use exactly these translations):
- "Workspace"      -> 워크스페이스 (never 작업 공간)
- "billing cycle"  -> 결제 주기
- "seat"           -> 시트 (a license, not 좌석)
DO NOT TRANSLATE: SDK.ac, OAuth, API key, webhook

CONTEXT: SaaS admin console UI. Max 20 characters
per string. Register: 합쇼체 for buttons, 해요체 for
descriptions. Return a table: source | translation.`
			}
		},
		{
			heading: {
				en: 'What Still Goes Wrong — and When to Call a Human',
				ko: '여전히 틀리는 것들 — 그리고 사람을 불러야 할 때',
				ja: 'それでも間違うもの — 人間に任せるべきとき',
				zh: '仍会出错的地方——以及什么时候该找人工'
			},
			body: {
				en: `Even with perfect prompting, certain categories fail often enough that you should check them by hand every time. Idioms and wordplay translate literally when the model does not recognize them: "break a leg" has become 다리를 부러뜨리세요 in real subtitle tracks. Personal and place names get inconsistent transliteration — 김서연 may appear as Kim Seo-yeon, Seoyeon Kim, and Kim Seoyeon in one document unless you pin a spelling. Dates and numbers silently change format: 03/04/2026 is March 4 in New York and April 3 in London, and Korean 억 (100 million) has no clean English unit, which invites off-by-a-factor errors in financial text. Units, currencies, and legal terms of art (consideration, force majeure, 전세) frequently have no true equivalent and need adaptation, not translation.

Treat AI translation as a highly capable first draft. It is genuinely good enough to publish for low-stakes content — internal notes, community posts, support macros — after a quick read-through. It is not good enough, unreviewed, for contracts, medical instructions, safety warnings, or marketing copy whose tone is the product. The model will not tell you which sentence it was unsure about; it renders confident output either way. A native speaker reading the target text cold, without the source, remains the single highest-value quality check available.`,
				ko: `프롬프트가 완벽해도 자주 틀리는 범주가 있어서 매번 손으로 확인해야 합니다. 관용구와 말장난은 모델이 알아채지 못하면 직역됩니다. "break a leg"가 실제 자막에서 "다리를 부러뜨리세요"가 된 사례가 있습니다. 인명과 지명은 음차가 오락가락합니다. 철자를 고정하지 않으면 김서연이 한 문서 안에서 Kim Seo-yeon, Seoyeon Kim, Kim Seoyeon으로 제각기 등장할 수 있습니다. 날짜와 숫자는 조용히 형식이 바뀝니다. 03/04/2026은 뉴욕에서는 3월 4일, 런던에서는 4월 3일이고, 한국어의 '억'은 깔끔하게 대응하는 영어 단위가 없어 금융 텍스트에서 자릿수 오류를 부릅니다. 단위, 통화, 법률 전문용어(consideration, force majeure, 전세)는 진정한 등가어가 없는 경우가 많아 번역이 아니라 현지화가 필요합니다.

AI 번역은 매우 유능한 초벌 번역으로 취급하세요. 내부 메모, 커뮤니티 글, 지원 매크로 같은 저위험 콘텐츠라면 한 번 훑어본 뒤 게시해도 될 만큼 충분히 좋습니다. 하지만 계약서, 의료 지침, 안전 경고, 톤 자체가 상품인 마케팅 카피는 검수 없이 쓸 수준이 아닙니다. 모델은 어느 문장이 불확실했는지 알려주지 않습니다. 어느 쪽이든 자신만만한 출력을 내놓습니다. 원문 없이 번역문만 처음 읽어보는 원어민 한 명이 지금도 가장 가치 있는 품질 검사입니다.`,
				ja: `プロンプトが完璧でも、頻繁に間違うカテゴリーがあり、毎回手で確認すべきです。慣用句と言葉遊びは、モデルが気づかなければ直訳されます。"break a leg" が実際の字幕で「脚を折ってください」になった例があります。人名・地名の音訳は揺れます。表記を固定しない限り、김서연が同じ文書内で Kim Seo-yeon、Seoyeon Kim、Kim Seoyeon と別々に現れかねません。日付と数値は静かに形式が変わります。03/04/2026 はニューヨークでは3月4日、ロンドンでは4月3日ですし、日本語の「億」や韓国語の「억」には英語の対応単位がなく、金融文書で桁違いの誤りを招きます。単位、通貨、法律の専門用語(consideration、force majeure、韓国の전세)は真の等価語がないことが多く、翻訳ではなく翻案が必要です。

AI翻訳は「非常に有能な下訳」として扱ってください。社内メモ、コミュニティ投稿、サポート定型文といった低リスクのコンテンツなら、一読してから公開するのに十分な品質です。しかし契約書、医療指示、安全警告、トーンそのものが商品であるマーケティングコピーには、レビューなしで使える水準ではありません。モデルはどの文に自信がなかったかを教えてくれません。どちらにせよ自信満々の出力を返します。原文を見ずに訳文だけを読むネイティブ話者こそ、今なお最も価値の高い品質チェックです。`,
				zh: `即使提示词写得完美,仍有一些类别错得足够频繁,每次都值得人工检查。习语和文字游戏在模型没识别出来时会被直译:"break a leg"(祝演出成功)在真实字幕里变成过"把腿摔断吧"。人名地名的音译前后不一——不锁定拼写的话,김서연可能在同一份文档里同时写成 Kim Seo-yeon、Seoyeon Kim 和 Kim Seoyeon。日期和数字会悄悄变格式:03/04/2026 在纽约是3月4日,在伦敦是4月3日;中文的"亿"、韩语的"억"在英语里没有干净的对应单位,金融文本里极易差出一个数量级。单位、货币和法律术语(consideration、force majeure、韩国的전세)常常没有真正的对等词,需要的是本地化改写而不是翻译。

请把 AI 翻译当作一份高水平的初稿。对低风险内容——内部备忘、社区帖子、客服话术——通读一遍后发布,质量确实够用。但对合同、医疗说明、安全警告,以及语气本身就是产品的营销文案,未经审校绝不够格。模型不会告诉你它对哪一句没有把握;无论对错,它输出的口吻都同样自信。让一位母语者在不看原文的情况下冷读译文,至今仍是性价比最高的质量检查。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	let fromLang = 'English';
	let toLang = 'Korean';
	let output = '';
	let copied = false;

	const languages = [
		'English', 'Korean', 'Japanese', 'Chinese', 'Spanish', 'French',
		'German', 'Portuguese', 'Italian', 'Russian', 'Arabic', 'Hindi'
	];

	function translate() {
		if (!input.trim()) return;

		// Generate translation prompt for AI
		output = `Please translate the following text from ${fromLang} to ${toLang}:\n\n"${input}"\n\nProvide only the translation without any explanation.`;
	}

	function swapLanguages() {
		const temp = fromLang;
		fromLang = toLang;
		toLang = temp;
		if (output) translate();
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		input = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('translator.title')} - SDK.ac</title>
	<meta name="description" content={t('translator.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('translator.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('translator.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Language Selection -->
		<div class="flex items-center gap-4">
			<div class="flex-1">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('translator.from')}
				</label>
				<select
					bind:value={fromLang}
					class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
				>
					{#each languages as language}
						<option value={language}>{language}</option>
					{/each}
				</select>
			</div>

			<button
				on:click={swapLanguages}
				class="mt-6 p-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-xl transition-colors"
				aria-label={t('translator.swap')}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
				</svg>
			</button>

			<div class="flex-1">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('translator.to')}
				</label>
				<select
					bind:value={toLang}
					class="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors"
				>
					{#each languages as language}
						<option value={language}>{language}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Input -->
		<div>
			<textarea
				bind:value={input}
				placeholder={t('translator.inputPlaceholder')}
				class="w-full h-40 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={translate}
				disabled={!input.trim()}
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
						{t('ui.output')}
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
