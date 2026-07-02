<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Extractive vs Abstractive: Two Very Different Machines',
				ko: '추출 요약 vs 생성 요약: 완전히 다른 두 기계',
				ja: '抽出型と生成型:まったく異なる2つの仕組み',
				zh: '抽取式与生成式:两种截然不同的机器'
			},
			body: {
				en: `Every automatic summarizer belongs to one of two families, and knowing which one you are using changes how much you should trust the output.

Extractive summarizers select sentences that already exist in the source. Classic algorithms like TextRank build a graph of sentences, score them by similarity to the rest of the document, and return the top-ranked ones verbatim. The result is often choppy — pronouns dangle, transitions break — but it has one enormous virtue: every sentence in the summary is guaranteed to appear in the original. An extractive system cannot invent a fact.

Abstractive summarizers, which include every LLM-based tool, generate new sentences that paraphrase and compress the source. The output reads fluently, merges points across paragraphs, and can adapt tone and length on request. The price is that generation is exactly the mechanism that produces hallucination: the model writes the most statistically plausible summary, and plausible is not the same as faithful. Research on abstractive summarization has consistently found "unfaithful" content in machine summaries — details that sound right but are not in, or are contradicted by, the source.

Practical consequence: use abstractive summaries for speed and readability, but treat every specific claim — numbers, names, dates, causal statements — as unverified until you have checked it against the original. The fluency of the summary tells you nothing about its accuracy.`,
				ko: `모든 자동 요약기는 두 계열 중 하나에 속하고, 어느 쪽을 쓰고 있는지 아는 것만으로 출력을 얼마나 신뢰할지가 달라집니다.

추출(extractive) 요약기는 원문에 이미 존재하는 문장을 골라냅니다. TextRank 같은 고전 알고리즘은 문장 그래프를 만들어 문서 전체와의 유사도로 점수를 매기고 상위 문장을 그대로 반환합니다. 결과는 종종 삐걱거립니다. 대명사가 허공에 뜨고 문장 연결이 끊깁니다. 하지만 거대한 장점이 하나 있습니다. 요약 속 모든 문장이 원문에 있음이 보장됩니다. 추출 시스템은 사실을 지어낼 수 없습니다.

생성(abstractive) 요약기 — LLM 기반 도구 전부가 여기 속합니다 — 는 원문을 바꿔 쓰고 압축한 새 문장을 만들어냅니다. 출력은 매끄럽게 읽히고, 여러 문단의 논점을 합치며, 요청에 따라 톤과 길이를 조절합니다. 대가는 생성이라는 메커니즘 자체가 환각(hallucination)을 만든다는 것입니다. 모델은 통계적으로 가장 그럴듯한 요약을 쓰는데, 그럴듯함과 충실함은 같지 않습니다. 생성 요약 연구는 기계 요약에서 "원문에 없거나 원문과 모순되는데 맞는 것처럼 들리는" 내용을 일관되게 발견해 왔습니다.

실무적 결론: 속도와 가독성을 위해 생성 요약을 쓰되, 숫자·이름·날짜·인과 진술 같은 구체적 주장 하나하나는 원문과 대조하기 전까지 미검증 상태로 취급하세요. 요약이 유창하다는 사실은 정확성에 대해 아무것도 말해주지 않습니다.`,
				ja: `自動要約は必ず2つの系統のどちらかに属し、どちらを使っているかを知るだけで、出力をどれだけ信頼すべきかが変わります。

抽出型(extractive)は、原文に既に存在する文を選び出します。TextRankのような古典的アルゴリズムは文のグラフを作り、文書全体との類似度でスコア付けし、上位の文をそのまま返します。結果はしばしばぎこちなく、代名詞が宙に浮き、接続が切れます。しかし巨大な美点が1つあります。要約中のすべての文が原文にあることが保証されるのです。抽出型は事実を捏造できません。

生成型(abstractive)— LLMベースのツールはすべてこちら — は、原文を言い換え圧縮した新しい文を生成します。出力は流暢で、段落をまたいで論点を統合し、指示に応じてトーンや長さも変えられます。その代償は、生成というメカニズムこそがハルシネーションを生むことです。モデルは統計的に最ももっともらしい要約を書きますが、もっともらしさと忠実さは別物です。生成要約の研究では、「正しそうに聞こえるが原文になく、あるいは原文と矛盾する」内容が機械要約から一貫して見つかっています。

実務上の結論:速さと読みやすさのために生成型要約を使いつつ、数値・名前・日付・因果関係の記述といった具体的な主張は、原文と照合するまで未検証として扱ってください。要約が流暢であることは、正確さについて何も語りません。`,
				zh: `每个自动摘要工具都属于两大流派之一,而知道自己用的是哪一种,就足以改变你对输出的信任程度。

抽取式(extractive)摘要从原文中挑选已经存在的句子。TextRank 之类的经典算法把句子建成图,按与全文的相似度打分,然后原封不动地返回得分最高的句子。结果往往生硬——代词悬空、承接断裂——但它有一个巨大的优点:摘要里的每一句话都保证出现在原文中。抽取式系统无法编造事实。

生成式(abstractive)摘要——所有基于 LLM 的工具都属于此类——会生成改写并压缩原文的新句子。输出读起来流畅,能跨段落合并要点,还能按要求调整语气和长度。代价在于,"生成"这个机制本身就是幻觉的来源:模型写出的是统计上最合理的摘要,而"合理"不等于"忠实"。对生成式摘要的研究一再发现机器摘要中存在"不忠实"内容——听起来没错,但原文里没有,甚至与原文相矛盾。

实际结论:为了速度和可读性尽管用生成式摘要,但对每一个具体断言——数字、人名、日期、因果表述——在与原文核对之前都要当作未经验证。摘要的流畅程度,与它的准确性毫无关系。`
			}
		},
		{
			heading: {
				en: 'Compression Ratio: Deciding What a Summary Is For',
				ko: '압축률: 요약의 목적부터 정하기',
				ja: '圧縮率:要約の目的を先に決める',
				zh: '压缩比:先想清楚摘要是干什么用的'
			},
			body: {
				en: `"Summarize this" is an underspecified request, and underspecified requests get generic answers. The single most useful parameter you can set is the compression ratio — how much of the original survives — because it forces you to decide what the summary is for.

A 1-sentence summary (roughly 50:1 compression on a typical article) answers "should I read this at all?" It must name the topic and the single most important finding, nothing else. A 3-5 bullet summary (about 10:1) answers "what would I have learned?" — it should carry the main claims and the strongest piece of evidence for each. A 1-2 paragraph summary (about 4:1) answers "can I discuss this without reading it?" and needs the argument structure: what was claimed, what supports it, what the caveats were. Beyond that, you are writing an abridgement, not a summary.

Two settings matter almost as much. Audience: a summary of a medical paper for a physician keeps effect sizes and confidence intervals; the same paper for a patient keeps what changed and what to ask a doctor. And extraction targets: telling the tool "always preserve all numbers, dates, and named people exactly as written" measurably reduces the most damaging class of summary errors, because it steers the model away from paraphrasing precisely the details it is most likely to garble.`,
				ko: `"이거 요약해 줘"는 정보가 부족한 요청이고, 정보가 부족한 요청은 밋밋한 답을 받습니다. 설정할 수 있는 가장 유용한 매개변수 하나는 압축률 — 원문의 얼마가 살아남는가 — 입니다. 압축률을 정하려면 요약의 목적부터 정해야 하기 때문입니다.

한 문장 요약(일반 기사 기준 약 50:1 압축)은 "이걸 읽어야 하나?"에 답합니다. 주제와 가장 중요한 결론 하나만 담아야 하고 그 이상은 안 됩니다. 3~5개 불릿 요약(약 10:1)은 "읽었다면 무엇을 배웠을까?"에 답합니다. 핵심 주장들과 각 주장의 가장 강한 근거를 담아야 합니다. 1~2문단 요약(약 4:1)은 "읽지 않고도 이 글에 대해 대화할 수 있나?"에 답하며, 논증 구조 — 무엇을 주장했고, 무엇이 뒷받침하고, 어떤 단서 조항이 있었는지 — 가 필요합니다. 그 이상은 요약이 아니라 축약본을 쓰는 것입니다.

거의 그만큼 중요한 설정이 둘 있습니다. 독자: 의학 논문을 의사용으로 요약하면 효과 크기와 신뢰구간을 남기고, 같은 논문을 환자용으로 요약하면 무엇이 달라졌고 의사에게 무엇을 물어야 하는지를 남깁니다. 그리고 보존 대상: "모든 숫자, 날짜, 인명은 원문 그대로 보존하라"고 지시하면 가장 치명적인 유형의 요약 오류가 눈에 띄게 줄어듭니다. 모델이 가장 망가뜨리기 쉬운 디테일을 바꿔 쓰지 않도록 유도하기 때문입니다.`,
				ja: `「これを要約して」は情報不足の依頼であり、情報不足の依頼には無難な答えしか返ってきません。設定できる最も有用なパラメータは圧縮率 — 原文のどれだけを残すか — です。圧縮率を決めるには、要約の目的を決めざるを得ないからです。

1文要約(一般的な記事で約50:1の圧縮)は「そもそも読むべきか?」に答えます。主題と最重要の結論を1つだけ。それ以外は入れません。3〜5個の箇条書き(約10:1)は「読んだら何を学べたか?」に答えます。主要な主張と、それぞれの最も強い根拠を運ぶべきです。1〜2段落(約4:1)は「読まずにこの内容を議論できるか?」に答え、論証の構造 — 何が主張され、何が支え、どんな留保があったか — が必要です。それ以上は要約ではなく抄録の執筆です。

ほぼ同じくらい重要な設定が2つ。読者:医学論文を医師向けに要約するなら効果量と信頼区間を残し、同じ論文を患者向けにするなら「何が変わるのか」「医師に何を聞くべきか」を残します。そして保存対象:「数値・日付・人名はすべて原文どおり保持せよ」と指示すると、最も被害の大きい種類の要約エラーが目に見えて減ります。モデルが最も壊しやすいディテールを言い換えないよう誘導できるからです。`,
				zh: `"帮我总结一下"是一个信息不足的请求,而信息不足的请求只会得到平庸的回答。你能设置的最有用的参数是压缩比——原文能留下多少——因为它逼你先想清楚这份摘要是干什么用的。

一句话摘要(对一般文章约 50:1 的压缩)回答的是"我到底要不要读?"它只能包含主题和唯一最重要的结论,别无其他。3-5 条要点式摘要(约 10:1)回答"读完我能学到什么?"——应当承载主要论点和每个论点最有力的证据。1-2 段的摘要(约 4:1)回答"不读原文我能不能参与讨论?",需要完整的论证结构:主张是什么、依据是什么、有哪些限定条件。压缩比再放宽,你写的就不是摘要,而是节略本了。

还有两个几乎同样重要的设置。读者:给医生总结医学论文要保留效应量和置信区间;同一篇论文给患者总结,要保留的是"什么变了"和"该问医生什么"。以及保留目标:告诉工具"所有数字、日期、人名必须原样保留",能显著减少危害最大的一类摘要错误,因为它引导模型不去改写那些最容易被写错的细节。`
			},
			code: {
				example: `Vague request:
"Summarize this article."

Specified request:
"Summarize the article below.
- Length: exactly 4 bullets, max 20 words each
- Audience: a product manager deciding whether to read it
- Preserve ALL numbers, dates, and names exactly as written
- Final line: one sentence on what the author wants readers to do
- If the article contradicts itself, say so instead of smoothing it over"`
			}
		},
		{
			heading: {
				en: 'Hallucination in Summaries: Where It Hides and How to Catch It',
				ko: '요약 속 환각: 어디에 숨고 어떻게 잡아내는가',
				ja: '要約のハルシネーション:どこに潜み、どう捕まえるか',
				zh: '摘要中的幻觉:藏在哪里,怎么抓出来'
			},
			body: {
				en: `Summary hallucinations are rarely dramatic inventions. They are small, confident distortions that survive a casual read. Knowing the recurring shapes makes them much easier to catch.

Entity swaps: the study found X, but the summary attributes it to the wrong group, drug, or company — especially when the source discusses several. Number drift: 18% becomes 80%, "nearly half" becomes "most," millions become billions. Modality laundering: "may reduce risk" becomes "reduces risk"; a hypothesis in the source becomes a finding in the summary. Causal upgrades: "A was associated with B" becomes "A causes B" — the most common and most damaging distortion in summaries of research. Negation loss: "no significant difference was found" quietly becomes "a difference was found." And premature synthesis: when a document presents two opposing views, the model sometimes merges them into one blended claim that neither side made.

A five-minute verification routine catches most of these. Extract every number, date, name, and causal verb from the summary, then search the original for each one — checking the summary against the source is far faster than re-reading the source. Ask the tool to quote the exact sentence supporting each bullet; a claim it cannot ground in a quotation is the claim to distrust. And for anything you will forward to other people, re-summarize in a second pass and compare: inconsistent details between two runs are a reliable hallucination signal.`,
				ko: `요약 환각은 극적인 날조인 경우가 드뭅니다. 대충 읽으면 살아남는 작고 자신만만한 왜곡입니다. 반복되는 유형을 알면 잡아내기가 훨씬 쉬워집니다.

개체 뒤바꿈: 연구는 X를 발견했는데 요약은 그것을 엉뚱한 집단·약물·회사에 귀속시킵니다. 원문이 여러 대상을 다룰 때 특히 그렇습니다. 숫자 표류: 18%가 80%가 되고, "거의 절반"이 "대부분"이 되고, 수백만이 수십억이 됩니다. 양태 세탁: "위험을 줄일 수도 있다"가 "위험을 줄인다"가 되고, 원문의 가설이 요약에서는 확정된 결론이 됩니다. 인과 승격: "A는 B와 상관이 있었다"가 "A가 B를 일으킨다"가 됩니다. 연구 요약에서 가장 흔하고 가장 해로운 왜곡입니다. 부정 소실: "유의한 차이가 발견되지 않았다"가 조용히 "차이가 발견되었다"가 됩니다. 그리고 성급한 종합: 문서가 대립하는 두 견해를 제시하면, 모델이 어느 쪽도 주장한 적 없는 하나의 혼합 주장으로 합쳐버리기도 합니다.

5분짜리 검증 루틴이 이 대부분을 잡습니다. 요약에서 모든 숫자·날짜·이름·인과 동사를 뽑아 원문에서 하나씩 검색하세요. 요약을 원문에 대조하는 것이 원문을 다시 읽는 것보다 훨씬 빠릅니다. 각 불릿을 뒷받침하는 원문 문장을 그대로 인용하라고 요구하세요. 인용으로 근거를 대지 못하는 주장이 바로 의심해야 할 주장입니다. 다른 사람에게 전달할 내용이라면 두 번째 요약을 돌려 비교하세요. 두 실행 사이에 디테일이 어긋나면 그것이 신뢰할 만한 환각 신호입니다.`,
				ja: `要約のハルシネーションが派手な捏造であることは稀です。ざっと読むと生き残る、小さくて自信ありげな歪みです。繰り返し現れる型を知っておくと、格段に捕まえやすくなります。

エンティティのすり替え:研究がXを発見したのに、要約はそれを別の集団・薬剤・企業に帰属させる。原文が複数の対象を扱うときに特に起きます。数値のドリフト:18%が80%に、「ほぼ半数」が「大多数」に、数百万が数十億になる。様相のロンダリング:「リスクを減らす可能性がある」が「リスクを減らす」になり、原文の仮説が要約では確定した知見になる。因果の格上げ:「AはBと相関していた」が「AはBを引き起こす」になる。研究要約で最も多く、最も有害な歪みです。否定の消失:「有意差は認められなかった」がいつの間にか「差が認められた」になる。そして早すぎる統合:文書が対立する2つの見解を示すと、モデルがどちらの側も主張していない混合された主張に融合してしまうことがあります。

5分の検証ルーチンで大半を捕まえられます。要約からすべての数値・日付・名前・因果動詞を抜き出し、原文で1つずつ検索する — 要約を原文に照合するほうが、原文を読み直すよりはるかに速い。各箇条書きを支える原文の文をそのまま引用させる — 引用で根拠を示せない主張こそ疑うべき主張です。他人に転送するものなら、もう一度要約させて比較する — 2回の実行間でディテールが食い違えば、それは信頼できるハルシネーションのシグナルです。`,
				zh: `摘要中的幻觉很少是夸张的凭空捏造,而是一些细小、自信、粗读时能蒙混过关的扭曲。了解它们的惯常形态,抓起来就容易得多。

实体错位:研究发现的是 X,摘要却把它归到错误的组别、药物或公司名下——原文讨论多个对象时尤其常见。数字漂移:18% 变成 80%,"近半数"变成"大多数",百万变成十亿。语气洗白:"可能降低风险"变成"降低风险";原文中的假设,到摘要里成了结论。因果升级:"A 与 B 相关"变成"A 导致 B"——这是研究类摘要中最常见、危害最大的扭曲。否定丢失:"未发现显著差异"悄悄变成"发现了差异"。还有过早综合:当文档呈现两种对立观点时,模型有时会把它们合并成一个双方都没说过的混合主张。

一套五分钟的核查流程能抓住其中大部分。把摘要里所有数字、日期、名字和因果动词提取出来,逐一回原文搜索——拿摘要对照原文,远比重读原文快。要求工具为每条要点引用原文中的支撑句;凡是给不出原文引句的断言,就是最该怀疑的断言。凡是要转发给别人的内容,再跑一遍摘要并对比两次结果:两次运行之间细节不一致,是相当可靠的幻觉信号。`
			},
			code: {
				example: `Source sentence:
"In the trial, drug A was associated with an 18% relative
reduction in events; the difference was not statistically
significant (p = 0.09)."

Hallucinated summary (3 distortions in one line):
"Drug A significantly reduces events by 18%."
  1. association -> causation ("reduces")
  2. "not significant" -> "significantly"
  3. relative reduction presented as absolute effect

Faithful summary:
"Drug A was associated with 18% fewer events,
 but the result was not statistically significant."`
			}
		},
		{
			heading: {
				en: 'Long Documents: Chunking, Map-Reduce, and What Gets Lost',
				ko: '긴 문서: 청킹, 맵리듀스, 그리고 사라지는 것들',
				ja: '長文書:チャンク分割、Map-Reduce、そして失われるもの',
				zh: '长文档:分块、Map-Reduce,以及会丢失什么'
			},
			body: {
				en: `When a document exceeds what fits comfortably in one request, summarizers fall back to a map-reduce strategy: split the text into chunks, summarize each chunk, then summarize the summaries. It works, but each stage is lossy, and the losses are not random. Cross-chunk connections die first — an objection raised in section 2 and answered in section 7 becomes two disconnected fragments, or the objection survives while the answer does not. Themes that recur weakly everywhere but peak nowhere (a running caveat, a recurring minor character) fall below every chunk's local relevance threshold and vanish entirely.

There is also a position bias worth knowing about: models weight the beginning and end of a long context more heavily than the middle — the "lost in the middle" effect documented in retrieval research. In practice, the middle third of a long report is where summary coverage is thinnest.

You can push back on all of this. Split on structural boundaries (chapters, sections) rather than fixed character counts, so no chunk starts mid-argument. Ask for chunk summaries that explicitly note open questions and forward references, so the reduce step can reconnect them. For contracts and papers, run a second targeted pass: "list every obligation/limitation/date in this document" — enumeration prompts have much better recall than free-form summaries. And when a document really matters, summarize it twice with different chunkings and merge what each run missed.`,
				ko: `문서가 한 번의 요청에 넉넉히 들어가는 크기를 넘으면, 요약기는 맵리듀스 전략으로 후퇴합니다. 텍스트를 청크로 쪼개고, 청크마다 요약하고, 그 요약들을 다시 요약하는 방식입니다. 작동은 하지만 각 단계가 손실을 내고, 그 손실은 무작위가 아닙니다. 청크를 가로지르는 연결이 먼저 죽습니다. 2절에서 제기되고 7절에서 반박된 이의는 서로 끊긴 두 조각이 되거나, 이의는 살아남고 답변은 사라집니다. 어디서나 약하게 반복되지만 어디서도 정점을 찍지 않는 주제(계속 붙는 단서 조항, 반복 등장하는 조연)는 모든 청크의 국지적 중요도 문턱에 걸려 통째로 증발합니다.

알아둘 만한 위치 편향도 있습니다. 모델은 긴 컨텍스트의 시작과 끝을 중간보다 무겁게 취급합니다. 검색 연구에서 문서화된 "lost in the middle" 효과입니다. 실제로 긴 보고서의 가운데 3분의 1이 요약 커버리지가 가장 얇은 곳입니다.

전부 대응할 수 있습니다. 고정 글자 수가 아니라 구조적 경계(장, 절)에서 분할해 어떤 청크도 논증 한가운데서 시작하지 않게 하세요. 청크 요약에 미해결 질문과 뒤쪽 참조를 명시적으로 적게 해서 reduce 단계가 다시 이어붙일 수 있게 하세요. 계약서와 논문은 표적 2차 패스를 돌리세요. "이 문서의 모든 의무/제한/날짜를 나열하라" — 열거형 프롬프트는 자유 형식 요약보다 재현율이 훨씬 높습니다. 정말 중요한 문서라면 다른 청킹으로 두 번 요약해 각 실행이 놓친 것을 병합하세요.`,
				ja: `文書が1回のリクエストに収まる量を超えると、要約ツールはMap-Reduce戦略に後退します。テキストをチャンクに分割し、チャンクごとに要約し、その要約群をさらに要約する方式です。機能はしますが、各段階が損失を生み、その損失はランダムではありません。チャンクをまたぐ結び付きが最初に死にます。第2節で提起され第7節で回答された反論は、切り離された2つの断片になるか、反論だけ生き残って回答が消えます。どこでも弱く繰り返されるがどこでも頂点に達しないテーマ(繰り返される但し書き、たびたび登場する脇役)は、すべてのチャンクの局所的な重要度の閾値を下回り、丸ごと消滅します。

知っておくべき位置バイアスもあります。モデルは長いコンテキストの冒頭と末尾を中間より重く扱います。検索研究で報告された「lost in the middle」効果です。実際、長いレポートの中間3分の1が、要約のカバレッジが最も薄い場所です。

すべて対策できます。固定文字数ではなく構造上の境界(章・節)で分割し、どのチャンクも議論の途中から始まらないようにする。チャンク要約に未解決の問いと後方参照を明記させ、reduce段階で再接続できるようにする。契約書や論文には狙いを絞った2次パスを走らせる。「この文書のすべての義務/制限/日付を列挙せよ」— 列挙型プロンプトは自由形式の要約より再現率がはるかに高いのです。本当に重要な文書なら、異なる分割で2回要約し、それぞれの実行が取りこぼしたものを統合してください。`,
				zh: `当文档超出一次请求能舒适容纳的长度时,摘要工具会退回到 Map-Reduce 策略:把文本切成块,逐块摘要,再对这些摘要做二次摘要。方法可行,但每一级都有损耗,而且损耗并不随机。跨块的关联最先死掉——第 2 节提出、第 7 节回应的质疑,会变成两个互不相干的碎片,或者质疑留下了、回应却没了。那些处处弱弱出现、却从未在某处达到峰值的主题(贯穿全文的限定条件、反复出现的次要角色),会低于每个块的局部重要性阈值,彻底消失。

还有一个值得了解的位置偏差:模型对长上下文开头和结尾的权重高于中间——这就是检索研究中记录的"lost in the middle"效应。实践中,长报告的中间三分之一正是摘要覆盖最薄弱的地方。

这些都有对策。按结构边界(章、节)切分而不是按固定字符数,让任何块都不从论证中途开始。要求块级摘要显式记录悬而未决的问题和向后引用,让归并阶段能重新接上。对合同和论文再跑一次定向遍历:"列出本文档中的所有义务/限制/日期"——枚举式提示的召回率远高于自由式摘要。真正重要的文档,用不同的切块方式摘要两遍,把两次各自漏掉的内容合并起来。`
			},
			code: {
				example: `Targeted second pass (much higher recall than a summary):

"From the contract below, produce three exhaustive lists:
 1. Every obligation of the Customer (quote the clause number)
 2. Every fee, amount, and payment deadline
 3. Every termination or renewal condition
If a clause is ambiguous, list it under 'UNCLEAR' with the
clause number. Do not omit items to save space."`
			}
		},
		{
			heading: {
				en: 'When Not to Summarize',
				ko: '요약하지 말아야 할 때',
				ja: '要約すべきでないとき',
				zh: '什么时候不该做摘要'
			},
			body: {
				en: `A summary is a decision about what does not matter, delegated to a machine. Sometimes that delegation is wrong regardless of quality.

Do not rely on summaries of documents whose force is in exact wording: contracts, laws, medical dosing instructions, safety procedures, exam requirements. A paraphrase of "must" as "should," or the silent omission of one exception clause, changes the meaning at precisely the point where meaning has consequences. Use enumeration prompts to build a checklist, then read the flagged clauses yourself in the original.

Be cautious with texts whose point is the experience of reading them — literary writing, persuasive essays, dense philosophical arguments. A summary of these captures the "what" and destroys the "how," and the "how" was often the content. Similarly, summarizing a heated email thread strips the tone that tells you who is frustrated and why; skimming the originals is usually safer before you reply.

Finally, mind the compounding problem: summaries of summaries degrade fast. Each pass re-applies the same biases — position bias, modality laundering, loss of caveats — so by the third generation the text can be fluent, confident, and substantially disconnected from the source. Keep a link to the original attached to every summary you store or share, and when a decision hangs on a detail, let the summary tell you where to look, not what is true.`,
				ko: `요약이란 "무엇이 중요하지 않은가"에 대한 결정을 기계에 위임하는 일입니다. 품질과 무관하게 그 위임 자체가 잘못인 경우가 있습니다.

정확한 문구에 효력이 담긴 문서 — 계약서, 법령, 약물 투여 지침, 안전 절차, 시험 요건 — 는 요약에 의존하지 마세요. "해야 한다(must)"가 "하는 것이 좋다(should)"로 바뀌거나 예외 조항 하나가 조용히 빠지는 순간, 의미가 결과를 좌우하는 바로 그 지점에서 의미가 달라집니다. 열거형 프롬프트로 체크리스트를 만든 뒤, 표시된 조항은 원문에서 직접 읽으세요.

읽는 경험 자체가 핵심인 텍스트 — 문학적 글, 설득하는 에세이, 촘촘한 철학적 논증 — 도 조심하세요. 이런 글의 요약은 "무엇"을 붙잡고 "어떻게"를 부수는데, 그 "어떻게"가 곧 내용인 경우가 많습니다. 마찬가지로 감정이 격해진 이메일 스레드를 요약하면 누가 왜 화가 났는지 알려주는 톤이 벗겨집니다. 답장하기 전에는 원문을 훑는 편이 대체로 안전합니다.

마지막으로 누적 문제를 경계하세요. 요약의 요약은 빠르게 열화됩니다. 매 단계가 같은 편향 — 위치 편향, 양태 세탁, 단서 조항 소실 — 을 다시 적용해서, 3세대쯤 되면 유창하고 자신만만하지만 원문과 실질적으로 단절된 텍스트가 됩니다. 저장하거나 공유하는 모든 요약에 원문 링크를 붙여 두고, 결정이 디테일에 달려 있을 때는 요약이 "무엇이 사실인지"가 아니라 "어디를 봐야 하는지"만 알려주게 하세요.`,
				ja: `要約とは「何が重要でないか」の決定を機械に委任することです。品質と関係なく、その委任自体が誤りである場合があります。

正確な文言に効力が宿る文書 — 契約書、法令、薬の用量指示、安全手順、試験要件 — の要約に頼ってはいけません。「しなければならない」が「したほうがよい」に言い換えられたり、例外条項が1つ静かに落ちたりした瞬間、意味が結果を左右するまさにその箇所で意味が変わります。列挙型プロンプトでチェックリストを作り、フラグの付いた条項は原文で自分で読んでください。

読む体験そのものが本質のテキスト — 文学的な文章、説得のエッセイ、緻密な哲学的論証 — にも注意が必要です。これらの要約は「何を」を捉えて「どのように」を壊しますが、その「どのように」こそが内容だったということが多い。同様に、感情のこもったメールスレッドの要約は、誰がなぜ苛立っているかを伝えるトーンを剥ぎ取ります。返信の前には原文に目を通すほうがたいてい安全です。

最後に、累積の問題に気をつけてください。要約の要約は急速に劣化します。各パスが同じバイアス — 位置バイアス、様相のロンダリング、但し書きの喪失 — を再適用するため、3世代目には流暢で自信に満ちながら原文から実質的に切断されたテキストになり得ます。保存・共有するすべての要約に原文へのリンクを添え、意思決定がディテールに懸かっているときは、要約には「何が真実か」ではなく「どこを見るべきか」だけを教えさせてください。`,
				zh: `摘要,本质上是把"什么不重要"这个决定委托给机器。有些时候,无论质量高低,这种委托本身就是错的。

凡效力寄托在精确措辞上的文档——合同、法规、用药剂量说明、安全规程、考试要求——都不要依赖摘要。"必须"被改写成"应当",或某条例外条款被悄悄省略,意义就在最要命的地方变了。用枚举式提示生成核查清单,然后自己去原文里读那些被标记的条款。

对以阅读体验为本的文本——文学作品、说服性随笔、缜密的哲学论证——也要谨慎。这类文本的摘要抓住了"说了什么",却毁掉了"怎么说的",而"怎么说的"往往才是内容本身。同理,总结一条火药味十足的邮件线程,会剥掉那些告诉你谁在恼火、为何恼火的语气;回复之前,扫一遍原文通常更稳妥。

最后,当心复利效应:摘要的摘要退化得很快。每一轮都会重新施加同样的偏差——位置偏差、语气洗白、限定条件丢失——到第三代,文本可能依然流畅自信,实质上却已与原文脱节。给你保存或分享的每份摘要都附上原文链接;当决策取决于某个细节时,让摘要告诉你"该看哪里",而不是"什么是真的"。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	type LengthType = 'short' | 'medium' | 'long';
	let length: LengthType = 'medium';
	let output = '';
	let copied = false;

	function summarize() {
		if (!input.trim()) return;

		const sentences = input.match(/[^.!?]+[.!?]+/g) || [input];
		const words = input.split(/\s+/).length;

		let summaryLength = 0;
		if (length === 'short') {
			summaryLength = Math.min(2, sentences.length);
		} else if (length === 'medium') {
			summaryLength = Math.min(Math.ceil(sentences.length * 0.3), 5);
		} else {
			summaryLength = Math.min(Math.ceil(sentences.length * 0.5), 10);
		}

		// Simple extractive summary - take first N sentences
		const summarySentences = sentences.slice(0, Math.max(1, summaryLength));
		output = summarySentences.join(' ').trim();

		// Add statistics
		const summaryWords = output.split(/\s+/).length;
		const reduction = Math.round((1 - summaryWords / words) * 100);
		output += `\n\n---\nOriginal: ${words} words | Summary: ${summaryWords} words | Reduced by ${reduction}%`;
	}

	function copyOutput() {
		if (!output) return;
		const textOnly = output.split('\n---')[0].trim();
		navigator.clipboard.writeText(textOnly);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		input = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('summarizer.title')} - SDK.ac</title>
	<meta name="description" content={t('summarizer.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('summarizer.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('summarizer.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('summarizer.input')}
			</label>
			<textarea
				bind:value={input}
				placeholder={t('summarizer.inputPlaceholder')}
				class="w-full h-48 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Length Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('summarizer.length')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['short', 'medium', 'long'] as len}
					<button
						on:click={() => length = len as LengthType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {length === len
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`summarizer.lengths.${len}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={summarize}
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
						{t('summarizer.result')}
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
