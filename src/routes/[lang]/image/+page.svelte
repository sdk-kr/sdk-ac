<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Anatomy of a Prompt That Actually Steers the Model',
				ko: '모델을 실제로 조종하는 프롬프트의 해부학',
				ja: 'モデルを実際に操るプロンプトの解剖学',
				zh: '真正能驾驭模型的提示词解剖'
			},
			body: {
				en: `Diffusion models do not read prompts the way people read sentences. They respond to tokens and learned associations, which is why a structured prompt outperforms an eloquent one. The structure that consistently works orders information by importance: subject first, then medium, style, lighting, composition, and finally technical details.

Subject is the noun phrase plus its action and setting — "an elderly clockmaker repairing a pocket watch at a cluttered workbench" gives the model relationships, not just objects. Specificity here matters more than anywhere else; "beautiful woman" produces the averaged face of the training set, while "freckled woman in her 40s with windswept red hair" produces a person.

Medium decides the entire rendering pipeline: photograph, oil painting, watercolor, 3D render, charcoal sketch. It should come early because it constrains everything after it — film grain makes no sense in a watercolor.

Style narrows within the medium: film noir, Studio Ghibli, 1970s National Geographic, Art Nouveau. Then lighting and composition (next sections), then parameters like aspect ratio.

Order matters for a mechanical reason: most models weight earlier tokens more heavily, and long prompts get truncated or diluted at the tail. Put anything you cannot compromise on in the first ten words, and treat everything after word forty as a suggestion the model may ignore.`,
				ko: `디퓨전 모델은 사람이 문장을 읽듯 프롬프트를 읽지 않습니다. 토큰과 학습된 연관에 반응합니다. 그래서 유려한 프롬프트보다 구조화된 프롬프트가 성능이 좋습니다. 꾸준히 통하는 구조는 정보를 중요도 순으로 배열합니다. 주제 먼저, 그다음 매체, 스타일, 조명, 구도, 마지막에 기술적 세부.

주제는 명사구에 동작과 배경을 더한 것입니다. '어수선한 작업대에서 회중시계를 수리하는 나이 든 시계공'은 모델에게 사물만이 아니라 관계를 줍니다. 구체성이 다른 어디보다 여기서 중요합니다. '아름다운 여성'은 학습 데이터의 평균 얼굴을 낳고, '바람에 흩날리는 붉은 머리에 주근깨가 있는 40대 여성'은 한 사람을 낳습니다.

매체는 렌더링 파이프라인 전체를 결정합니다. 사진, 유화, 수채화, 3D 렌더, 목탄 스케치. 뒤에 오는 모든 것을 제약하므로 앞쪽에 와야 합니다. 수채화에 '필름 그레인'은 말이 안 됩니다.

스타일은 매체 안에서 좁혀 들어갑니다. 필름 누아르, 스튜디오 지브리, 1970년대 내셔널 지오그래픽, 아르누보. 그다음 조명과 구도(다음 섹션), 그다음 종횡비 같은 매개변수.

순서가 중요한 데는 기계적인 이유가 있습니다. 대부분의 모델은 앞쪽 토큰에 더 큰 가중치를 주고, 긴 프롬프트는 꼬리가 잘리거나 희석됩니다. 양보할 수 없는 것은 첫 열 단어 안에 넣고, 마흔 번째 단어 이후는 모델이 무시해도 되는 제안으로 취급하세요.`,
				ja: `拡散モデルは、人が文章を読むようにはプロンプトを読みません。トークンと学習された連想に反応します。だからこそ、雄弁なプロンプトより構造化されたプロンプトのほうが成果を出します。一貫して機能する構造は、情報を重要度順に並べます。まず主題、次に画材、スタイル、照明、構図、最後に技術的な詳細。

主題は名詞句に動作と舞台を加えたものです。「散らかった作業台で懐中時計を修理する年老いた時計職人」は、モデルに物体だけでなく関係を与えます。具体性が他のどこよりもここで重要です。「美しい女性」は学習データの平均顔を生み、「風になびく赤毛でそばかすのある40代の女性」は1人の人間を生みます。

画材はレンダリングのパイプライン全体を決めます。写真、油絵、水彩、3Dレンダー、木炭スケッチ。後続のすべてを制約するので、早い位置に置くべきです。水彩画に「フィルムグレイン」は意味を成しません。

スタイルは画材の中をさらに絞ります。フィルムノワール、スタジオジブリ、1970年代のナショナルジオグラフィック、アールヌーヴォー。その後に照明と構図(次のセクション)、それからアスペクト比などのパラメータ。

順序が重要なのには機械的な理由があります。ほとんどのモデルは前方のトークンに大きな重みを与え、長いプロンプトは末尾が切り捨てられるか薄まります。譲れないものは最初の10語以内に入れ、40語目以降はモデルが無視してもよい提案として扱ってください。`,
				zh: `扩散模型不会像人读句子那样读提示词,它响应的是 token 和学到的关联——这就是为什么结构化的提示词胜过文采斐然的提示词。持续有效的结构按重要性排列信息:先主体,然后是媒介、风格、光照、构图,最后才是技术细节。

主体是名词短语加上动作和场景——"一位年迈的钟表匠在杂乱的工作台前修理怀表"给模型的是关系,而不只是物件。具体性在这里比任何地方都重要:"美丽的女人"产出的是训练集的平均脸,"四十多岁、红发被风吹乱、有雀斑的女人"产出的才是一个人。

媒介决定整条渲染管线:照片、油画、水彩、3D 渲染、炭笔素描。它应该靠前,因为它约束后面的一切——水彩画里谈"胶片颗粒"毫无意义。

风格在媒介内部继续收窄:黑色电影、吉卜力、1970 年代国家地理、新艺术运动。然后是光照与构图(见下文),最后是宽高比之类的参数。

顺序重要有一个机械原因:多数模型给靠前的 token 更高权重,长提示词的尾部会被截断或稀释。把你绝不妥协的内容放进前十个词,把第四十个词之后的一切当作模型可以无视的建议。`
			}
		},
		{
			heading: {
				en: 'Midjourney, Stable Diffusion, DALL-E: Same Words, Different Machines',
				ko: '미드저니, 스테이블 디퓨전, DALL-E: 같은 단어, 다른 기계',
				ja: 'Midjourney・Stable Diffusion・DALL-E:同じ言葉、違う機械',
				zh: 'Midjourney、Stable Diffusion、DALL-E:同样的词,不同的机器'
			},
			body: {
				en: `A prompt is not portable. The three major ecosystems parse weighting, negatives, and parameters differently, and pasting one engine's syntax into another silently does nothing — or worse, becomes literal text in the scene.

Midjourney uses double-colon weighting (ocean::2 sky::0.5), command-line style parameters (--ar 16:9 for aspect ratio, --chaos for variety, --sref for style reference images), and a --no parameter for exclusions (--no text, watermark). It leans stylized and opinionated by default; plain prompts still come out pretty.

Stable Diffusion ecosystems (AUTOMATIC1111, ComfyUI) use parenthesis weighting — (golden hour:1.3) boosts a concept, values below 1 suppress it — and a genuinely separate negative prompt field, which is the main quality lever: deformed hands, extra fingers, watermark, low quality live there, not in the main prompt. Base SD is far more literal than Midjourney, and results swing enormously with the checkpoint model you load.

DALL-E and similar natural-language systems invert the whole approach: no weights, no negative field. They are trained to follow prose, so you write a clear descriptive paragraph and state exclusions as sentences ("no text anywhere in the image"). Token-soup prompts actually perform worse here.

This tool outputs comma-separated keyword prompts — the dialect Midjourney and SD share. For DALL-E-style systems, ask an LLM to rewrite the keyword list as flowing prose first.`,
				ko: `프롬프트는 이식되지 않습니다. 3대 생태계는 가중치, 네거티브, 매개변수를 다르게 해석하고, 한 엔진의 문법을 다른 엔진에 붙여넣으면 조용히 아무 일도 일어나지 않거나 — 더 나쁘게는 — 장면 속 글자가 되어버립니다.

미드저니는 이중 콜론 가중치(ocean::2 sky::0.5), 커맨드라인식 매개변수(종횡비 --ar 16:9, 다양성 --chaos, 스타일 참조 이미지 --sref), 그리고 제외를 위한 --no 매개변수(--no text, watermark)를 씁니다. 기본값부터 양식화되고 주관이 강해서, 밋밋한 프롬프트도 일단 '예쁘게' 나옵니다.

스테이블 디퓨전 생태계(AUTOMATIC1111, ComfyUI)는 괄호 가중치를 씁니다. (golden hour:1.3)은 개념을 강화하고 1 미만 값은 억제합니다. 그리고 진짜로 분리된 네거티브 프롬프트 칸이 있는데, 이것이 주된 품질 레버입니다. deformed hands, extra fingers, watermark, low quality는 본 프롬프트가 아니라 거기에 삽니다. 기본 SD는 미드저니보다 훨씬 문자 그대로이고, 어떤 체크포인트 모델을 로드하느냐에 따라 결과가 크게 출렁입니다.

DALL-E 계열의 자연어 시스템은 접근 전체를 뒤집습니다. 가중치도 네거티브 칸도 없습니다. 산문을 따르도록 훈련됐으므로 명확한 서술 문단을 쓰고 제외는 문장으로 진술합니다('이미지 어디에도 글자 없음'). 토큰 범벅 프롬프트는 여기서 오히려 성능이 떨어집니다.

이 도구는 쉼표로 구분된 키워드 프롬프트 — 미드저니와 SD가 공유하는 방언 — 를 출력합니다. DALL-E식 시스템에는 먼저 LLM에게 키워드 목록을 흐르는 산문으로 다시 써 달라고 하세요.`,
				ja: `プロンプトは移植できません。3大エコシステムは重み付け・ネガティブ・パラメータを異なる方法で解釈し、あるエンジンの構文を別のエンジンに貼り付けても、静かに何も起きないか — もっと悪いことに — 画面内の文字になってしまいます。

Midjourneyはダブルコロンの重み付け(ocean::2 sky::0.5)、コマンドライン風のパラメータ(アスペクト比の--ar 16:9、多様性の--chaos、スタイル参照画像の--sref)、除外用の--noパラメータ(--no text, watermark)を使います。デフォルトから様式化されていて主張が強く、平凡なプロンプトでもとりあえず「綺麗」に仕上がります。

Stable Diffusionのエコシステム(AUTOMATIC1111、ComfyUI)は括弧の重み付けを使います。(golden hour:1.3)は概念を強め、1未満の値は抑えます。そして本当に独立したネガティブプロンプト欄があり、これが品質の主レバーです。deformed hands、extra fingers、watermark、low qualityはメインではなくそこに住みます。素のSDはMidjourneyよりはるかに字義通りで、ロードするチェックポイントモデル次第で結果が大きく揺れます。

DALL-E系の自然言語システムはアプローチ全体を反転させます。重みもネガティブ欄もありません。散文に従うよう訓練されているので、明確な描写の段落を書き、除外は文として述べます(「画像内のどこにも文字を入れない」)。トークンの寄せ集めプロンプトは、ここではむしろ成績が落ちます。

このツールはカンマ区切りのキーワードプロンプト — MidjourneyとSDが共有する方言 — を出力します。DALL-E式のシステムには、まずLLMにキーワードリストを流れる散文に書き直してもらいましょう。`,
				zh: `提示词是不可移植的。三大生态对权重、负面词和参数的解析方式各不相同;把一个引擎的语法粘到另一个引擎里,要么悄无声息地失效,更糟的是,变成画面里的文字。

Midjourney 用双冒号加权(ocean::2 sky::0.5)、命令行式参数(--ar 16:9 控制宽高比、--chaos 控制多样性、--sref 引用风格图),以及排除用的 --no 参数(--no text, watermark)。它默认就风格化、有主见,平淡的提示词也能出"好看"的图。

Stable Diffusion 生态(AUTOMATIC1111、ComfyUI)用括号加权——(golden hour:1.3) 增强一个概念,小于 1 的值削弱它——还有真正独立的负面提示词栏,这才是主要的质量杠杆:deformed hands、extra fingers、watermark、low quality 都住在那里,而不是主提示词里。原生 SD 比 Midjourney 字面得多,而且结果随你加载的 checkpoint 模型剧烈波动。

DALL-E 及类似的自然语言系统把整套思路反过来:没有权重,没有负面栏。它们被训练成理解散文,所以你要写一段清晰的描述性文字,把排除项写成句子("图中任何位置都不要出现文字")。关键词大杂烩式提示词在这里反而表现更差。

这个工具输出的是逗号分隔的关键词提示词——Midjourney 和 SD 共用的方言。要用于 DALL-E 式系统,先让大语言模型把关键词列表改写成流畅的散文。`
			},
			code: {
				example: `Same intent, three dialects:

Midjourney:
lighthouse on a cliff, storm waves::2, oil painting,
dramatic lighting --ar 16:9 --no boats, text

Stable Diffusion:
oil painting of a lighthouse on a cliff,
(storm waves:1.3), dramatic lighting
Negative prompt: boats, text, watermark, blurry

DALL-E style:
An oil painting of a lighthouse on a cliff battered
by storm waves. Dramatic lighting, wide 16:9
composition. No boats and no text in the image.`
			}
		},
		{
			heading: {
				en: 'The Vocabulary That Moves the Image: Light, Framing, Glass',
				ko: '이미지를 움직이는 어휘: 빛, 프레이밍, 렌즈',
				ja: '画を動かす語彙:光・フレーミング・レンズ',
				zh: '真正改变画面的词汇:光、构图、镜头'
			},
			body: {
				en: `Most quality words in circulating prompts are noise. Masterpiece, best quality, highly detailed, 8k are cargo-cult tokens — harmless on some models, meaningless on others. The vocabulary that reliably changes the image comes from photography and cinematography, because the training captions did.

Lighting is the highest-leverage category. Golden hour produces warm low-angle light and long shadows; blue hour a cool dusk glow. Rembrandt lighting gives the lit cheek triangle in portraits; rim lighting separates the subject from a dark background; soft diffused light from a north-facing window is the classic portrait recipe; harsh midday sun creates documentary flatness. Each phrase carries a whole learned scene.

Composition words set the camera you never held: extreme close-up, low-angle shot (power), bird's-eye view, rule of thirds, negative space (minimalist isolation), dutch angle (unease). Lens and film tokens finish the job: 85mm f/1.4 implies creamy background blur; 24mm wide angle implies environmental context and slight distortion; macro implies extreme detail at tiny scale; shot on Portra 400 pulls a specific warm film palette; long exposure smooths water and streaks lights.

Pick one term per category. Stacking golden hour, neon lighting, and overcast does not blend three moods — it makes the model average them into mud.`,
				ko: `떠도는 프롬프트 속 품질 단어 대부분은 소음입니다. masterpiece, best quality, highly detailed, 8k는 화물숭배 토큰입니다. 어떤 모델에서는 무해하고 어떤 모델에서는 무의미합니다. 이미지를 확실하게 바꾸는 어휘는 사진과 촬영술에서 옵니다. 학습 캡션이 거기서 왔기 때문입니다.

조명이 지렛대가 가장 큰 범주입니다. golden hour는 따뜻한 저각도 빛과 긴 그림자를 만들고, blue hour는 차가운 황혼의 광채를 만듭니다. Rembrandt lighting은 인물 사진에서 한쪽 뺨의 빛 삼각형을 주고, rim lighting은 어두운 배경에서 피사체를 분리하며, 북향 창의 부드러운 확산광은 고전적인 초상 레시피이고, 한낮의 강한 태양은 다큐멘터리 특유의 평평함을 만듭니다. 각 구절이 통째로 학습된 장면 하나를 실어 나릅니다.

구도 단어는 당신이 잡아본 적 없는 카메라를 세팅합니다. extreme close-up, low-angle shot(위압감), bird's-eye view, rule of thirds, negative space(미니멀한 고립), dutch angle(불안감). 렌즈와 필름 토큰이 마무리합니다. 85mm f/1.4는 크리미한 배경 흐림을, 24mm wide angle은 환경적 맥락과 약간의 왜곡을, macro는 아주 작은 스케일의 극단적 디테일을, shot on Portra 400은 특정한 따뜻한 필름 팔레트를, long exposure는 물을 매끄럽게 하고 빛을 줄무늬로 만듭니다.

범주당 하나만 고르세요. golden hour, neon lighting, overcast를 쌓으면 세 분위기가 섞이는 게 아니라, 모델이 평균 내서 진흙으로 만듭니다.`,
				ja: `出回っているプロンプトの品質ワードの大半はノイズです。masterpiece、best quality、highly detailed、8kはカーゴカルト的トークンで、あるモデルでは無害、別のモデルでは無意味です。画像を確実に変える語彙は写真と撮影技術から来ます。学習用キャプションがそこから来ているからです。

照明が最もレバレッジの高いカテゴリーです。golden hourは暖かい低角度の光と長い影を、blue hourは冷たい夕暮れの輝きを生みます。Rembrandt lightingはポートレートで頬に光の三角形を作り、rim lightingは暗い背景から被写体を切り離し、北向きの窓からの柔らかい拡散光は古典的な肖像のレシピで、真昼の強い日差しはドキュメンタリー的な平板さを作ります。各フレーズが、学習済みの場面をまるごと運んでくるのです。

構図の言葉は、あなたが握ったことのないカメラを設定します。extreme close-up、low-angle shot(威圧感)、bird's-eye view、rule of thirds、negative space(ミニマルな孤立)、dutch angle(不安感)。レンズとフィルムのトークンが仕上げます。85mm f/1.4はとろけるような背景ボケを、24mm wide angleは環境の文脈とわずかな歪みを、macroは微小スケールの極端なディテールを、shot on Portra 400は特定の暖かいフィルムパレットを、long exposureは水を滑らかにし光を筋にします。

カテゴリーごとに1語だけ選びましょう。golden hour、neon lighting、overcastを積み重ねても3つのムードは混ざりません。モデルが平均化して泥にするだけです。`,
				zh: `流传的提示词里,大多数"质量词"都是噪音。masterpiece、best quality、highly detailed、8k 是货物崇拜式的 token——在某些模型上无害,在另一些模型上无意义。真正能稳定改变画面的词汇来自摄影和电影摄影,因为训练用的图片说明就来自那里。

光照是杠杆最大的类别。golden hour 带来温暖的低角度光和长影;blue hour 是冷调的暮色光晕。Rembrandt lighting 在人像上留下标志性的脸颊光三角;rim lighting 把主体从暗背景中剥离;北向窗户的柔和漫射光是经典人像配方;正午烈日制造纪实式的平直感。每个短语都携带着一整个学到的场景。

构图词设定那台你从未握过的相机:extreme close-up、low-angle shot(压迫感)、bird's-eye view、rule of thirds、negative space(极简的孤立感)、dutch angle(不安)。镜头和胶片 token 负责收尾:85mm f/1.4 意味着奶油般的背景虚化;24mm wide angle 意味着环境交代和轻微畸变;macro 意味着微小尺度的极致细节;shot on Portra 400 调出特定的暖调胶片色盘;long exposure 抹平水面、拉出光轨。

每个类别只挑一个词。把 golden hour、neon lighting、overcast 叠在一起,不会融合三种氛围——只会让模型把它们平均成一滩泥。`
			},
			code: {
				example: `Flat prompt:
portrait of an old fisherman, masterpiece, 8k,
highly detailed, best quality, amazing

Photographic prompt:
portrait of an old fisherman mending a net,
weathered hands in focus, Rembrandt lighting,
overcast harbor at dawn, 85mm f/1.4, shallow
depth of field, Kodak Portra 400, rule of thirds`
			}
		},
		{
			heading: {
				en: 'Iterate Like a Photographer, Not a Slot Machine',
				ko: '슬롯머신이 아니라 사진가처럼 반복하라',
				ja: 'スロットマシンではなく写真家のように反復する',
				zh: '像摄影师一样迭代,而不是拉老虎机'
			},
			body: {
				en: `The default failure mode of prompt iteration is the slot-machine loop: generate, dislike, rewrite the whole prompt, repeat. Because every run rerolls the random seed, you learn nothing — you cannot tell whether the image changed because of your edit or because of the dice.

The photographer's loop changes one variable at a time against a fixed seed. In Stable Diffusion, set the seed explicitly; in Midjourney, use --seed. With the seed pinned, regenerate after each single edit: swap golden hour for overcast, add one weight, remove one adjective. Now differences in the output are attributable to your change, and after a session you own a private phrasebook of what each token does in your engine.

A practical session shape: run one loose exploration batch (4–8 images, no seed) to find a composition worth pursuing; pin that seed; then do attribute passes — lighting first, then style, then cleanup via negative prompt or --no. Save the full prompt and seed with every keeper; a great image whose recipe you lost is a one-off, not a capability.

And know when to leave the prompt box: fixing one wrong hand or one object is inpainting work (or a Vary Region job), not a reason to re-roll a composition you already like.`,
				ko: `프롬프트 반복의 기본 실패 모드는 슬롯머신 루프입니다. 생성하고, 마음에 안 들고, 프롬프트 전체를 다시 쓰고, 반복. 매 실행이 랜덤 시드를 다시 굴리기 때문에 아무것도 배우지 못합니다. 이미지가 당신의 수정 때문에 바뀌었는지 주사위 때문에 바뀌었는지 구분할 수 없으니까요.

사진가의 루프는 고정된 시드에 대해 한 번에 변수 하나만 바꿉니다. 스테이블 디퓨전에서는 시드를 명시적으로 설정하고, 미드저니에서는 --seed를 쓰세요. 시드를 고정한 채 수정 하나마다 재생성하세요. golden hour를 overcast로 바꾸고, 가중치 하나를 더하고, 형용사 하나를 빼고. 이제 출력의 차이는 당신의 변경 덕분이라고 말할 수 있고, 한 세션이 끝나면 당신의 엔진에서 각 토큰이 무슨 일을 하는지에 대한 개인 관용구집이 생깁니다.

실전 세션의 모양: 느슨한 탐색 배치(4~8장, 시드 없이)를 한 번 돌려 추구할 만한 구도를 찾고, 그 시드를 고정하고, 속성별 패스를 돕니다. 조명 먼저, 그다음 스타일, 그다음 네거티브 프롬프트나 --no로 청소. 건질 이미지마다 전체 프롬프트와 시드를 저장하세요. 레시피를 잃어버린 걸작은 능력이 아니라 일회성 행운입니다.

그리고 프롬프트 입력창을 떠날 때를 아세요. 잘못된 손 하나, 사물 하나를 고치는 것은 인페인팅(또는 Vary Region) 작업이지, 이미 마음에 드는 구도를 다시 굴릴 이유가 아닙니다.`,
				ja: `プロンプト反復のデフォルトの失敗モードは、スロットマシンのループです。生成し、気に入らず、プロンプト全体を書き直し、繰り返す。毎回の実行がランダムシードを振り直すため、何も学べません。画像が変わったのが自分の編集のせいか、サイコロのせいか、区別できないからです。

写真家のループは、固定したシードに対して一度に1つの変数だけを変えます。Stable Diffusionではシードを明示的に設定し、Midjourneyでは--seedを使います。シードを固定したまま、1つ編集するたびに再生成します。golden hourをovercastに替える、重みを1つ加える、形容詞を1つ削る。これで出力の違いはあなたの変更に帰属でき、セッションが終わる頃には、自分のエンジンで各トークンが何をするかの私家版フレーズ集が手に入ります。

実践的なセッションの形:まず緩い探索バッチ(4〜8枚、シードなし)を回して追いかける価値のある構図を見つけ、そのシードを固定し、属性ごとのパスを行います。照明が先、次にスタイル、最後にネガティブプロンプトや--noで掃除。残す画像には必ずプロンプト全文とシードを保存してください。レシピを失った傑作は、能力ではなく一回きりの偶然です。

そして、プロンプト欄を離れるべきときを知りましょう。おかしな手や物体を1つ直すのはインペインティング(またはVary Region)の仕事であって、すでに気に入っている構図を振り直す理由ではありません。`,
				zh: `提示词迭代的默认失败模式是老虎机循环:生成、不满意、把整条提示词重写、再来。因为每次运行都会重掷随机种子,你什么也学不到——你分不清画面的变化是因为你的修改,还是因为骰子。

摄影师的循环是:固定种子,一次只改一个变量。在 Stable Diffusion 里显式设置 seed;在 Midjourney 里用 --seed。种子钉住后,每做一次单独修改就重新生成:把 golden hour 换成 overcast,加一个权重,删一个形容词。这样输出的差异就能归因于你的改动;一场下来,你会攒出一本"每个 token 在我的引擎里到底干什么"的私人词典。

一次实用的工作流:先跑一批松散探索(4-8 张,不定种子)找到值得深挖的构图;钉住那个种子;然后按属性分轮修改——先光照,再风格,最后用负面提示词或 --no 清场。每张留用图都保存完整提示词和种子;丢了配方的神图只是一次性运气,不是能力。

还要知道何时离开提示词输入框:修一只画错的手、删一个多余的物体,是局部重绘(或 Vary Region)的活,不是把你已经喜欢的构图重掷一遍的理由。`
			}
		},
		{
			heading: {
				en: 'Failure Modes and Honest Limits',
				ko: '실패 유형과 정직한 한계',
				ja: '失敗パターンと正直な限界',
				zh: '失败模式与诚实的局限'
			},
			body: {
				en: `Some failures are prompt problems; some are model problems; knowing which is which saves hours.

Contradictory tokens produce mud: minimalist plus intricate details, or two competing art styles, average into neither. Concept bleed is subtler — attributes wander between subjects, so "a red-haired woman and a man in a blue coat" often swaps the hair and the coat. Weighting helps; separating the subjects into different regions (or generating separately and compositing) helps more.

Other limits are structural, and no phrasing fixes them reliably: legible text in images (improving, still unreliable — plan to add typography in an editor), hands and interlocking fingers, correct object counts above three or four, and physical plausibility in mechanisms like bicycles and clocks. Budget retouching for these instead of burning fifty generations.

Two verification notes worth taking seriously. Style tokens borrowed from a builder can carry unexpected baggage — a tag you did not research may pull in an aesthetic you did not intend, so test unfamiliar tokens on a fixed seed before relying on them. And for commercial use, check the license terms of your specific generator; if a prompt names a living artist, weigh both the ethics and the increasingly active legal landscape before publishing.`,
				ko: `어떤 실패는 프롬프트 문제고 어떤 실패는 모델 문제입니다. 어느 쪽인지 아는 것이 몇 시간을 아껴줍니다.

모순된 토큰은 진흙을 만듭니다. minimalist에 intricate details를 더하거나 경쟁하는 두 화풍을 넣으면 어느 쪽도 아닌 평균이 나옵니다. 개념 번짐은 더 교묘합니다. 속성이 피사체 사이를 떠돌아서, '빨간 머리 여자와 파란 코트의 남자'는 종종 머리색과 코트를 맞바꿉니다. 가중치가 도움이 되고, 피사체를 다른 영역으로 분리하거나(또는 따로 생성해 합성하거나) 하면 더 도움이 됩니다.

다른 한계들은 구조적이라 어떤 표현도 확실히 고치지 못합니다. 이미지 속 읽을 수 있는 글자(나아지고 있지만 여전히 불안정 — 타이포그래피는 편집기에서 얹을 계획을 세우세요), 손과 맞물린 손가락, 서너 개를 넘는 정확한 개체 수, 자전거나 시계 같은 기계 장치의 물리적 타당성. 이런 것들은 50번 재생성에 태우지 말고 리터칭 예산을 잡으세요.

진지하게 받아들일 검증 노트 둘. 빌더에서 빌려온 스타일 토큰은 예상 밖의 짐을 실어올 수 있습니다. 조사하지 않은 태그가 의도하지 않은 미학을 끌어들일 수 있으니, 낯선 토큰은 고정 시드에서 시험한 뒤에 의존하세요. 그리고 상업적 사용이라면 사용하는 생성기의 라이선스 조건을 확인하고, 프롬프트에 생존 작가의 이름이 들어간다면 게시 전에 윤리와 점점 활발해지는 법적 지형을 함께 저울질하세요.`,
				ja: `失敗にはプロンプトの問題とモデルの問題があり、どちらなのかを見分けられると何時間も節約できます。

矛盾するトークンは泥を生みます。minimalistにintricate detailsを足したり、競合する2つの画風を入れたりすると、どちらでもない平均が出てきます。概念の滲みはより巧妙です。属性が被写体の間をさまよい、「赤毛の女性と青いコートの男性」はしばしば髪とコートを取り違えます。重み付けは助けになり、被写体を別の領域に分ける(あるいは別々に生成して合成する)ほうがもっと効きます。

他の限界は構造的で、どんな言い回しでも確実には直りません。画像内の読めるテキスト(改善中ですがまだ不安定 — 文字は編集ソフトで載せる計画を)、手と絡み合う指、3〜4個を超える正確な個数、自転車や時計のような機構の物理的整合性。これらは50回の再生成に費やすのではなく、レタッチの予算を組みましょう。

真剣に受け取るべき検証ノートを2つ。ビルダーから借りたスタイルトークンは予想外の荷物を運んでくることがあります。調べていないタグが意図しない美学を引き込むかもしれないので、見慣れないトークンは固定シードで試してから頼ってください。そして商用利用なら、使う生成サービスのライセンス条件を確認し、プロンプトに存命アーティストの名前を入れる場合は、公開前に倫理と、ますます活発になる法的状況の両方を天秤にかけてください。`,
				zh: `有些失败是提示词的问题,有些是模型的问题;分得清两者能省下几个小时。

自相矛盾的 token 只会产出泥浆:minimalist 加 intricate details,或两种互相竞争的画风,平均出来两边都不是。概念渗漏更隐蔽——属性会在主体之间游走,"红发女人和穿蓝外套的男人"经常把头发和外套互换。加权有帮助;把主体分到不同区域(或分开生成再合成)帮助更大。

另一些局限是结构性的,任何措辞都无法稳定修复:图像里可读的文字(在进步,但仍不可靠——文字排版请留到编辑软件里加)、手和交叠的手指、超过三四个之后的准确数量,以及自行车、钟表这类机械结构的物理合理性。给这些留出修图预算,别烧五十次重生成。

两条值得认真对待的核查提醒。从构建器借来的风格 token 可能夹带你意想不到的行李——一个你没研究过的标签可能引入你并不想要的美学,所以陌生 token 先在固定种子上测试再依赖。商用之前,查清你所用生成器的授权条款;若提示词里出现在世艺术家的名字,发布前请同时掂量伦理问题和日益活跃的法律动向。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let subject = '';
	type ImageStyle = 'photorealistic' | 'digital' | 'anime' | 'oil' | 'watercolor' | '3d';
	type MoodType = 'dramatic' | 'peaceful' | 'mysterious' | 'vibrant';
	let style: ImageStyle = 'photorealistic';
	let mood: MoodType = 'dramatic';
	let output = '';
	let copied = false;

	const styleModifiers = {
		photorealistic: 'ultra realistic, high resolution, 8k, photograph, DSLR, professional photography',
		digital: 'digital art, trending on artstation, detailed illustration, vibrant colors',
		anime: 'anime style, studio ghibli, manga, detailed anime art, beautiful anime',
		oil: 'oil painting, classical art style, painterly, textured canvas, masterpiece',
		watercolor: 'watercolor painting, soft edges, flowing colors, artistic, delicate',
		'3d': '3D render, octane render, cinema 4d, blender, highly detailed, volumetric lighting'
	};

	const moodModifiers = {
		dramatic: 'dramatic lighting, cinematic, high contrast, intense atmosphere',
		peaceful: 'calm, serene, soft lighting, gentle, harmonious, tranquil',
		mysterious: 'dark and moody, foggy, enigmatic, shadowy, ethereal',
		vibrant: 'colorful, energetic, bright, lively, dynamic colors, bold'
	};

	function generate() {
		if (!subject.trim()) return;

		const prompt = `${subject}, ${styleModifiers[style]}, ${moodModifiers[mood]}, highly detailed, masterpiece, best quality`;
		output = prompt;
	}

	function copyOutput() {
		if (!output) return;
		navigator.clipboard.writeText(output);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	function clear() {
		subject = '';
		output = '';
	}
</script>

<svelte:head>
	<title>{t('image.title')} - SDK.ac</title>
	<meta name="description" content={t('image.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('image.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('image.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Subject Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.subject')}
			</label>
			<textarea
				bind:value={subject}
				placeholder={t('image.subjectPlaceholder')}
				class="w-full h-24 px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-colors"
			></textarea>
		</div>

		<!-- Style Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.style')}
			</label>
			<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
				{#each ['photorealistic', 'digital', 'anime', 'oil', 'watercolor', '3d'] as s}
					<button
						on:click={() => style = s as ImageStyle}
						class="px-3 py-2 rounded-lg text-sm font-medium transition-colors {style === s
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`image.styles.${s}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Mood Selection -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('image.mood')}
			</label>
			<div class="flex flex-wrap gap-2">
				{#each ['dramatic', 'peaceful', 'mysterious', 'vibrant'] as m}
					<button
						on:click={() => mood = m as MoodType}
						class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {mood === m
							? 'bg-primary-400 text-dark-900'
							: 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{t(`image.moods.${m}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex gap-3">
			<button
				on:click={generate}
				disabled={!subject.trim()}
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
						{t('image.result')}
					</label>
					<button
						on:click={copyOutput}
						class="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-600 dark:text-dark-300 rounded-lg transition-colors"
					>
						{copied ? t('ui.copied') : t('ui.copy')}
					</button>
				</div>
				<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl">
					<p class="text-sm text-gray-800 dark:text-dark-200">{output}</p>
				</div>
			</div>
		{/if}
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
