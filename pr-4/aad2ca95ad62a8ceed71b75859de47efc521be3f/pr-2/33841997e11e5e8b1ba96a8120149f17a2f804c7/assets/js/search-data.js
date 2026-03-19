var store = [{
        "title": "The dark ages of `C++20` string formatting",
        "excerpt":"Abhorrent. char strbuf[10+1];int meaning = 42;std::sprintf(strbuf, \"%010d\", meaning);std::string message(strbuf);Soon 21st century will catch up. std::string message = std::format(\"The answer is {:010d}.\", 42);In the meantime, Abseil. #include \"absl/strings/str_format.h\"std::string message = absl::StrFormat(\"The answer is %010d.\", 42);And don’t forget to include str_format in your BUILD Bazel file. cc_binary(  name=\"hello_world\",  deps=[\"@com_google_absl//absl/strings:str_format\",],  srcs=[\"hello_world.cc\"])","categories": [],
        "tags": ["cpp"],
        "url": "https://tkukurin.github.io/hello-world"
      },{
        "title": "Lost in Python",
        "excerpt":"Sometimes a randomshortcut link, Python package or data directorygoes E050, so you look for it. import siteprint('Site packages ahoy', site.getsitepackages())print('Site prefixes ahoy', site.PREFIXES)print('User-specific site', site.USER_SITE)import sysprint('All the places I am looking for things include', sys.path)print('Yeah but where is the virtual env?', sys.prefix)print('Yeah but where is the original Python?', sys.base_prefix)print('Where is...","categories": [],
        "tags": ["py"],
        "url": "https://tkukurin.github.io/pylost"
      },{
        "title": "Catching a main class",
        "excerpt":"Tidbit. Spring raises project entry point issue to the JVM.Stack trace is always iterated from topmost element, though.Call multiple main methods in different classes for misery and loss. private Class&lt;?&gt; deduceMainApplicationClass() { try { StackTraceElement[] stackTrace = new RuntimeException().getStackTrace(); for (StackTraceElement stackTraceElement : stackTrace) { if (\"main\".equals(stackTraceElement.getMethodName())) { return Class.forName(stackTraceElement.getClassName());...","categories": [],
        "tags": ["java"],
        "url": "https://tkukurin.github.io/java-spring-holmes"
      },{
        "title": "Money for nothing and ad-hoc objects for free",
        "excerpt":"Sometimes lazy programmers also need semantically meaningful tuples.For that truly ad-hoc object creation. from types import SimpleNamespacead_hoc = SimpleNamespace( i='can', attach='anything', meaning=42)Or a more principled immutable approach. from typing import NamedTupleClassicNt = NamedTuple( 'ClassicNt', [('i', str), ('attach', str), ('meaning', int)]) class NewNt(NamedTuple): i: str attach: str meaning: int = 42...","categories": [],
        "tags": ["py"],
        "url": "https://tkukurin.github.io/types-simplenamespace"
      },{
        "title": "Lists of NumPy arrays",
        "excerpt":"Are, of course, a stack. import numpy as npxs = [  np.array([1,2]),  np.array([3,4])]xs_asnp = np.stack(xs)","categories": [],
        "tags": ["py"],
        "url": "https://tkukurin.github.io/numpy-stacking"
      },{
        "title": "Dat Python, dataclass",
        "excerpt":"Dataclasses are cool, but what’s cooler is using immutable structures as yourdefault parameters. Do it like so: import dataclasses as dc@dc.dataclass(frozen=True)class MinCut:  T:set = dc.field(    default_factory=set, compare=False)  F:set = dc.field(    default_factory=set, compare=False)Also check out some more magic in the official docs.Of note: representation, __post_init__ hooks, dataclasses.replace fields. ","categories": [],
        "tags": ["py"],
        "url": "https://tkukurin.github.io/dat-class"
      },{
        "title": "Emergent Communications Pretraining for Few-Shot NMT",
        "excerpt":"The functional aspect of language can be captured by artificial multi-agentgames. This paper leverages a listener/speaker (encoder/decoder) paradigm,“referential game on raw images”, to pre-train neural translation models.The kicker is that it’s self-supervised - zero image captions in training data.GitHuband ArXiv. Our key assumption is that grounding communication on images—as a...","categories": [],
        "tags": ["nlp","research"],
        "url": "https://tkukurin.github.io/emergent-comms-for-nmt"
      },{
        "title": "Towards Embodied Language Understanding",
        "excerpt":"ArXiv. Position paper argues forfocusing AI on building mental models. The question of how humans representlanguage internally is shared between NLU(cf. functionalists)and AI. Similar to Bisk et al’srecent Experience Grounds Language andmany earlier works, e.g. Winograd (1971): In order to talk about concepts, we must understand the importance of mentalmodels…...","categories": [],
        "tags": ["nlp","research"],
        "url": "https://tkukurin.github.io/language-remodelling-embodied-language-understanding"
      },{
        "title": "To the Jupyter config and back",
        "excerpt":"Configure Jupyter from ~/.jupyter/jupyter_notebook_config.py.Backend options can be found in jupyter notebook --help. As of Nov 10, 2020 frontend config is still WIP.You can change things in some weird way via front-end JavaScript, though. var cell = Jupyter.notebook.get_selected_cell();var config = cell.config;var patch = { CodeCell : { cm_config: {indentUnit:2} }}config.update(patch)Jupyter uses...","categories": [],
        "tags": ["py"],
        "url": "https://tkukurin.github.io/to-the-jupyter-config-and-back"
      },{
        "title": "Algorithms for Causal Reasoning in Probability Trees",
        "excerpt":"Discrete Probability Trees (or Staged Tree Models) are one of the simplest models of causal generative processes, different from Causal Bayesian Networks (CBNs) and Structural Causal Models (SCMs). A directed edge \\(e=(h,t)\\) between two nodes in this graph is interpreted as the head being the cause of the tail.Every node...","categories": [],
        "tags": ["causality","research"],
        "url": "https://tkukurin.github.io/causal-reasoning-in-proba-trees"
      },{
        "title": "Language Wars",
        "excerpt":"The two major camps in linguistics consist of formalists and functionalists (NB,not the humanistic functionalists).1 Formalists While postulated in the 1930s (?), formalist approaches to language dominatelinguistics post Chomsky’s Syntactic Structures (1957).Chomsky effectively reduces language to grammar, “system of principles,conditions, and rules that are elements or properties of all human...","categories": [],
        "tags": ["linguistics"],
        "url": "https://tkukurin.github.io/chomsky-v-functionalists"
      },{
        "title": "Environmental drivers of systematicity and generalisation in a situated agent",
        "excerpt":"ArXiv. Simple NN architecture performswell in 3D Unity environment, but interesting experiments demonstrate variousaspects significantly affecting performance: (a) the number of object/word experiences in the training set; (b) the visualinvariances afforded by the agent’s perspective, or frame of reference; and(c) the variety of visual input inherent in the perceptual aspect...","categories": [],
        "tags": ["grounding","research"],
        "url": "https://tkukurin.github.io/systematicity-generalization-situated-agent"
      },{
        "title": "[AI4Good 2020] Don't ExplAIn yourself",
        "excerpt":"Some excellent points in Marzyeh Ghassemi’s talk “against explainability”,especially in (applied) AI for medicine.Humans overtrust if AI can perform a function they can’t, or when they expectthe system to mitigate risks (danger of explainability).Focus instead on “healthy” (robust, private, fair) models, healthcare, behavior. That said: prior seems weighted towards disbelieving...","categories": [],
        "tags": ["applied","research"],
        "url": "https://tkukurin.github.io/ai4good-dont-explain-yourself"
      },{
        "title": "An agenda for disinformation research",
        "excerpt":"CCC paper on fighting online disinformation.Categorizes suggested future policies.Calls for the creation of new tools to fight disinformation.Calls for understanding both on the supply and demand end of consumption.Calls for an interdisciplinary approach (blend of humanities, social science,education, journalism, and computer and science […and politics]).Six strategic targets Detection at scale...","categories": [],
        "tags": ["policy","research"],
        "url": "https://tkukurin.github.io/ccc-agenda-for-disinformation-research"
      },{
        "title": "Compositional Reasoning in Early Childhood",
        "excerpt":"PLOS.Motivated by Fodor’s Language Of Thought learning models;composition of simple primitive functions is what allows for the creation ofcomplex cognitive representations.Here they focus on conceptual, not linguistic compositionality (compositionalityof linguistics may or may not be encapsulated within language processing). We show that 3.5–4.5 year olds are able to predictively compose...","categories": [],
        "tags": ["neuro","research"],
        "url": "https://tkukurin.github.io/compositional-reasoning-early-childhood"
      },{
        "title": "Frame semantics",
        "excerpt":"Cf. functionalists,embodied languageand placing language in an integrated understanding system. In the late 1960s Charles Fillmore proposes case grammar, system of linguisticanalysis which consists of semantic roles (Agent A, Object O, Beneficiary B,etc.) required by a specfic verb. E.g. verb to give in “A gave O to B”. This was...","categories": [],
        "tags": ["nlu"],
        "url": "https://tkukurin.github.io/frame-semantics"
      },{
        "title": "Placing language in an integrated understanding system: Next steps toward human-level performance in neural language models",
        "excerpt":"By James McClelland, Felix Hill, Maja Rudolph, Jason Baldridge, Hinrich Schutze. Most our current models focus on language-internal tasks, limiting theirability to perform tasks that depend on understanding situations.Lack memory for recalling prior situations.This paper sketches a framework for future models of understanding. Cf. Rumelhart’s handwriting (in context can be...","categories": [],
        "tags": ["nlu"],
        "url": "https://tkukurin.github.io/placing-language-in-an-integrated-understanding-system"
      },{
        "title": "Importance-weighted Actor-Learner Architecture",
        "excerpt":"IMPALA(no, not the animal; no, not the music band).Also cf. Lilian Weng’s explanation(of much more than just IMPALA). In older approaches (e.g. A3C, UNREAL), each actor computes its own gradient andsends to learner.This is slow, so IMPALA operates on actors’ trajectories instead.Separating learning and acting increases system throughput. The learning...","categories": [],
        "tags": ["rl","research"],
        "url": "https://tkukurin.github.io/impala"
      },{
        "title": "Learning to Speak and Act in a Fantasy Text Adventure Game",
        "excerpt":"Work by FAIR.Available on ParlAI. A text environment. Crowdsourced annotations, including locations, objects andtheir affordances, characters and their personalities, and interactions. 663 game locations from 37 categories Crowd annotation task: from a category, create a description, backstory,names of connected locations, and contained objects and characters. 6 of these categories separated...","categories": [],
        "tags": ["grounding"],
        "url": "https://tkukurin.github.io/learning-to-speak-act-fantasy-game"
      },{
        "title": "Psi: A Computational Architecture",
        "excerpt":"Psi (introduced 1999; this paper 2013)is a formalized computational architecture that simulates cognitive,motivational and emotional processes in their interactions. Covers 14 of the 22 major areas of cognitive functioning (DARPA): memory,learning, executive processes, language, sociality/emotion, consciousness,knowledge representation, logical reasoning, elementary vision, objectperception, spatial perception, spatial cognition, attentional mechanisms, andmotivation. Yet,...","categories": [],
        "tags": ["psy","research"],
        "url": "https://tkukurin.github.io/psi-computational-architecture"
      },{
        "title": "If Deep Learning is the answer, what is the question?",
        "excerpt":"By Andrew Saxe, Stephanie Nelli, Christopher Summerfield.How can neuroscientists use DL to understand biological brains?What are conceptual &amp; methodological challenges of comparing behaviour, learningdynamics, and neural representation in artificial and biological systems?Resurgence of 1980s PDP ideas: current compute can learn from raw data,as opposed to hand-extracted features. Limitations of the...","categories": [],
        "tags": ["neuro","research"],
        "url": "https://tkukurin.github.io/if-dl-is-the-answer"
      },{
        "title": "Levels of biological plausibility",
        "excerpt":"Opinion by Bradley Love.Emergence, reduction, explanation are all different levels of analysis.Scientists should be guided by pragmatic concerns. For instance, practical limitations, such as the precision of measurement,characterization of initial conditions (e.g. butterfly effect), availablecomputing resources, and the cleverness of researchers, will likely be thelimiting factors on what can be...","categories": [],
        "tags": ["neuro","research"],
        "url": "https://tkukurin.github.io/levels-of-bio-plausibility"
      },{
        "title": "Autonomous navigation of stratospheric looney tunes using RL",
        "excerpt":"Nature article by Google Brain and Loon.The problem they are solving is stratospheric superpressure baloon navigation.Balloons can navigate vertically by pumping air, while horizontal motion isachieved by wind currents. RL model is in production at Loon (update:I guess not anymore :(). Balloons should be maintained within 50km of a given...","categories": [],
        "tags": ["rl","research"],
        "url": "https://tkukurin.github.io/looney-tunes"
      },{
        "title": "Go Explore",
        "excerpt":"Go-explore by Ecoffet et al. (Uber AI).Cf. also Quality Diversity Algorithmsand Jeff’s presentation.TL;DR solve Montezuma’s revenge and Pitfall using evolutionary strategies. Grand challenge in RL: deceptive and sparse rewards. Canonical exmaple isMontezuma’s revenge (MR), usually not well handled by traditional RL algo’s andtackled by variants of Intrinsic Motivation (IM) -...","categories": [],
        "tags": ["rl","research"],
        "url": "https://tkukurin.github.io/go-explore"
      },{
        "title": "Object-based attention for spatio-temporal reasoning",
        "excerpt":"Object-based attention for spatio-temporal reasoning: Outperforming neuro-symbolic models with flexible distributed architectures.Evaluated on CLEVRER(CLEVR, but for videos and withcausal questions - think “what would happen if …”)and CATER (CLEVR, but tracking objectpermanence). Builds on attention models (transformer obv). Paper highlights: Self-attention to integrate information over time (isn’t that a trend)....","categories": [],
        "tags": ["rl","research"],
        "url": "https://tkukurin.github.io/spatiotemporal-reasoning-dm"
      },{
        "title": "Predicting Transferability in NLP",
        "excerpt":"Work on transferability.Goal: learn to rank most transferable source tasks for some target task.Conclusions: transfer learning works. transfer gains are possible even with small source datasets out-of-class transfer (different source and target tasks) surprisingly works(though not as well as in-class) similarity between source and target tasks matters more in low-data...","categories": [],
        "tags": ["nlp","research"],
        "url": "https://tkukurin.github.io/predicting-transferability-nlp"
      },{
        "title": "Symbolic Behavior in AI",
        "excerpt":"Symbolic behavior in AI by Santoro et al.Cool position/AI philosophy (is that a fair classification?) paper.Great to see different streams of thought from within DeepMind (also cf. therecent Making sense of sensory input). The paper argues about rethinking our semantic interpretation of symbols, tosome extent positioning itself in contrast to...","categories": [],
        "tags": ["research"],
        "url": "https://tkukurin.github.io/symbolic-behavior-ai"
      },{
        "title": "Making Sense of Sensory Input",
        "excerpt":"Learning Explanatory Rules from Noisy Data (2018)by Evans and Grefenstette.Evans’ work currently seems to also focus on program induction from data (cf.Apperception Engineand Making Sense of Sensory Input). TL;DR version based on this YouTube talk Symbolic Program Synthesis (SPS) isdata-efficient, interpretable, generalizes;not robust to mislabelled or ambiguous data. Neural Program...","categories": [],
        "tags": ["research"],
        "url": "https://tkukurin.github.io/learning-explanatory-rules"
      },{
        "title": "Learning Salon: Recap and Panel Discussion",
        "excerpt":"The Learning Salon is a weekly discussion at the intersection of AI, RL,neuroscience, other topics.This is a semi-chronological account of the Dec 18 Learning Salon session.Overarching themes include functionalism; new learning approaches (motivated byenvironment and other species); sensory perceptions and pain.Where does neuroscience fit in? Functionalism.Functionalists care about what’s inside...","categories": [],
        "tags": ["rl","philosophy","research"],
        "url": "https://tkukurin.github.io/learning-salon-recap-2020"
      },{
        "title": "BERT objectives",
        "excerpt":"A comprehensive up-to-date list of BERT variants (as well as other transformers)can be found on HuggingFace website.Below are just some of the different objectives introduced in these papers. OG BERT The original BERT paper introduced pretraining using transformers in NLP.Also continued the trend of doing PR by naming in ML...","categories": [],
        "tags": ["nlp","transformers","research"],
        "url": "https://tkukurin.github.io/bert-variants"
      },{
        "title": "Learning Salon: Katja Hofmann, Deep RL for Games",
        "excerpt":"Very quick notes from Katja’s Learning Salon talkon Deep RL for Games at MS Cambridge. Links Project Malmo: Minecraft for AI experimentation (GitHub) MineRL focus on sample-efficient usage of humandemonstrations AMRL: Aggregated Memory for RL;goal: navigate a long maze; modification to “standard” RL LSTM adding a memorycell (kind of like...","categories": [],
        "tags": ["neuro","rl"],
        "url": "https://tkukurin.github.io/learning-salon-katja-hofmann"
      },{
        "title": "Semantic Grounding of Novel Spoken Words in the Primary Visual Cortex",
        "excerpt":"Work on embodied theories of grounded semantics (ETGS).From the abstract: [According to EGTS,] when word meaning is 1st acquired, a link is establishedbetween symbol (word form) and corresponding semantic information present inmodality-specific (incl primary) sensorimotor cortices of the brain. [Our workfinds] experimental evidence [of] such a link (showing that presentation...","categories": [],
        "tags": ["neuro"],
        "url": "https://tkukurin.github.io/semantic-grounding-novel-spoken-words"
      },{
        "title": "Learning Salon: Blake Richards",
        "excerpt":"Blake Richards on the Learning Salon. Presentation Broad types of long-term memory: episodic (personal experience) semantic (reasoning) procedural (actionable?)Key features of episodic memory YT(according to Tolding) are autonoetic (means by which you know yourself) one-shot (moments experienced only once) specific (sound, smell, etc) contextualized (e.g. time and place) transient (fast...","categories": [],
        "tags": ["rl","research"],
        "url": "https://tkukurin.github.io/learning-salon-blake-richards"
      },{
        "title": "Kotlin codebase",
        "excerpt":"An exercise in exploring the Kotlin codebase. Kotlin history Search commits for “initial” and sort by oldest,or just go to last page of the repo.Possibly also useful is JetBrains’ issue trackerstarting from earliest Kotlin issues.Apparently Kotlin was initially named JetL (presumably JetBrains Language?).Though it’s been renamed fairly quickly. According to...","categories": [],
        "tags": ["eng"],
        "url": "https://tkukurin.github.io/kotlin"
      },{
        "title": "MuZero",
        "excerpt":"Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model.Great stuff.Prior to studying RL in more detail I was wondering why more people don’t trythis type of hybrid approach; the gist of it is, as with 99% of RL, “it’scomplicated”. Cf. also Julian Schrittwieser’s explanationand DeepMind’s postand Julian’s...","categories": [],
        "tags": ["rl"],
        "url": "https://tkukurin.github.io/muzero"
      },{
        "title": "Learning Salon: Simon Kornblith",
        "excerpt":"YouTube. Presentation: Do CV models need to learn like humans? Simon thinks CV models don’t need to learn the same way as humans. Transfer learning via representation learning is a cornerstone of CV.[I guess of NLP, too, nowadays.] DeCAF (2014)introduced fine-tuning on frozen representations. Correlation between ImageNet and other datasets...","categories": [],
        "tags": ["research"],
        "url": "https://tkukurin.github.io/learning-salon-simon-kornblith"
      },{
        "title": "Emacs config",
        "excerpt":"Likely the best readymade (though somewhat heavyweight) config isDoom-emacsalong with thiscool tutorial. Installation fairly easy: $ pacman -S emacs$ git clone --depth 1 https://github.com/hlissner/doom-emacs ~/.emacs.d$ ~/.emacs.d/bin/doom installCustom files can be modified in ~/.doom.d/.Use init.el to define plugins you wish to use.After change run doom sync. Emacs vanilla config Emacs is...","categories": [],
        "tags": ["tools"],
        "url": "https://tkukurin.github.io/emacs"
      },{
        "title": "Building Athens Research (Clojure/JS)",
        "excerpt":"I have no idea how Clojure frontend works.This is a writeup process of me trying to figure out how to buildAthens. Tooling Athens is a Roam-like opensource personal knowledge base written in Clojure andcompiled via shadow-cljswhich is like a Clojure-to-JS transpiler (?)consisting of a JARand an npm interface.Cf. ClojureScriptand initial...","categories": [],
        "tags": ["tools"],
        "url": "https://tkukurin.github.io/athens-npm-clojure"
      },{
        "title": "Storing episodic memory: place and grid cells",
        "excerpt":"The entorhinal cortex (EC)–hippocampal (HPC) networkplays an essential role for episodic memory, which preserves spatial andtemporal information about the occurrence of past events.EC provides by far the largest input to the hippocampus; anatomical studies showdifferent sectors of the EC project to different levels of the hippocampus.Hippocampus is essential in episodic...","categories": [],
        "tags": ["neuro"],
        "url": "https://tkukurin.github.io/storing-episodic-memory"
      },{
        "title": "Python servers and WSGI",
        "excerpt":"Python servers (e.g. Gunicorn)nowadays I guess mostly implement the WSGIprotocol spec. WSGI was originally motivated by the need to consolidatea growing list of Python web frameworks,kinda similar to Java’s servlet API, and apparently succeeded in its goals. WSGI flow:(1) client sends HTTP requests (does it have to be HTTP? Not...","categories": [],
        "tags": ["eng","py"],
        "url": "https://tkukurin.github.io/python-servers-wsgi"
      },{
        "title": "Studying and prompts",
        "excerpt":"Cf. Andy Matuschak on prompts. Factual prompts Q. What type of chicken parts are used in the stock?A. BonesExplanation prompts make facts more meaningful. Q. Why do we use bones to make chicken stock?A. Because they are full of gelatin, which produces a rich texture.Better – more precise – explanation...","categories": [],
        "tags": ["learning"],
        "url": "https://tkukurin.github.io/studying-and-prompts"
      },{
        "title": "Are Convolutional NNs or Transformers more like Human Vision?",
        "excerpt":"ArXiv and Git repo.Compares human recognition of images to CNNs/Transformers. Error consistency measured via Cohen’s Kappa as with some previous work: \\[\\kappa_{i,j} = \\frac{c_{\\textrm{obs}_{i,j}} - c_{\\textrm{exp}_{i,j}}}{1 - c_{\\textrm{exp}_{i,j}}}\\]Kappa is unable to qualitatively measure two systems’ errors, though, so theygranularize ImageNet classes to 16 higher-level categories to obtain a feasibleconfusion matrix:...","categories": [],
        "tags": ["research","neuro","vision"],
        "url": "https://tkukurin.github.io/conv-v-transformer-v-human"
      },{
        "title": "Ideas about a new programming language for games",
        "excerpt":"Jonathan Blow’s 2014 talk.He’s by now advanced to a beta for the language he started designing way back.Focuses on applications for gaming (i.e. efficiency). The full Jai language playlist on YouTube. A more comprenehsive collection of various talks and resources. Jai primer on GitHubAlternatives to C++:Go is good, but GC’d...","categories": [],
        "tags": ["eng"],
        "url": "https://tkukurin.github.io/jonathan-blow-programming-language-for-games"
      },{
        "title": "Learning salon: Zenna Tavares",
        "excerpt":"Causal probabilistic programming for AI.Presentation starts @05m14s.“I will mostly speculate” since this is not a conference but a salon. Example: perfect spheres for planets.Galileo: “I feel sure that the surface of the moon is not spherical.”How? Essentially Bayesian reasoning.Some imagined generative program a person may use @11m13s: theory ~ t_sphere(p_sphere)...","categories": [],
        "tags": ["neuro","philosophy"],
        "url": "https://tkukurin.github.io/learning-salon-zenna-tavares"
      },{
        "title": "Making Sense of Sensory Input; Apperception code",
        "excerpt":"Apperception Engineand Making Sense of Sensory Input.Ref. to previous post. Apperception: assimilating information into a coherent integrated theory.Escapes traditional ML systems, but Richard Evans is working on some curiousideas in logic programming. The idea is to generate a unified theory from sensory observations: Spatial unity: Objects are united in space...","categories": [],
        "tags": ["research"],
        "url": "https://tkukurin.github.io/apperception-code"
      },{
        "title": "Reward is enough",
        "excerpt":"Quick notes on Reward is enough.I wasn’t aware this paper was supposed to be controversial, but it sparked quitea lively debate on Learning Salon.To me the the paper makes perfect sense. Argues that general intelligence arisesin complex environments, even from seemingly innocuous signals.Wasn’t some version of this written by Skinner...","categories": [],
        "tags": ["research","rl"],
        "url": "https://tkukurin.github.io/reward-is-enough"
      },{
        "title": "Learning Salon: Recap & Discussion",
        "excerpt":"Recap Jane Wang @9m12s:experiments showing meta-learning models capture animal behavior.Meta-learning could happen Sam McDougle @9m51sApplying RL to motor learning Multiple people @10m1sRL applied to spatial navigation.Kim: successor representation. Place cells’ eigenvectors explain grid cells.Haswell &amp; Hugo experiments with humans &amp; rodents for spatial nav. Katja Hofman @10m37sDeep RL in realistic...","categories": [],
        "tags": ["neuro","phil"],
        "url": "https://tkukurin.github.io/learning-salon-recap-2021"
      },{
        "title": "Learning to communicate about shared procedural abstractions",
        "excerpt":"Learning to communicate about shared procedural abstractionsseems like another confirmation of learning being a form of compression.Leans on Convention formation in iterated reference games.Humans use more efficient contextualized language to chunk useful concepts.GitHub repo. Setup 98 humans paired up for a collaborative assembly task in 12 trials.Given a target scene...","categories": [],
        "tags": ["cogsci","research"],
        "url": "https://tkukurin.github.io/learning-to-communicate-shared-abstractions"
      },{
        "title": "Simple Few-Shot Learning with Language Models",
        "excerpt":"FAIR/UCL: Few-shot learning with LMs.Not that interesting results, but cool overview of existing prompt techniques.Focus on masked LM (unlike LTR in e.g. Li and Liang (2021)).Smaller models (RoBERTa, ALBERT) compared to previous work. TL;DR fine-tune some parameters to make prompt optimization less important. [Updating only bias terms] can achieve competitive...","categories": [],
        "tags": ["nlp"],
        "url": "https://tkukurin.github.io/prompt-tuning"
      },{
        "title": "Learning salon: Jane Wang",
        "excerpt":"Jane Wang on the Learning salon.Some of her interesting works: Meta-learning in natural and artificial intelligence PFC as a meta-RL system TL;DR: Dopamine modulates PFC, which learns task structure. Meta-learning as priors learned from previous experience that help informfaster learning or better decisions. @7m24sAlso from overview of meta learning: After...","categories": [],
        "tags": ["neuro","rl"],
        "url": "https://tkukurin.github.io/jane-wang-learning-salon"
      },{
        "title": "Learning salon: Kimberly Stachenfeld",
        "excerpt":"Kimberly Stachenfeld: how do humans andanimals learn structure about the world &amp; use it to rapidly solve new problems?How do we get machines to do the same? TL;DR Does really interesting work on representation in the brain, cf. Representing States &amp; Spaces (w/ Tim Behrens) YouTube tutorial (~3h) GitHub repo...","categories": [],
        "tags": ["neuro","rl"],
        "url": "https://tkukurin.github.io/kim-stachenfeld"
      },{
        "title": "KG-based world models",
        "excerpt":"Ammanabrolu and Riedel frame a Set ofSequences (SOS) generation problem. Contribute loss function + Worldformer. we hypothesize that agents that rely on lifted representations of the worldwill benefit from more than just memorization but the ability to predict howthe graph state representation will change. For example, by inferring that alocked...","categories": [],
        "tags": ["rl","nlp"],
        "url": "https://tkukurin.github.io/kg-based-world-models"
      },{
        "title": "Probing Emergent Semantics in Predictive Agents via Question Answering",
        "excerpt":"Language Grounded (3D environment) Question Answering.Agents optimize an exploration objective with/out self-supervised losses; onlythe latter reliably capture propositional knowledge in internal states(representations can be decoded as answers).Generative SimCore (pixel space),works for QA, contrastive CPC|A doesn’t.Gradient doesn’t propagate from question answers.Claim to corroborate Elman’s findings. Our study is a small example...","categories": [],
        "tags": ["rl","nlp"],
        "url": "https://tkukurin.github.io/probing-emergent-semantics-qa"
      },{
        "title": "Back to Square One: Artifact Detection, Training and Commonsense Disentanglement in the Winograd Schema",
        "excerpt":"From Elazar et al..Evaluated on 2 Winograd corpora (“The X doesn’t fit into Y because it is Z”): Winograd Schema Challenge (WSC, 2012)273 manually curated to minimize influence of priors; e.g. The racecar zoomedby the school bus because it was going so fast (racecars are usually fast). WinoGrande (2019), adversarial...","categories": [],
        "tags": ["nlp"],
        "url": "https://tkukurin.github.io/winograd-transformers"
      },{
        "title": "Conformal Classification of Neural Networks",
        "excerpt":"In deep learning, we train a classifier \\(\\pi\\) to approximate a posterior onclasses \\(y_i \\in [K] = \\{1,\\ldots K\\}\\) given input: \\(\\pi(x) \\approx P(y|x)\\). Conformal Prediction (CP) methods output a set \\(C(x) \\subseteq [K]\\) instead.CP guarantees coverage at \\(1-\\alpha\\); intuitively, \\(C(x)\\) is supposed toresize based on uncertainty levels.Output quality is,...","categories": [],
        "tags": ["ml"],
        "url": "https://tkukurin.github.io/conformal-scoring"
      },{
        "title": "GitHub actions 101",
        "excerpt":"What are GitHub actions? Sets of steps (= workflows) triggered by events.GitHub hosts their virtual machines dedicated to serving GitHub-relatedworkflows in public repos (private cost $$$).Alternatively, you can also self-host action runners (written in C#).Some terminology based on the tutorial: Event: whatever triggers workflows (e.g. on: [push]) Runner: server w/...","categories": [],
        "tags": ["eng","automation"],
        "url": "https://tkukurin.github.io/gh-actions"
      },{
        "title": "Joblib for memoization",
        "excerpt":"I was today years old when I found out Joblib was initially intended foron-disk memoization. If you run the code below multiple times, it should automatically infer whenidentical input gets passed in. Not sure if the cache ever gets evicted? NOTE: if you change the function in any way (e.g....","categories": [],
        "tags": ["eng","py"],
        "url": "https://tkukurin.github.io/joblib"
      },{
        "title": "Tokens for nothing and your (cognitive) chips for free",
        "excerpt":"Via X,got inspired to find good analogies to Cruyff’s quote: Speed is often confused with insight. When I start running earlier than the others, I appear faster. I. Intelligence &amp; Quotes: All this speed is an illusion. Something poetic in prompting LMs to assist with this task.No shade to Cruyff,...","categories": [],
        "tags": ["rng","llm"],
        "url": "https://tkukurin.github.io/thinking-is-hard-gpt-is-fast"
      }]
