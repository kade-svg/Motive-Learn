/* Motive Learn — a local-first learning companion. */
'use strict';

const STORE_KEY = 'motiveLearn.v1';
const QUESTS = [
  {id:'lesson', icon:'📘', title:'Learn something new', detail:'Finish one lesson', field:'lessons', target:1, reward:20},
  {id:'answers', icon:'🧠', title:'Warm up your brain', detail:'Answer five questions', field:'answers', target:5, reward:15},
  {id:'correct', icon:'🎯', title:'Find your rhythm', detail:'Get three answers right', field:'correct', target:3, reward:15}
];

const Q = (prompt, options, answer, explanation) => ({prompt, options, answer, explanation});
const COURSES = [
  {id:'spanish', title:'Spanish', category:'Languages', emoji:'🇪🇸', tint:'#ffede5', color:'#df805a', desc:'Build confidence with useful words, phrases and everyday conversation.', subtitle:'A little Spanish goes a long way.', levels:[
    {title:'First phrases',desc:'Say hello, introduce yourself and be polite.',questions:[
      Q('What does “hola” mean?',['Goodbye','Hello','Please','Thank you'],1,'“Hola” is the everyday Spanish greeting for “hello”.'),
      Q('How do you say “thank you” in Spanish?',['Por favor','Perdón','Gracias','Buenos días'],2,'“Gracias” means “thank you”. “Por favor” means “please”.'),
      Q('What does “buenos días” mean?',['Good morning','Good night','See you soon','How are you?'],0,'“Buenos días” is used to greet someone in the morning.'),
      Q('Choose the Spanish word for “please”.',['Adiós','Por favor','Sí','Agua'],1,'“Por favor” means “please”.')
    ]},
    {title:'Everyday words',desc:'Use simple words for food, people and places.',questions:[
      Q('What does “agua” mean?',['Bread','Water','Milk','Apple'],1,'“Agua” means “water”. You may see it on drink menus.'),
      Q('Which word means “friend”?',['Amigo / amiga','Casa','Libro','Perro'],0,'“Amigo” is a male friend; “amiga” is a female friend.'),
      Q('How do you say “yes”?',['No','Tal vez','Sí','Nunca'],2,'“Sí” means “yes”. The accent helps distinguish it from “si” meaning “if”.'),
      Q('What does “la casa” mean?',['The street','The house','The school','The shop'],1,'“Casa” means “house” or “home”. “La” is the feminine singular “the”.')
    ]},
    {title:'Build a sentence',desc:'Put familiar words together into a short sentence.',questions:[
      Q('Which means “I am learning Spanish”?',['Aprendo español','Tengo agua','Buenos días','Me llamo casa'],0,'“Aprendo español” means “I learn/am learning Spanish”.'),
      Q('What does “¿Cómo estás?” ask?',['Where is it?','How are you?','What time is it?','What is your name?'],1,'“¿Cómo estás?” is an informal way to ask “How are you?”.'),
      Q('Choose “My name is Ana.”',['Estoy Ana.','Mi nombre es Ana.','Soy nombre Ana.','Me casa Ana.'],1,'“Mi nombre es Ana” literally means “My name is Ana”. “Me llamo Ana” is also common.'),
      Q('What does “por favor” mean?',['Please','Sorry','Goodbye','Tomorrow'],0,'“Por favor” is the polite word “please”.')
    ]}
  ]},
  {id:'french',title:'French',category:'Languages',emoji:'🇫🇷',tint:'#e9edff',color:'#647de9',desc:'Learn friendly expressions and the building blocks of French.',subtitle:'Bonjour to your next skill.',levels:[
    {title:'Bonjour basics',desc:'Greet people and use polite expressions.',questions:[
      Q('What does “bonjour” mean?',['Goodbye','Hello / good day','Please','Sorry'],1,'“Bonjour” is a greeting that means “hello” or “good day”.'),
      Q('How do you say “thank you”?',['Merci','Salut','Oui','Pardon'],0,'“Merci” means “thank you”.'),
      Q('What does “au revoir” mean?',['Good morning','Good luck','Goodbye','Welcome'],2,'“Au revoir” is the standard way to say “goodbye”.'),
      Q('Which phrase means “please”?',['Merci beaucoup','S’il vous plaît','À demain','Ça va'],1,'“S’il vous plaît” is the polite/formal way to say “please”.')
    ]},
    {title:'Useful words',desc:'Recognise common words for places and things.',questions:[
      Q('What does “la maison” mean?',['The house','The sea','The station','The book'],0,'“La maison” means “the house”.'),
      Q('Choose the word for “water”.',['Pain','Eau','Lait','Pomme'],1,'“Eau” means “water”. It is pronounced roughly like “oh”.'),
      Q('What does “oui” mean?',['No','Maybe','Yes','Later'],2,'“Oui” is the French word for “yes”.'),
      Q('What does “un livre” mean?',['A pencil','A book','A friend','A window'],1,'“Livre” means “book”.')
    ]},
    {title:'Make it a sentence',desc:'Read short expressions with a little more context.',questions:[
      Q('What does “Comment ça va ?” mean?',['What is your name?','How is it going?','Where do you live?','What day is it?'],1,'“Comment ça va ?” is a common way to ask how someone is doing.'),
      Q('How do you say “I am called Alex”?',['Je m’appelle Alex','Je suis maison','J’ai bonjour','Mon va Alex'],0,'“Je m’appelle Alex” means “My name is Alex”.'),
      Q('Which word means “and”?',['Mais','Avec','Et','Ou'],2,'“Et” means “and”.'),
      Q('“À bientôt” is closest to…',['See you soon','Good night','Thank you','Excuse me'],0,'“À bientôt” means “see you soon”.')
    ]}
  ]},
  {id:'japanese',title:'Japanese',category:'Languages',emoji:'🇯🇵',tint:'#ffe9ef',color:'#d96b88',desc:'Start with useful greetings, simple words and beginner expressions.',subtitle:'Small steps, new worlds.',levels:[
    {title:'First greetings',desc:'Recognise friendly, everyday Japanese.',questions:[
      Q('What does “こんにちは” (konnichiwa) mean?',['Thank you','Hello / good afternoon','Goodbye','Excuse me'],1,'“Konnichiwa” is a common daytime greeting.'),
      Q('Which expression means “thank you”?',['すみません','ありがとう','さようなら','はい'],1,'“Arigatō” means “thank you”.'),
      Q('What does “はい” (hai) mean?',['No','Please','Yes','Water'],2,'“Hai” means “yes”.'),
      Q('What does “さようなら” (sayōnara) mean?',['Goodbye','Hello','Please','Good morning'],0,'“Sayōnara” means “goodbye”, though casual goodbyes often use other phrases.')
    ]},
    {title:'Everyday Japanese',desc:'Learn words you will see and hear often.',questions:[
      Q('What does “みず” (mizu) mean?',['Food','Water','Book','Friend'],1,'“Mizu” means “water”.'),
      Q('Which word means “cat”?',['いぬ (inu)','ねこ (neko)','とり (tori)','うみ (umi)'],1,'“Neko” means “cat”; “inu” means “dog”.'),
      Q('What does “おいしい” (oishii) mean?',['Delicious','Small','Fast','Cold'],0,'“Oishii” is the word for “delicious”.'),
      Q('What does “ありがとう” communicate?',['An apology','Gratitude','A question','A greeting only'],1,'“Arigatō” expresses gratitude: “thank you”.')
    ]},
    {title:'Simple expressions',desc:'Understand short, useful phrases.',questions:[
      Q('“おはよう” (ohayō) is a greeting for…',['Morning','Midnight','Leaving a shop','Saying sorry'],0,'“Ohayō” means “good morning” in a casual setting.'),
      Q('What does “すみません” (sumimasen) often mean?',['Excuse me / sorry','Delicious','Yes please','See you tomorrow'],0,'“Sumimasen” can be used for “excuse me” or “sorry”.'),
      Q('Which is “I am a student” in a beginner phrase?',['学生です (gakusei desu)','水です (mizu desu)','猫です (neko desu)','さようなら'],0,'“Gakusei desu” means “I am a student” when the context is clear.'),
      Q('Which script is used for many native Japanese words?',['Hiragana','Cyrillic','Arabic only','Greek'],0,'Hiragana is one of the core Japanese writing systems, alongside katakana and kanji.')
    ]}
  ]},
  {id:'math',title:'Mathematics',category:'STEM',emoji:'∑',tint:'#e6f7f1',color:'#34a483',desc:'Strengthen number sense, fractions, patterns and practical problem-solving.',subtitle:'Make numbers make sense.',levels:[
    {title:'Number sense',desc:'Build confidence with operations and place value.',questions:[
      Q('What is 18 + 27?',['35','45','46','55'],1,'18 + 20 = 38, then add 7 to get 45.'),
      Q('Which number is largest?',['0.8','0.75','0.805','0.78'],2,'0.805 is greater than 0.800, while 0.8 is 0.800.'),
      Q('What is 9 × 6?',['42','48','54','56'],2,'Nine groups of six make 54.'),
      Q('What is 100 − 37?',['53','63','67','73'],1,'100 − 30 = 70, then subtract 7 to get 63.')
    ]},
    {title:'Fractions & ratios',desc:'Compare parts, fractions and simple proportions.',questions:[
      Q('Which fraction is equal to one half?',['2/3','3/6','4/6','2/5'],1,'3/6 simplifies to 1/2 when numerator and denominator are divided by 3.'),
      Q('What is 25% of 80?',['10','15','20','25'],2,'25% is one quarter. One quarter of 80 is 20.'),
      Q('Which is greater?',['2/5','1/2','They are equal','Cannot compare'],1,'1/2 = 0.5 and 2/5 = 0.4, so one half is greater.'),
      Q('A recipe uses 2 cups for 4 people. How many cups for 8 people at the same ratio?',['2','3','4','8'],2,'Doubling the number of people doubles the ingredients: 4 cups.')
    ]},
    {title:'Patterns & equations',desc:'Find the rule and solve simple equations.',questions:[
      Q('What comes next: 3, 6, 12, 24, …?',['30','36','42','48'],3,'Each number doubles, so 24 × 2 = 48.'),
      Q('If x + 7 = 15, what is x?',['7','8','9','22'],1,'Subtract 7 from both sides: x = 15 − 7 = 8.'),
      Q('Which expression equals 3²?',['3 × 2','3 + 3','3 × 3','2 × 2 × 2'],2,'3² means 3 multiplied by itself: 3 × 3 = 9.'),
      Q('A rectangle is 5 cm long and 3 cm wide. What is its perimeter?',['8 cm','15 cm','16 cm','30 cm'],2,'Perimeter = 5 + 3 + 5 + 3 = 16 cm.')
    ]}
  ]},
  {id:'grammar',title:'Grammar & writing',category:'Skills',emoji:'✍️',tint:'#fff0dd',color:'#d9943d',desc:'Make your writing clearer with punctuation, sentence structure and word choice.',subtitle:'Find the words that work.',levels:[
    {title:'Parts of speech',desc:'Identify nouns, verbs, adjectives and adverbs.',questions:[
      Q('In “The bright moon shone”, which word is an adjective?',['The','bright','moon','shone'],1,'“Bright” describes the noun “moon”, so it is an adjective.'),
      Q('Which word is a verb?',['Quickly','Happiness','Think','Blue'],2,'“Think” is an action or state verb.'),
      Q('What is the noun in “A bird sang”?',['A','bird','sang','A bird sang'],1,'“Bird” names an animal, making it a noun.'),
      Q('Which word is an adverb?',['Gentle','Gently','Gentleness','Gentleman'],1,'“Gently” describes how an action happens and is an adverb.')
    ]},
    {title:'Punctuation that helps',desc:'Use capitals, commas and apostrophes with care.',questions:[
      Q('Which sentence is punctuated correctly?',['where are you.','Where are you?','Where are you,','where are you?'],1,'A sentence starts with a capital letter and a direct question ends with a question mark.'),
      Q('Which shows that the bag belongs to Sam?',['Sams bag','Sams’ bag','Sam’s bag','Sams bag’s'],2,'An apostrophe plus s commonly shows singular possession: Sam’s bag.'),
      Q('Which word needs a capital letter? “we visited paris.”',['visited','we','paris','Both we and paris'],3,'Start the sentence with “We” and capitalise the place name “Paris”.'),
      Q('What do commas often help a reader do?',['Know a word is misspelled','Pause or separate items','Turn a statement into a question','Show every sentence has ended'],1,'Commas separate items in a list and help organise sentence structure.')
    ]},
    {title:'Clearer sentences',desc:'Choose precise wording and improve sentence flow.',questions:[
      Q('Which sentence is clearest?',['Due to the fact it rained, we left.','Because it rained, we left.','It rain we left because.','Raining was the leaving reason.'],1,'“Because it rained, we left” communicates the same idea with fewer words.'),
      Q('Which word best completes: “The instructions were ___, so everyone understood.”',['confusing','clear','uncertain','mysterious'],1,'“Clear” fits because everyone understood the instructions.'),
      Q('Choose the correct agreement.',['The team are ready.','The teams is ready.','The team is ready.','The team were ready yesterday is.'],2,'In standard usage, the collective noun “team” is treated as singular here.'),
      Q('What is a useful first step when editing a paragraph?',['Add longer words everywhere','Check the main idea and order','Remove all punctuation','Make every sentence the same length'],1,'Checking the main idea and sequence helps make writing coherent before polishing details.')
    ]}
  ]},
  {id:'science',title:'Science',category:'STEM',emoji:'⚛️',tint:'#e8f2ff',color:'#558bc9',desc:'Explore living things, energy, Earth and the ideas that explain our world.',subtitle:'Ask better questions about the world.',levels:[
    {title:'Life & living things',desc:'Explore cells, habitats and what living things need.',questions:[
      Q('What is the basic unit of life?',['Atom','Cell','Organ','Planet'],1,'Cells are the smallest structures generally considered capable of carrying out life processes.'),
      Q('Which process lets green plants make sugar using light?',['Respiration only','Photosynthesis','Evaporation','Magnetism'],1,'Photosynthesis uses light energy, water and carbon dioxide to make sugars.'),
      Q('What is a habitat?',['An animal’s food only','The place an organism lives','A type of cell','A weather forecast'],1,'A habitat provides the conditions and resources an organism needs.'),
      Q('Which is a consumer in a food chain?',['Grass making its own food','A rabbit eating grass','Sunlight','Water'],1,'A rabbit gets energy by eating another organism, so it is a consumer.')
    ]},
    {title:'Forces & energy',desc:'Understand motion, energy transfers and simple forces.',questions:[
      Q('What force pulls objects toward Earth?',['Friction','Magnetism only','Gravity','Buoyancy'],2,'Gravity attracts objects with mass and keeps us on Earth.'),
      Q('Energy cannot be created or destroyed in a closed system. This is the…',['Law of reflection','Conservation of energy','Theory of plate tectonics','Water cycle'],1,'Energy can change form or transfer, but the total amount is conserved.'),
      Q('Which material is usually a good electrical conductor?',['Rubber','Dry wood','Copper','Glass'],2,'Copper is a metal with mobile electrons, making it a useful conductor.'),
      Q('What usually increases friction between two surfaces?',['Removing contact','Making surfaces rougher','Eliminating pressure','Removing both surfaces'],1,'Rougher surfaces can interlock more and increase friction.')
    ]},
    {title:'Our solar system',desc:'Meet planets, orbits and the scale of space.',questions:[
      Q('Which object is at the centre of our solar system?',['Earth','The Moon','The Sun','Jupiter'],2,'The planets orbit the Sun, which contains most of the solar system’s mass.'),
      Q('Why do we experience seasons on Earth?',['Earth is much closer to the Sun in summer','Earth’s axis is tilted as it orbits the Sun','The Sun switches off in winter','The Moon blocks sunlight'],1,'Earth’s axial tilt changes the angle and duration of sunlight across the year.'),
      Q('Which planet is known for its prominent rings?',['Mars','Venus','Saturn','Mercury'],2,'Saturn has the most visually prominent ring system.'),
      Q('What does an orbit describe?',['A planet’s colour','The path one object follows around another','The age of a star','A type of telescope'],1,'An orbit is the path of an object around another under gravity.')
    ]}
  ]},
  {id:'geography',title:'Geography',category:'Humanities',emoji:'🌏',tint:'#e6f6ec',color:'#47a978',desc:'Read maps, discover landscapes and understand the connections between places.',subtitle:'Understand the place you live in.',levels:[
    {title:'Map skills',desc:'Read directions, scale and common map features.',questions:[
      Q('On most maps, which direction is at the top?',['South','North','East','West'],1,'Most standard maps place north at the top, unless the map says otherwise.'),
      Q('What does a map scale help you work out?',['The weather','Real distance from map distance','Population only','The height of the Sun'],1,'A scale relates distances on a map to distances in the real world.'),
      Q('What do contour lines usually show on a topographic map?',['Temperature','Elevation and shape of land','Language borders','Ocean salinity'],1,'Contour lines connect points of equal elevation.'),
      Q('Which direction is opposite east?',['North','South','West','North-west'],2,'West is opposite east on a compass.')
    ]},
    {title:'Land & water',desc:'Explore rivers, coasts, mountains and the water cycle.',questions:[
      Q('What is the process of liquid water turning into water vapour?',['Condensation','Precipitation','Evaporation','Collection'],2,'Evaporation occurs when liquid water gains energy and becomes water vapour.'),
      Q('What is a delta often formed by?',['A river depositing sediment near its mouth','A volcano freezing instantly','A glacier turning to sand','Wind creating a star-shaped lake'],0,'A delta can form where a river slows near its mouth and deposits sediment.'),
      Q('Which is a renewable natural resource?',['Coal','Natural gas','Sunlight','Petroleum'],2,'Sunlight is naturally replenished and is a renewable energy resource.'),
      Q('What is the coastline?',['The edge where land meets the sea','A mountain summit','The centre of a continent','A line of latitude only'],0,'A coastline is where land meets the sea or ocean.')
    ]},
    {title:'People & places',desc:'Explore population, cities and how people shape places.',questions:[
      Q('What is urbanisation?',['More people living in urban areas','A decline in all transport','A type of rainfall','Turning a city into a forest'],0,'Urbanisation is the increase in the share of people living in towns and cities.'),
      Q('What does population density measure?',['Births per year only','People per unit of area','The size of a country’s economy','Rainfall per kilometre'],1,'Population density is usually calculated as people per square kilometre or similar unit.'),
      Q('What is a sustainable city trying to do?',['Use resources without planning','Balance people’s needs with environmental impacts','Stop all public transport','Expand without limits'],1,'Sustainable cities aim to support people while reducing long-term environmental harm.'),
      Q('Which is an example of cultural diffusion?',['A language spreading through contact','A mountain growing overnight','Water freezing','A map changing scale'],0,'Cultural diffusion occurs when ideas, customs or practices spread between groups.')
    ]}
  ]},
  {id:'history',title:'History',category:'Humanities',emoji:'🏛️',tint:'#f9eee1',color:'#b98952',desc:'Investigate evidence, significant events and how societies change over time.',subtitle:'The past gives the present context.',levels:[
    {title:'Think like a historian',desc:'Read sources and separate evidence from claims.',questions:[
      Q('What is a primary source?',['A modern summary of a topic','Evidence created during the time studied','A fictional story only','A list of opinions with no source'],1,'A primary source comes from the period or people being studied, such as a letter or photograph.'),
      Q('Why should historians compare sources?',['To make all sources agree','To check perspective and reliability','To ignore contradictions','To avoid asking questions'],1,'Comparing sources helps identify bias, context and differences in evidence.'),
      Q('What is chronology?',['The study of climate','Ordering events by time','A type of building','A written argument only'],1,'Chronology puts events in the order they happened.'),
      Q('What is a historical interpretation?',['The past itself, unchanged','An explanation of the past using evidence','A date with no context','A map scale'],1,'Interpretations explain what the evidence suggests and can differ as evidence or perspectives change.')
    ]},
    {title:'Ancient worlds',desc:'Explore how early societies organised life and resources.',questions:[
      Q('Why did many early settlements grow near rivers?',['Rivers had no practical use','Water, fertile soil and transport were available','Rivers stopped all trade','Rivers prevented farming'],1,'Rivers supported crops, drinking water, travel and trade.'),
      Q('Which material is associated with many ancient Egyptian monuments?',['Concrete only','Limestone','Plastic','Aluminium foil'],1,'Limestone was widely used in ancient Egyptian buildings and monuments.'),
      Q('What is archaeology mainly concerned with?',['Studying the past through material remains','Predicting next week’s weather','Measuring stars only','Writing computer code'],0,'Archaeologists investigate objects, buildings and other remains to understand past people.'),
      Q('Why was writing an important development for societies?',['It made memory unnecessary','It allowed records and information to be preserved','It stopped people trading','It ended all disagreement'],1,'Writing enabled durable records of transactions, laws, stories and knowledge.')
    ]},
    {title:'Change over time',desc:'Connect cause, consequence and turning points.',questions:[
      Q('In history, a cause is…',['Something that helps bring about an event','A result that follows an event','Always one person','A source’s page number'],0,'A cause helps explain why an event happened; events often have multiple causes.'),
      Q('What is a consequence?',['A reason before the event','An effect or result of an event','A source type','A date format'],1,'Consequences are the outcomes or effects of events.'),
      Q('What does “continuity” mean in a historical context?',['Everything changed at once','Something stayed similar over time','An event never happened','A source is always correct'],1,'Continuity refers to features that remain similar despite other changes.'),
      Q('Why can a single event have several explanations?',['Evidence is never useful','People can have different perspectives and weigh evidence differently','Dates change randomly','History has no sources'],1,'Different questions, perspectives and evidence can produce more than one reasoned interpretation.')
    ]}
  ]},
  {id:'coding',title:'Coding',category:'STEM',emoji:'⌘',tint:'#eeeaff',color:'#8273df',desc:'Learn computational thinking, conditions and the foundations of the web.',subtitle:'Turn a problem into a process.',levels:[
    {title:'Coding foundations',desc:'Understand algorithms, variables and clear instructions.',questions:[
      Q('What is an algorithm?',['A computer screen','A step-by-step method for solving a problem','A type of keyboard','A programming error only'],1,'An algorithm is a sequence of instructions or steps used to solve a problem.'),
      Q('What does a variable usually do in a program?',['Stores a value that can be used or changed','Turns off the computer','Guarantees there are no bugs','Draws every image automatically'],0,'A variable gives a value a name so the program can use it.'),
      Q('What is debugging?',['Adding random code','Finding and fixing problems in a program','Changing a screen’s brightness','Compressing every file'],1,'Debugging is the process of identifying and fixing errors.'),
      Q('Which is most like a clear algorithm?',['Do something sometime','Repeat steps 1, 2 and 3 in order','Maybe open a file','The computer knows what I mean'],1,'Algorithms need clear steps that can be followed consistently.')
    ]},
    {title:'Decisions & loops',desc:'Use conditions and repetition to make programs flexible.',questions:[
      Q('What does an if statement usually do?',['Repeats forever automatically','Runs code when a condition is true','Deletes all variables','Creates a new keyboard'],1,'An if statement lets a program choose what to do based on a condition.'),
      Q('Why are loops useful?',['They make repeated tasks easier to express','They remove the need for logic','They always make code slower','They only work in games'],0,'Loops repeat instructions without rewriting the same code many times.'),
      Q('What is a Boolean value?',['A colour code only','A value that is true or false','A list of names','A type of monitor'],1,'Booleans represent two logical states: true and false.'),
      Q('A loop runs 4 times and adds 2 on each run. Starting at 0, what is the result?',['2','4','6','8'],3,'Four repetitions of adding 2 produce 2 + 2 + 2 + 2 = 8.')
    ]},
    {title:'How the web works',desc:'Meet HTML, CSS and JavaScript.',questions:[
      Q('What is HTML mainly used for?',['Structuring web page content','Styling colours only','Storing passwords securely','Providing internet access'],0,'HTML describes the structure and meaning of web content.'),
      Q('What does CSS control?',['A computer’s battery','The presentation and layout of a web page','Database backups','Only text content'],1,'CSS controls visual styles, spacing, layout and responsive presentation.'),
      Q('What does JavaScript commonly add to a website?',['Interactivity and behaviour','The physical screen','A guaranteed Wi-Fi signal','A new operating system'],0,'JavaScript can respond to user actions, update content and power app behaviour.'),
      Q('Which is a good coding habit?',['Name variables clearly','Copy code without reading it','Ignore all errors','Put every feature in one giant function'],0,'Clear names and small, understandable pieces make code easier to maintain.')
    ]}
  ]},
  {id:'logic',title:'Logic & reasoning',category:'Skills',emoji:'🧩',tint:'#e8f5f7',color:'#4a9aa3',desc:'Spot patterns, check assumptions and strengthen your problem-solving.',subtitle:'Slow down. Notice the details.',levels:[
    {title:'Pattern finder',desc:'Discover rules hidden in sequences.',questions:[
      Q('What comes next: 2, 4, 8, 16, …?',['18','24','30','32'],3,'Each term doubles, so 16 × 2 = 32.'),
      Q('Which item does not belong?',['Triangle','Square','Circle','Carrot'],3,'The first three are geometric shapes; a carrot is a vegetable.'),
      Q('What comes next: A, C, E, G, …?',['H','I','J','K'],1,'The sequence skips one letter each time: A, C, E, G, I.'),
      Q('All zibs are blue. This object is a zib. What follows?',['It must be blue','It must be round','It is not a zib','There is no rule'],0,'If every zib is blue, then anything identified as a zib must be blue.')
    ]},
    {title:'Careful deduction',desc:'Use the information given without jumping to conclusions.',questions:[
      Q('All roses are flowers. Some flowers fade quickly. Can we conclude all roses fade quickly?',['Yes, always','No, not from this information','Roses are not flowers','Only red roses'],1,'The statement about some flowers does not prove that all roses are included.'),
      Q('If today is Tuesday, what day will it be in 10 days?',['Thursday','Friday','Saturday','Sunday'],1,'Seven days later is Tuesday; three more days makes Friday.'),
      Q('A is taller than B. B is taller than C. Who is shortest?',['A','B','C','Cannot tell'],2,'A > B and B > C, so C is the shortest of the three.'),
      Q('Which is an assumption rather than a directly given fact?',['The room has four walls, stated in the prompt','The alarm rang at 7, stated in the log','Everyone who is quiet must be upset','The class starts at 9, stated on the timetable'],2,'Quietness alone does not show how someone feels; that conclusion adds an assumption.')
    ]},
    {title:'Reason it through',desc:'Evaluate claims, evidence and the strength of an argument.',questions:[
      Q('Which is the strongest evidence for “it rained last night”?',['Someone guesses it did','A weather log records 12 mm of rainfall nearby','The sky looks blue today','A person dislikes rain'],1,'A relevant local rainfall record is direct, checkable evidence.'),
      Q('A product is popular. Does that prove it is the best quality?',['Yes, popularity proves quality','No, popularity alone is not enough','Only if it is expensive','Only if it is new'],1,'Popularity and quality are different claims and need different evidence.'),
      Q('What is a counterexample?',['An example that challenges a general claim','A repeated opinion','A summary of every point','A number with no meaning'],0,'A counterexample shows that a claim is not true in every case.'),
      Q('What should you do when evidence conflicts?',['Ignore whichever source disagrees','Compare reliability, context and method','Pick the first claim','Assume both are always true'],1,'Compare the quality and context of each source before reaching a conclusion.')
    ]}
  ]},
  {id:'money',title:'Money basics',category:'Skills',emoji:'🪙',tint:'#fff3d9',color:'#c59240',desc:'Build everyday confidence with budgeting, saving and sensible decisions.',subtitle:'Make thoughtful choices with money.',levels:[
    {title:'Money essentials',desc:'Understand needs, wants and simple budgets.',questions:[
      Q('What is a budget?',['A plan for income and spending','A type of bank card','A guaranteed way to get rich','A list of things you want only'],0,'A budget helps plan where money comes from and where it goes.'),
      Q('Which is usually a need rather than a want?',['The latest game console','Basic food','Designer trainers','A second streaming subscription'],1,'Food is a basic need. Wants can be worthwhile, but usually come after essentials.'),
      Q('You receive $20 and spend $7. How much remains?',['$11','$12','$13','$27'],2,'$20 − $7 = $13.'),
      Q('What is a useful reason to save some money?',['To plan for a future goal or unexpected cost','To spend it twice','To avoid making any choices','To guarantee every price falls'],0,'Saving can help prepare for planned goals and unexpected expenses.')
    ]},
    {title:'Smart decisions',desc:'Compare value, needs and trade-offs.',questions:[
      Q('A $30 item is discounted by $10. What is the new price?',['$10','$20','$25','$40'],1,'Subtract the discount from the original price: $30 − $10 = $20.'),
      Q('What does “opportunity cost” mean?',['The price printed on a label','The next-best option you give up when choosing','A tax on every purchase','Money that appears for free'],1,'Opportunity cost is the value of the best alternative you did not choose.'),
      Q('Two packs cost $6 for 3 items and $10 for 6 items. Which has lower cost per item?',['The $6 pack','The $10 pack','They are equal','Not enough information'],1,'$6 ÷ 3 = $2 each; $10 ÷ 6 is about $1.67 each.'),
      Q('Before buying something online, what is a sensible check?',['Only its colour','Total cost, seller trust and return terms','Whether the countdown looks urgent','Whether a celebrity mentioned it'],1,'Checking the total cost, seller and return conditions helps you make an informed choice.')
    ]},
    {title:'Saving & planning',desc:'Set goals and understand basic interest.',questions:[
      Q('What is a savings goal?',['A clear target for money you want to set aside','A way to remove all expenses','A bank’s advertising slogan','A rule that money cannot be used'],0,'A specific target makes it easier to plan how much to save and by when.'),
      Q('If you save $5 each week for 8 weeks, how much do you save before interest?',['$13','$35','$40','$45'],2,'$5 × 8 weeks = $40.'),
      Q('What is interest in a savings account?',['A fee paid only by the saver every time','Money paid by the provider for keeping savings there, under the account terms','A discount on groceries','A type of budget'],1,'Some savings accounts pay interest on the balance, subject to their terms.'),
      Q('Which goal is easiest to plan for?',['Save more sometime','Save $60 over 3 months','Spend less forever','Buy everything cheaper'],1,'A specific amount and time frame make progress easier to track.')
    ]}
  ]}
];

const SKILLS = [
  {id:'recall',title:'Recall Boost',emoji:'🧠',tint:'#e9edff',color:'#657bf2',description:'Earn extra points for every correct answer. A little momentum adds up.',effect:level=>`+${level*2} points per correct answer`,max:3,base:100,step:90},
  {id:'daily',title:'Daily Spark',emoji:'🌟',tint:'#fff1dc',color:'#d7953f',description:'Make your daily streak reward more rewarding whenever you finish a lesson.',effect:level=>`+${level*5} extra daily bonus points`,max:3,base:100,step:80},
  {id:'doors',title:'Open Doors',emoji:'🔑',tint:'#e9f7f1',color:'#3aa481',description:'Unlock new levels for fewer points, leaving more to spend on skills.',effect:level=>`${level*10}% lower level unlock prices`,max:3,base:150,step:100},
  {id:'shield',title:'Streak Shield',emoji:'🛡️',tint:'#f1eaff',color:'#9178df',description:'Protect your streak through one missed day. One shield charge is consumed when needed.',effect:()=> 'One missed day protected',max:1,base:280,step:0}
];
const ACHIEVEMENTS = [
  {id:'first',emoji:'🌱',title:'First Steps',desc:'Complete your first lesson.',test:s=>s.completedLessons.length>=1},
  {id:'five',emoji:'📚',title:'Getting Curious',desc:'Complete 5 unique lessons.',test:s=>s.completedLessons.length>=5},
  {id:'ten',emoji:'🧭',title:'Path Finder',desc:'Complete 10 unique lessons.',test:s=>s.completedLessons.length>=10},
  {id:'perfect',emoji:'✨',title:'Flawless Focus',desc:'Finish a lesson with every answer correct.',test:s=>s.perfectRuns>=1},
  {id:'streak3',emoji:'🔥',title:'Three in a Row',desc:'Build a 3-day learning streak.',test:s=>s.streak>=3},
  {id:'points500',emoji:'💎',title:'Point Collector',desc:'Earn a total of 500 points or more.',test:s=>s.lifetimePoints>=500},
  {id:'explorer',emoji:'🌏',title:'Curious Explorer',desc:'Try lessons in 3 different subjects.',test:s=>new Set(s.completedLessons.map(k=>k.split(':')[0])).size>=3},
  {id:'hundred',emoji:'🎯',title:'Century Club',desc:'Answer 100 questions.',test:s=>s.answersTotal>=100},
  {id:'skills',emoji:'⚡',title:'Self Improvement',desc:'Purchase your first skill upgrade.',test:s=>s.skills.recall+s.skills.daily+s.skills.doors+(s.skills.shield?1:0)>=1},
  {id:'streak7',emoji:'☀️',title:'A Week of You',desc:'Reach a 7-day streak.',test:s=>s.streak>=7}
];

const ICONS = {
 home:'<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.3 4.7-4.7 2.3 2.3-4.7z"/>',
 sparkles:'<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1z"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 chart:'<path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9z"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 search:'<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
 moon:'<path d="M20.8 14.3A8.6 8.6 0 0 1 9.7 3.2 8.7 8.7 0 1 0 20.8 14.3z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 back:'<path d="m15 18-6-6 6-6"/>',
 close:'<path d="m18 6-12 12M6 6l12 12"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9h.01"/>',
 lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
 book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 5.5v14A2.5 2.5 0 0 1 6.5 17H20"/>',
 flame:'<path d="M12 22c4.4 0 7-3.2 7-7 0-2.8-1.5-4.6-3.8-6.5.2 2.1-.3 3.2-1.2 3.8C13.8 8.1 11 5.2 8.5 3 9 7.1 5 9.2 5 14.6A7.1 7.1 0 0 0 12 22z"/>',
 trophy:'<path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 lightning:'<path d="m13 2-3 9h7l-6 11 2-9H6z"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'
};
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localDate = (date=new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const dayDiff = (from,to) => Math.round((new Date(`${to}T12:00:00`) - new Date(`${from}T12:00:00`))/86400000);
const formatNumber = n => Number(n||0).toLocaleString();
const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24">${ICONS[name] || ICONS.sparkles}</svg>`;
const lessonKey = (courseId, levelIndex) => `${courseId}:${levelIndex}`;
const getCourse = id => COURSES.find(c=>c.id===id);
const getCourseLevel = (courseId,index) => getCourse(courseId)?.levels[index];
const today = () => localDate();

function makeDefaultState(){
  return {schema:1,points:50,lifetimePoints:50,name:'Learner',darkMode:false,reducedMotion:false,streak:0,longestStreak:0,lastActiveDate:null,lastBonusDate:null,
    completedLessons:[],unlockedLessons:[],attemptedLessons:[],answersTotal:0,correctTotal:0,lessonsTotal:0,perfectRuns:0,skills:{recall:0,daily:0,doors:0,shield:false,shieldCharges:0},
    day:{date:today(),lessons:0,answers:0,correct:0,claimed:[]},activity:{},achievements:[],lastCourseId:'spanish',weeklyClaims:[]};
}
function loadState(){
  const defaults=makeDefaultState();
  try{
    const parsed=JSON.parse(localStorage.getItem(STORE_KEY)||'null');
    if(!parsed || parsed.schema!==1) return defaults;
    const s={...defaults,...parsed,skills:{...defaults.skills,...(parsed.skills||{})},day:{...defaults.day,...(parsed.day||{})},activity:parsed.activity&&typeof parsed.activity==='object'?parsed.activity:{},completedLessons:Array.isArray(parsed.completedLessons)?parsed.completedLessons:[],unlockedLessons:Array.isArray(parsed.unlockedLessons)?parsed.unlockedLessons:[],attemptedLessons:Array.isArray(parsed.attemptedLessons)?parsed.attemptedLessons:[],achievements:Array.isArray(parsed.achievements)?parsed.achievements:[],weeklyClaims:Array.isArray(parsed.weeklyClaims)?parsed.weeklyClaims:[]};
    s.points=Math.max(0,Number(s.points)||0);s.lifetimePoints=Math.max(0,Number(s.lifetimePoints)||0);s.streak=Math.max(0,Number(s.streak)||0);s.longestStreak=Math.max(s.streak,Number(s.longestStreak)||0);
    for(const k of ['recall','daily','doors'])s.skills[k]=Math.min(3,Math.max(0,Number(s.skills[k])||0));
    s.skills.shield=Boolean(s.skills.shield);s.skills.shieldCharges=Math.max(0,Number(s.skills.shieldCharges)||0);
    return s;
  }catch(e){return defaults;}
}
let state=loadState();
let currentPage='home';
let currentCourse='spanish';
let courseFilter='All';
let courseSearch='';
let activeSession=null;
let saveTimer=null;

function saveState(){
  try{localStorage.setItem(STORE_KEY,JSON.stringify(state));}catch(e){console.warn('Motive Learn could not save to local storage.',e);}
  syncSidebar();
}
function ensureToday(){
  if(!state.day || state.day.date!==today()) state.day={date:today(),lessons:0,answers:0,correct:0,claimed:[]};
}
function syncTheme(){document.body.classList.toggle('dark',Boolean(state.darkMode));document.body.classList.toggle('reduce-motion',Boolean(state.reducedMotion));$('#themeToggle').innerHTML=icon(state.darkMode?'sun':'moon');$('#themeToggle').setAttribute('aria-label',state.darkMode?'Switch to light mode':'Switch to dark mode');document.querySelector('meta[name="theme-color"]').content=state.darkMode?'#10121b':'#f7f8fc';}
function syncSidebar(){
  const name=state.name?.trim()||'Learner';
  $('#sidebarName').textContent=name==='Learner'?'My learning space':name;
  $('#sidebarAvatar').textContent=initials(name);$('#topAvatar').textContent=initials(name);
  const shownStreak=displayStreak();$('#sideStreak').textContent=`${shownStreak} ${shownStreak===1?'day':'days'}`;
  const d=new Date();const labels=['S','M','T','W','T','F','S'];
  const ds=Array.from({length:7},(_,i)=>{const x=new Date(d);x.setDate(d.getDate()-6+i);return x;});
  $('#streakWeek').innerHTML=ds.map(x=>{const key=localDate(x);const data=state.activity[key];const done=(data?.lessons||0)>0;return `<span class="streak-day ${done?'done':''} ${key===today()?'today':''}"><i>${done?'✓':x.getDate()}</i>${labels[x.getDay()]}</span>`}).join('');
  $('#streakCaption').textContent=shownStreak>0?'Nice consistency. Keep showing up.':'Finish a lesson to begin your streak.';
}
function initials(name){return String(name||'M').trim().split(/\s+/).slice(0,2).map(p=>p[0]||'').join('').toUpperCase()||'M';}
function addPoints(amount){amount=Math.max(0,Math.floor(amount));state.points+=amount;state.lifetimePoints+=amount;return amount;}
function weeklyDates(){const d=new Date();return Array.from({length:7},(_,i)=>{const x=new Date(d);x.setDate(d.getDate()-6+i);return x;});}
function weeklyLessonCount(){const d=new Date();const monday=new Date(d);monday.setDate(d.getDate()-((d.getDay()+6)%7));let sum=0;for(const day=new Date(monday);day<=d;day.setDate(day.getDate()+1))sum+=state.activity[localDate(day)]?.lessons||0;return sum;}
function displayStreak(){if(!state.lastActiveDate)return 0;const gap=dayDiff(state.lastActiveDate,today());if(gap<=1)return state.streak;if(gap===2&&state.skills.shieldCharges>0)return state.streak;return 0;}
function weeklyTargetKey(){const d=new Date();const monday=new Date(d);monday.setDate(d.getDate()-((d.getDay()+6)%7));return localDate(monday);}
function courseProgress(course){return course.levels.filter((_,i)=>state.completedLessons.includes(lessonKey(course.id,i))).length;}
function isUnlocked(course,index){if(index===0)return true;if(state.unlockedLessons.includes(lessonKey(course.id,index)))return true;return state.completedLessons.includes(lessonKey(course.id,index-1));}
function unlockCost(index){const raw=35+(index-1)*25;return Math.max(1,Math.ceil(raw*(1-state.skills.doors*.1)));}
function recommendedLesson(){
  for(const c of COURSES){
    const done=courseProgress(c);
    for(let i=0;i<c.levels.length;i++){
      if(!state.completedLessons.includes(lessonKey(c.id,i))&&isUnlocked(c,i))return {course:c,index:i};
    }
    if(done<c.levels.length) return {course:c,index:done};
  }
  return {course:getCourse(state.lastCourseId)||COURSES[0],index:0};
}
function currentGreeting(){const h=new Date().getHours();return h<12?'Good morning':h<18?'Good afternoon':'Good evening';}
function setHeader(){
  const name=escapeHTML(state.name?.trim()||'learner');
  const contexts={home:['YOUR LEARNING SPACE',`${currentGreeting()}, ${name}.`],learn:['EXPLORE & DISCOVER','What will you learn today?'],skills:['PERSONAL DEVELOPMENT','Build your own advantage.'],challenges:['A LITTLE, OFTEN','Small goals. Real momentum.'],progress:['YOUR JOURNEY','Look how far you’ve come.'],settings:['YOUR PREFERENCES','Make it feel like yours.'],course:['YOUR LEARNING PATH','Keep the momentum going.']};
  const item=contexts[currentPage]||contexts.home;$('#contextKicker').textContent=item[0];$('#pageTitle').innerHTML=item[1];
  $$('.nav-item[data-page],.mobile-nav-item[data-page]').forEach(btn=>{const active=btn.dataset.page===currentPage||(currentPage==='course'&&btn.dataset.page==='learn');btn.classList.toggle('active',active)});
}
function render(){
  setHeader();syncSidebar();syncTheme();
  const main=$('#mainView');
  if(currentPage==='home')main.innerHTML=renderHome();
  else if(currentPage==='learn')main.innerHTML=renderLearn();
  else if(currentPage==='course')main.innerHTML=renderCoursePage();
  else if(currentPage==='skills')main.innerHTML=renderSkills();
  else if(currentPage==='challenges')main.innerHTML=renderChallenges();
  else if(currentPage==='progress')main.innerHTML=renderProgress();
  else if(currentPage==='settings')main.innerHTML=renderSettings();
  else main.innerHTML=renderHome();
  applyIcons(main);
}
function applyIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const n=el.getAttribute('data-icon');el.innerHTML=icon(n);});}
function go(page){
  currentPage=page;$('#sidebar').classList.remove('open');$('#mobileOverlay').classList.remove('show');
  if(page==='course') currentPage='learn';
  render();$('#mainView').focus({preventScroll:true});window.scrollTo({top:0,behavior:state.reducedMotion?'auto':'smooth'});
}

function renderHome(){
  const suggestion=recommendedLesson();const c=suggestion.course;const l=c.levels[suggestion.index]||c.levels[0];
  const progress=state.completedLessons.length;const overall=Math.round(progress/(COURSES.reduce((a,c)=>a+c.levels.length,0))*100);
  const myCourses=COURSES.filter(x=>courseProgress(x)>0||x.id===c.id).slice(0,4);while(myCourses.length<4){const next=COURSES.find(x=>!myCourses.some(y=>y.id===x.id));if(!next)break;myCourses.push(next)}
  return `<section class="home-hero"><div class="hero-copy"><div class="hero-welcome">YOUR NEXT SMALL WIN</div><h2>Progress looks good <span>on you.</span></h2><p>Build knowledge one short session at a time. Pick up where you left off, explore something new, and let small wins add up.</p><div class="hero-ctas"><button class="btn btn-primary" data-action="start-lesson" data-course="${c.id}" data-level="${suggestion.index}">Continue learning ${icon('arrow')}</button><button class="btn hero-secondary" data-action="go-page" data-page="learn">Explore subjects</button></div></div><div class="hero-art" aria-hidden="true"><div class="orbital"><div class="orbital-core">m<span style="color:#c2b9ff">.</span></div><span class="orbital-spark">✦</span></div><div class="hero-tag"><span>✦</span><div><b>${overall}%</b><small>path explored</small></div></div></div></section>
  <div class="section-heading"><div><span class="eyebrow">THE BIG PICTURE</span><h2>Your progress, at a glance</h2></div><button class="text-link" data-action="go-page" data-page="progress">View progress ${icon('arrow')}</button></div>
  <section class="stat-grid"><div class="card stat-card"><span class="mini-stat-icon" style="background:#eef1ff;color:#6f7ff0">${icon('book')}</span><div class="stat-copy"><span class="mini-stat-label">Lessons completed</span><strong class="mini-stat-value">${formatNumber(state.completedLessons.length)}</strong><div class="stat-meta">of ${COURSES.reduce((a,c)=>a+c.levels.length,0)} available</div></div></div><div class="card stat-card"><span class="mini-stat-icon" style="background:#fff0dc;color:#de9748">${icon('flame')}</span><div class="stat-copy"><span class="mini-stat-label">Current streak</span><strong class="mini-stat-value">${displayStreak()} ${displayStreak()===1?'day':'days'}</strong><div class="stat-meta">Best: ${state.longestStreak} days</div></div></div><div class="card stat-card"><span class="mini-stat-icon" style="background:#e8f8f1;color:#36a885">${icon('target')}</span><div class="stat-copy"><span class="mini-stat-label">Answers correct</span><strong class="mini-stat-value">${formatNumber(state.correctTotal)}</strong><div class="stat-meta">${state.answersTotal?Math.round(state.correctTotal/state.answersTotal*100):0}% accuracy overall</div></div></div><div class="card stat-card"><span class="mini-stat-icon" style="background:#f2eaff;color:#9278e7">${icon('sparkles')}</span><div class="stat-copy"><span class="mini-stat-label">Motive points</span><strong class="mini-stat-value">${formatNumber(state.points)}</strong><div class="stat-meta">Ready to put to work</div></div></div></section>
  <div class="dashboard-layout"><div class="dashboard-left"><div class="section-heading"><div><span class="eyebrow">PICK UP A THREAD</span><h2>Your learning paths</h2><p>Keep building on the things you have started.</p></div><button class="text-link" data-action="go-page" data-page="learn">All subjects ${icon('arrow')}</button></div><section class="course-grid">${myCourses.map(courseCard).join('')}</section><div class="section-heading"><div><span class="eyebrow">YOUR JOURNEY</span><h2>Little steps count</h2><p>Every question is a chance to learn something.</p></div></div><div class="card card-pad" style="display:flex;align-items:center;gap:15px"><div class="subject-icon" style="background:#eef1ff;color:#7182f1;font-size:22px">✦</div><div style="flex:1;min-width:0"><div style="display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:9px"><strong style="font:750 12px Manrope">Your learning library</strong><span class="muted" style="font-size:10px">${overall}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${overall}%"></div></div><p class="muted" style="font-size:10px;line-height:1.5;margin:8px 0 0">${progress===0?'Your first completed lesson starts the journey.':`${progress} of ${COURSES.reduce((a,c)=>a+c.levels.length,0)} lessons completed across ${new Set(state.completedLessons.map(k=>k.split(':')[0])).size} subjects.`}</p></div></div></div>
  <aside class="right-column"><section class="card daily-card"><div class="daily-card-head"><div><h3>Daily missions</h3><div class="date-tiny">${new Date().toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'})}</div></div><span class="pill purple">${state.day.claimed.length}/${QUESTS.length} done</span></div><div class="quest-list">${QUESTS.map(questRow).join('')}</div><button class="text-link" style="margin-top:15px" data-action="go-page" data-page="challenges">All challenges ${icon('arrow')}</button></section><section class="card week-card"><div class="week-head"><h3>Your week</h3><small>Lessons finished</small></div><div class="week-chart">${renderWeekBars()}</div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:16px;padding-top:13px;border-top:1px solid var(--line)"><span class="muted" style="font-size:10px">Weekly goal</span><strong style="font:800 12px Manrope">${Math.min(weeklyLessonCount(),5)} <span class="muted" style="font:500 10px 'DM Sans'">/ 5 lessons</span></strong></div><div class="progress-track" style="margin-top:9px"><div class="progress-fill" style="width:${Math.min(100,weeklyLessonCount()/5*100)}%"></div></div></section><section class="tip-card"><div class="tip-icon">✦</div><div><strong>A Motive minute</strong><p>${getTip()}</p></div></section></aside></div>`;
}
function courseCard(c){const done=courseProgress(c),total=c.levels.length;const next=c.levels.findIndex((l,i)=>!state.completedLessons.includes(lessonKey(c.id,i))&&isUnlocked(c,i));const ix=next>=0?next:Math.min(done,total-1);return `<article class="card course-card" data-action="open-course" data-course="${c.id}" tabindex="0" role="button" aria-label="Open ${escapeHTML(c.title)} learning path"><div class="course-card-top"><span class="subject-icon" style="background:${c.tint};color:${c.color}">${c.emoji}</span><span class="card-arrow">${icon('arrow')}</span></div><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.desc)}</p><div class="course-card-bottom"><span><strong>${done}</strong>/${total} lessons</span><span>${Math.round(done/total*100)}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${done/total*100}%"></div></div></article>`}
function questRow(q){const val=state.day[q.field]||0,done=state.day.claimed.includes(q.id),pct=Math.min(100,val/q.target*100);return `<div class="quest-row"><div class="quest-symbol">${q.icon}</div><div class="quest-info"><strong>${q.title}</strong><small>${done?'Completed':`${Math.min(val,q.target)} of ${q.target} · ${q.detail}`}</small><div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${done?'#43b48b':''}"></div></div></div><span class="quest-reward">${done?'✓':`+${q.reward}`}</span></div>`}
function renderWeekBars(){const ds=weeklyDates();const max=Math.max(1,...ds.map(d=>state.activity[localDate(d)]?.lessons||0));return ds.map(d=>{const key=localDate(d),n=state.activity[key]?.lessons||0;const height=n?Math.max(15,n/max*65):4;return `<div class="week-column"><div class="week-bar ${n?'active':''} ${key===today()?'today':''}" style="height:${height}px" title="${n} lessons"></div><small>${d.toLocaleDateString(undefined,{weekday:'short'}).slice(0,1)}</small></div>`}).join('')}
function getTip(){const tips=['A short session today makes tomorrow’s session easier to start.','Getting an answer wrong is useful when you stop to understand why.','Try learning something different when your usual subject feels stale.','Consistency beats the perfect study plan. Five minutes still counts.','Explain a new idea in your own words to check what you really understand.','You do not have to master a subject in one sitting. Build it in layers.'];return tips[(new Date().getDate()+state.completedLessons.length)%tips.length]}

function renderLearn(){
  const categories=['All','Languages','STEM','Humanities','Skills'];
  const filtered=COURSES.filter(c=>(courseFilter==='All'||c.category===courseFilter)&&(`${c.title} ${c.desc} ${c.category}`).toLowerCase().includes(courseSearch.toLowerCase()));
  const allDone=state.completedLessons.length>=COURSES.reduce((a,c)=>a+c.levels.length,0);
  return `<section class="page-intro"><div><span class="eyebrow">YOUR CURIOSITY, YOUR PACE</span><h2>Explore learning.</h2><p>From languages and mathematics to science, writing, coding and everyday skills. Pick something that interests you and start small.</p></div><div class="page-actions"><button class="btn btn-primary" data-action="start-recommended">${allDone?'Practise again':'Continue learning'} ${icon('arrow')}</button></div></section><div class="filter-row" role="group" aria-label="Filter by subject">${categories.map(cat=>`<button class="filter-chip ${courseFilter===cat?'active':''}" data-action="set-filter" data-filter="${cat}">${cat==='All'?'All subjects':cat}</button>`).join('')}</div><div class="explore-grid">${filtered.map(trackCard).join('')||`<div class="card empty-state" style="grid-column:1/-1">${icon('search')}<strong>No subjects found</strong><span>Try a different search or filter.</span></div>`}</div><section class="learn-banner"><div class="learn-banner-icon">${icon('lightning')}</div><div class="learn-banner-copy"><strong>Learn in your own rhythm</strong><p>Lessons are short by design. Build a streak, earn points, upgrade your skills, and unlock new paths as you go.</p></div><button class="btn btn-secondary" data-action="go-page" data-page="skills">Explore skills</button></section>`;
}
function trackCard(c){const done=courseProgress(c),total=c.levels.length;return `<article class="card track-card"><div class="track-top"><span class="subject-icon" style="background:${c.tint};color:${c.color}">${c.emoji}</span><span class="pill ${done===total?'green':done?'purple':''}">${done===total?'Complete':done?`${done} started`:'Beginner friendly'}</span></div><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.desc)}</p><div class="track-meta"><span>Learning path</span><strong>${done}/${total} lessons</strong></div><div class="progress-track"><div class="progress-fill" style="width:${done/total*100}%"></div></div><div class="track-bottom"><div class="track-level-dots">${c.levels.map((l,i)=>`<span class="${state.completedLessons.includes(lessonKey(c.id,i))?'done':''}" title="${escapeHTML(l.title)}"></span>`).join('')}</div><button class="btn btn-soft" data-action="open-course" data-course="${c.id}">View path ${icon('arrow')}</button></div></article>`}
function renderCoursePage(){const c=getCourse(currentCourse)||COURSES[0];const done=courseProgress(c);return `<button class="back-link" data-action="go-page" data-page="learn">${icon('back')} All learning paths</button><section class="track-hero"><span class="subject-icon" style="background:${c.tint};color:${c.color}">${c.emoji}</span><div class="track-hero-copy"><span class="eyebrow">${escapeHTML(c.category)} PATH</span><h2>${escapeHTML(c.title)}</h2><p>${escapeHTML(c.desc)}</p></div><div class="track-hero-stats"><div class="track-hero-stat"><strong>${done}/${c.levels.length}</strong><small>Lessons done</small></div><div class="track-hero-stat"><strong>${Math.round(done/c.levels.length*100)}%</strong><small>Path progress</small></div></div></section><div class="section-heading" style="margin-top:28px"><div><span class="eyebrow">YOUR CURRICULUM</span><h2>Choose your next level</h2><p>Complete the previous lesson to unlock the next one, or spend points to open a level early.</p></div><span class="pill blue">${c.levels.length} levels</span></div><div class="level-list">${c.levels.map((l,i)=>levelCard(c,l,i)).join('')}</div>`}
function levelCard(c,l,i){const key=lessonKey(c.id,i),done=state.completedLessons.includes(key),unlocked=isUnlocked(c,i),cost=unlockCost(i);const status=done?'Completed':unlocked?'Ready to learn':'Locked';const button=done?`<button class="btn btn-secondary" data-action="start-lesson" data-course="${c.id}" data-level="${i}">Practise again</button>`:unlocked?`<button class="btn btn-primary" data-action="start-lesson" data-course="${c.id}" data-level="${i}">Start lesson ${icon('arrow')}</button>`:`<button class="btn btn-secondary" data-action="unlock-level" data-course="${c.id}" data-level="${i}">${icon('lock')} Unlock</button>`;return `<article class="card level-card"><div class="level-number ${done?'done':unlocked?'available':''}">${done?icon('check'):String(i+1).padStart(2,'0')}</div><div class="level-info"><h3>${escapeHTML(l.title)}</h3><p>${escapeHTML(l.desc)}</p><div class="level-info-meta"><span>${icon('clock')} 2–4 min</span><span>·</span><span>${l.questions.length} questions</span><span>·</span><span class="${done?'pill green':unlocked?'pill blue':'pill'}">${status}</span></div></div><div class="level-action">${!unlocked&&!done?`<span class="level-cost">${formatNumber(cost)} points</span>`:''}${button}</div></article>`}

function skillCost(skill){return skill.id==='shield'?skill.base:skill.base+(state.skills[skill.id]||0)*skill.step;}
function skillLevel(skill){return skill.id==='shield'?(state.skills.shield?1:0):(state.skills[skill.id]||0);}
function renderSkills(){return `<section class="page-intro"><div><span class="eyebrow">UPGRADE YOUR LEARNING</span><h2>Make points work for you.</h2><p>Use points to unlock helpful boosts. Choose a skill that matches the way you like to learn—then get back to practising.</p></div></section><section class="skills-points-banner"><div class="points-coin">✦</div><div class="points-copy"><small>Available to spend</small><strong>${formatNumber(state.points)} points</strong><p>You earn points by answering questions and completing daily missions.</p></div><button class="btn hero-secondary" data-action="go-page" data-page="learn">Earn more ${icon('arrow')}</button></section><div class="section-heading" style="margin-top:0"><div><span class="eyebrow">YOUR PERSONAL TOOLKIT</span><h2>Skill upgrades</h2><p>Each boost makes the next step a little easier.</p></div><span class="pill purple">${state.skills.recall+state.skills.daily+state.skills.doors+(state.skills.shield?1:0)} upgrades owned</span></div><section class="skill-grid">${SKILLS.map(skillCard).join('')}</section><div class="skill-footnote">${icon('info')}<span>Skills are saved to this device and apply automatically. Point rewards are designed to favour learning: correct answers earn much more than incorrect ones, and a completed first-time lesson counts toward your progress.</span></div>`}
function skillCard(sk){const level=skillLevel(sk),maxed=level>=sk.max,cost=skillCost(sk);return `<article class="card skill-card"><div class="skill-top"><span class="skill-symbol" style="background:${sk.tint};color:${sk.color}">${sk.emoji}</span><span class="skill-level">${maxed?'MAX LEVEL':`LEVEL ${level} / ${sk.max}`}</span></div><h3>${sk.title}</h3><p>${sk.description}</p><div class="skill-progress">${Array.from({length:sk.max},(_,i)=>`<span class="${i<level?'filled':''}"></span>`).join('')}</div><div class="skill-bottom"><small>${maxed?'You have the full upgrade.':sk.effect(level+1)}</small>${maxed?`<button class="btn btn-secondary" disabled>Owned</button>`:`<button class="btn ${state.points>=cost?'btn-primary':'btn-secondary'}" data-action="buy-skill" data-skill="${sk.id}" ${state.points<cost?'title="Not enough points"':''}>${formatNumber(cost)} pts ${icon('arrow')}</button>`}</div></article>`}

function renderChallenges(){const done=weeklyLessonCount(),claimed=state.weeklyClaims.includes(weeklyTargetKey()),qDone=state.day.claimed.length;return `<section class="page-intro"><div><span class="eyebrow">A REASON TO SHOW UP</span><h2>Small goals. Real momentum.</h2><p>Challenges turn your learning into something you can finish today. Keep them simple, keep them yours.</p></div></section><section class="challenge-layout"><article class="card challenge-feature"><span class="pill">THIS WEEK</span><h3>The steady learner</h3><p>Complete five lessons this week. You can explore different subjects—every finished lesson counts toward the goal.</p><div class="challenge-big-num">${Math.min(done,5)}<span style="font-size:19px;color:#b9bde0"> / 5</span></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,done/5*100)}%"></div></div><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;max-width:410px;margin:12px 0 19px"><span style="color:#c7cbe2;font-size:10px">${claimed?'Reward claimed':done>=5?'Goal reached! Claim your win by completing any lesson.':'Keep your pace; no need to rush.'}</span><strong style="font:800 12px Manrope">✦ 50 pts</strong></div><button class="btn ${done>=5&&!claimed?'btn-primary':'hero-secondary'}" data-action="claim-weekly" ${done<5||claimed?'disabled':''}>${claimed?'Reward claimed':done>=5?'Claim weekly reward':'Keep learning'} ${icon('arrow')}</button></article><section class="card challenge-side"><h3>Today's missions</h3><div class="challenge-list">${QUESTS.map(q=>{const v=state.day[q.field]||0,claimedQ=state.day.claimed.includes(q.id);return `<div class="challenge-row"><div class="challenge-check ${claimedQ?'complete':''}">${claimedQ?icon('check'):q.icon}</div><div class="challenge-row-copy"><strong>${q.title}</strong><small>${Math.min(v,q.target)} / ${q.target} · ${q.detail}</small></div><b>+${q.reward}</b></div>`}).join('')}</div><div style="border-top:1px solid var(--line);padding-top:15px;margin-top:14px;display:flex;justify-content:space-between;align-items:center"><span class="muted" style="font-size:10px">Missions completed today</span><strong style="font:800 14px Manrope">${qDone} / ${QUESTS.length}</strong></div></section></section><div class="section-heading"><div><span class="eyebrow">MILESTONES</span><h2>Badges you can earn</h2><p>No rush. Each badge marks a step worth remembering.</p></div><span class="pill purple">${state.achievements.length} / ${ACHIEVEMENTS.length} earned</span></div><section class="badges-grid">${ACHIEVEMENTS.map(achievementCard).join('')}</section>`}
function achievementCard(a){const earned=state.achievements.includes(a.id);return `<article class="card badge-card ${earned?'earned':''}"><div class="badge-emblem">${a.emoji}</div><strong>${a.title}</strong><p>${a.desc}</p><span class="badge-state">${earned?'✓ Unlocked':'Not yet'}</span></article>`}

function renderProgress(){const acc=state.answersTotal?Math.round(state.correctTotal/state.answersTotal*100):0;const totalLevels=COURSES.reduce((a,c)=>a+c.levels.length,0);const overall=Math.round(state.completedLessons.length/totalLevels*100);const coursesPlayed=COURSES.filter(c=>courseProgress(c)>0).length;return `<section class="page-intro"><div><span class="eyebrow">YOUR WORK, MADE VISIBLE</span><h2>Look how far you’ve come.</h2><p>Your progress is personal. This space tracks the practice you have done, the paths you have explored, and the streaks you are building.</p></div><div class="page-actions"><button class="btn btn-secondary" data-action="export-data">${icon('download')} Export progress</button></div></section><section class="stats-large"><div class="card"><span class="eyebrow">LEARNING PATHS</span><div class="big-number">${coursesPlayed}<span style="font-size:14px;color:var(--muted)"> / ${COURSES.length}</span></div><p>Subjects explored</p></div><div class="card"><span class="eyebrow">ANSWER ACCURACY</span><div class="big-number">${acc}%</div><p>${formatNumber(state.correctTotal)} correct of ${formatNumber(state.answersTotal)}</p></div><div class="card"><span class="eyebrow">BEST STREAK</span><div class="big-number">${state.longestStreak}<span style="font-size:14px;color:var(--muted)"> days</span></div><p>One day at a time</p></div></section><section class="progress-layout" style="margin-top:17px"><article class="card progress-overview"><h3>Your learning rhythm</h3><p>Lessons finished over the last seven days.</p><div class="accuracy-chart">${renderTallBars()}</div><div class="chart-legend"><span>Past seven days</span><strong>${weeklyLessonCount()} lessons</strong></div></article><article class="card progress-topics"><h3>Subject progress</h3><p class="muted" style="font-size:10px;margin:6px 0 0">Your completed levels across each path.</p><div class="topic-progress-list">${COURSES.slice().sort((a,b)=>courseProgress(b)/b.levels.length-courseProgress(a)/a.levels.length).map(c=>`<div class="topic-progress-row"><span class="subject-icon" style="background:${c.tint};color:${c.color}">${c.emoji}</span><div class="topic-progress-label"><strong>${escapeHTML(c.title)}</strong><div class="progress-track"><div class="progress-fill" style="width:${courseProgress(c)/c.levels.length*100}%"></div></div></div><small>${courseProgress(c)}/${c.levels.length}</small></div>`).join('')}</div></article></section><div class="section-heading"><div><span class="eyebrow">MOMENTS THAT COUNT</span><h2>Achievement shelf</h2><p>Every badge is a reminder that progress is made of small steps.</p></div><button class="text-link" data-action="go-page" data-page="challenges">All challenges ${icon('arrow')}</button></div><section class="badges-grid">${ACHIEVEMENTS.map(achievementCard).join('')}</section><div class="learn-banner" style="margin-top:18px"><div class="learn-banner-icon">✦</div><div class="learn-banner-copy"><strong>${overall}% of the learning library explored</strong><p>${state.completedLessons.length} of ${totalLevels} lessons completed. Keep exploring at your own pace.</p></div><button class="btn btn-secondary" data-action="go-page" data-page="learn">Continue learning</button></div>`}
function renderTallBars(){const ds=weeklyDates();const max=Math.max(1,...ds.map(d=>state.activity[localDate(d)]?.lessons||0));return ds.map(d=>{const key=localDate(d),v=state.activity[key]?.lessons||0;return `<div class="accuracy-day"><div class="accuracy-bar" style="height:${v?Math.max(8,v/max*95):3}px;opacity:${v?1:.28}" title="${v} lessons"></div><small>${d.toLocaleDateString(undefined,{weekday:'short'}).slice(0,1)}</small></div>`}).join('')}

function renderSettings(){return `<section class="page-intro"><div><span class="eyebrow">MAKE YOUR SPACE YOURS</span><h2>Settings & preferences.</h2><p>Your learning profile belongs to you. Nothing here needs an account or a server.</p></div></section><section class="settings-layout"><div class="settings-stack"><article class="card settings-card"><h3>Your profile</h3><p>A friendly name makes the learning space feel more personal. This name stays on this device.</p><div class="profile-preview"><span class="avatar">${initials(state.name)}</span><div><h3>${escapeHTML(state.name||'Learner')}</h3><p>Motive Learn member · Local profile</p></div></div><label class="field-label" for="profileName">Display name</label><input class="text-field" id="profileName" maxlength="30" value="${escapeHTML(state.name)}" placeholder="What should we call you?"><div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn btn-primary" data-action="save-profile">Save profile</button></div></article><article class="card settings-card"><h3>Appearance & comfort</h3><p>Make Motive Learn comfortable to use, day or night.</p><div class="setting-row"><div><strong>Dark appearance</strong><small>Use a deeper interface with softer contrast in low light.</small></div><button class="toggle ${state.darkMode?'on':''}" data-action="toggle-dark" role="switch" aria-checked="${state.darkMode}" aria-label="Dark appearance"><span></span></button></div><div class="setting-row"><div><strong>Reduced motion</strong><small>Minimise animated transitions and movement.</small></div><button class="toggle ${state.reducedMotion?'on':''}" data-action="toggle-motion" role="switch" aria-checked="${Boolean(state.reducedMotion)}" aria-label="Reduced motion"><span></span></button></div></article><article class="card settings-card"><h3>Your data</h3><p>Progress, points, streaks and upgrades are saved locally in this browser. Export a backup before moving to another device.</p><div class="settings-actions"><button class="btn btn-secondary" data-action="export-data">${icon('download')} Export my progress</button><button class="btn btn-secondary" data-action="import-data">Import backup</button></div><div class="settings-note">${icon('info')}<span>No account is required. Because this is a local-first app, progress does not automatically sync between browsers or devices. Clearing browser data may remove your saved progress.</span></div></article><article class="card settings-card"><h3>Start fresh</h3><p>Reset this device's Motive Learn profile and learning progress. This cannot be undone unless you have an exported backup.</p><button class="btn btn-danger" data-action="reset-progress">Reset learning data</button></article></div><aside class="settings-stack"><article class="card settings-card"><span class="subject-icon" style="background:#eef0ff;color:#697cf1;margin-bottom:16px">✦</span><h3>Motive Learn</h3><p>Technology thoughtfully made. A calm, practical place to build knowledge a little at a time.</p><div class="setting-row"><div><strong>Version</strong><small>1.0 · Local-first edition</small></div><span class="pill green">Ready</span></div><div class="setting-row"><div><strong>Learning tracks</strong><small>Languages, STEM, humanities and practical skills.</small></div><strong>${COURSES.length}</strong></div><div class="setting-row"><div><strong>Lessons available</strong><small>Short multiple-choice sessions with explanations.</small></div><strong>${COURSES.reduce((a,c)=>a+c.levels.length,0)}</strong></div><div class="setting-row"><div><strong>Saved on device</strong><small>Your progress stays in this browser.</small></div><span style="color:var(--green);font-weight:800;font-size:10px">● Active</span></div></article><article class="card settings-card"><h3>How points work</h3><p>Correct answers earn more points. Incorrect answers still earn a small amount, so a tricky question never leaves you at zero. Points can unlock levels and permanent boosts.</p><div class="setting-row"><div><strong>Correct answer</strong><small>Before skill boosts</small></div><span class="pill green">+10 pts</span></div><div class="setting-row"><div><strong>Incorrect answer</strong><small>Keep learning and try again</small></div><span class="pill orange">+1 pt</span></div><div class="setting-row"><div><strong>Daily lesson bonus</strong><small>Finish a lesson each day</small></div><span class="pill purple">+15 pts</span></div></article></aside></section>`}

function startLesson(courseId,levelIndex){const c=getCourse(courseId),l=getCourseLevel(courseId,levelIndex);if(!c||!l)return;if(!isUnlocked(c,levelIndex)){showToast('Unlock this level first by spending points.','lock');return;}state.lastCourseId=courseId;saveState();activeSession={courseId,levelIndex,questionIndex:0,selected:null,answered:false,correctCount:0,pointsEarned:0,repeat:state.completedLessons.includes(lessonKey(courseId,levelIndex))||state.attemptedLessons.includes(lessonKey(courseId,levelIndex)),finished:false};renderLessonModal();}
function renderLessonModal(){if(!activeSession){$('#modalRoot').innerHTML='';return;}const s=activeSession,c=getCourse(s.courseId),l=c.levels[s.levelIndex];const total=l.questions.length,q=l.questions[s.questionIndex];const answered=s.answered,answerIsCorrect=answered&&s.selected===q.answer;const hearts=`<div class="lesson-hearts"><span>✦</span> ${s.pointsEarned} pts</div>`;let feedback='';if(answered){feedback=`<div class="lesson-feedback ${answerIsCorrect?'good':'bad'}"><span class="feedback-mark">${answerIsCorrect?'✓':'!'}</span><div><strong>${answerIsCorrect?'That’s right!':`Not quite — the answer is ${escapeHTML(q.options[q.answer])}.`}</strong><p>${escapeHTML(q.explanation)}</p></div></div>`;}
  $('#modalRoot').innerHTML=`<div class="modal-backdrop" role="presentation"><section class="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lessonQuestionTitle"><header class="lesson-top"><div class="lesson-top-row"><button class="lesson-exit" data-action="close-lesson" aria-label="Close lesson">${icon('close')}</button><div class="lesson-course"><strong>${c.emoji} ${escapeHTML(c.title)} · ${escapeHTML(l.title)}</strong><small>${s.repeat?'Practice run · Earn fewer answer points':'Lesson session · Learn as you go'}</small></div>${hearts}</div><div class="lesson-progress-wrap"><div class="progress-track"><div class="progress-fill" style="width:${(s.questionIndex+(answered?1:0))/total*100}%"></div></div><small>${Math.min(s.questionIndex+(answered?1:0),total)} / ${total}</small></div></header><div class="lesson-body"><div class="lesson-kicker">QUESTION ${s.questionIndex+1} OF ${total}</div><h2 id="lessonQuestionTitle">${escapeHTML(q.prompt)}</h2><p class="lesson-prompt">Choose the best answer. You’ll get a short explanation after each question.</p><div class="question-choices">${q.options.map((opt,i)=>{let cls='';if(s.selected===i)cls+=' selected';if(answered&&i===q.answer)cls+=' correct';if(answered&&s.selected===i&&i!==q.answer)cls+=' incorrect';return `<button class="answer-choice${cls}" data-action="select-answer" data-answer="${i}" ${answered?'disabled':''}><span class="choice-key">${['A','B','C','D'][i]}</span><span>${escapeHTML(opt)}</span></button>`}).join('')}</div>${feedback}</div><footer class="lesson-footer"><div class="lesson-footer-note"><strong>${answered?(answerIsCorrect?'+ points earned':'Keep going'):'One question at a time.'}</strong><br>${answered?`${answerIsCorrect?'Correct answer':'Learning moment'} · ${s.pointsEarned} points this lesson`:'There’s no penalty for trying.'}</div>${answered?`<button class="btn btn-primary" data-action="next-question">${s.questionIndex===total-1?'Finish lesson':'Continue'} ${icon('arrow')}</button>`:`<button class="btn btn-primary" data-action="check-answer" ${s.selected===null?'disabled':''}>Check answer ${icon('arrow')}</button>`}</footer></section></div>`;}
function ensureActivity(){if(!state.activity[today()])state.activity[today()]={lessons:0,answers:0,correct:0};return state.activity[today()];}
function updateQuestRewards(){for(const q of QUESTS){if(state.day.claimed.includes(q.id))continue;if((state.day[q.field]||0)>=q.target){state.day.claimed.push(q.id);addPoints(q.reward);showToast(`${q.title} complete · +${q.reward} points`,'trophy');}}}
function recordAnswer(){const s=activeSession;if(!s||s.answered||s.selected===null)return;const c=getCourse(s.courseId),q=c.levels[s.levelIndex].questions[s.questionIndex],correct=s.selected===q.answer;const key=lessonKey(s.courseId,s.levelIndex);const reward=correct?(s.repeat?5:10)+state.skills.recall*2:1;
  state.attemptedLessons=Array.isArray(state.attemptedLessons)?state.attemptedLessons:[];if(!state.attemptedLessons.includes(key))state.attemptedLessons.push(key);s.answered=true;if(correct)s.correctCount++;s.pointsEarned+=reward;addPoints(reward);state.answersTotal++;if(correct)state.correctTotal++;ensureToday();state.day.answers++;if(correct)state.day.correct++;const a=ensureActivity();a.answers++;if(correct)a.correct++;updateQuestRewards();saveState();renderLessonModal();if(correct)showToast(`Correct · +${reward} points`,'check');}
function completeStreak(){const t=today();if(!state.lastActiveDate){state.streak=1;}else{const gap=dayDiff(state.lastActiveDate,t);if(gap===0){/* already active today */}else if(gap===1){state.streak+=1;}else if(gap===2&&state.skills.shieldCharges>0){state.skills.shieldCharges--;state.streak=Math.max(1,state.streak+1);showToast('Streak shield used. Your streak is safe.','shield');}else{state.streak=1;}}
  state.longestStreak=Math.max(state.longestStreak,state.streak);state.lastActiveDate=t;
  if(state.lastBonusDate!==t){const bonus=15+state.skills.daily*5;addPoints(bonus);state.lastBonusDate=t;return bonus;}return 0;}
function completeLesson(){const s=activeSession;if(!s)return;const key=lessonKey(s.courseId,s.levelIndex),first=!state.completedLessons.includes(key),perfect=s.correctCount===getCourse(s.courseId).levels[s.levelIndex].questions.length;state.lessonsTotal++;if(first)state.completedLessons.push(key);if(perfect)state.perfectRuns++;ensureToday();state.day.lessons++;const a=ensureActivity();a.lessons++;const streakBonus=completeStreak();updateQuestRewards();checkWeeklyReward();awardAchievements();saveState();s.finished=true;renderResults(streakBonus,first,perfect);}
function checkWeeklyReward(){if(weeklyLessonCount()>=5&&!state.weeklyClaims.includes(weeklyTargetKey())){state.weeklyReady=true;}}
function awardAchievements(){const newly=[];for(const a of ACHIEVEMENTS){if(a.test(state)&&!state.achievements.includes(a.id)){state.achievements.push(a.id);newly.push(a);}}newly.forEach(a=>showToast(`Achievement unlocked · ${a.title}`,'trophy'));}
function renderResults(streakBonus,first,perfect){const s=activeSession,c=getCourse(s.courseId),l=c.levels[s.levelIndex];const accuracy=Math.round(s.correctCount/l.questions.length*100);const parts=[];if(first)parts.push('New lesson completed');if(perfect)parts.push('Perfect focus');if(streakBonus)parts.push(`Daily bonus +${streakBonus}`);parts.push(`${accuracy}% correct`);$('#modalRoot').innerHTML=`<div class="modal-backdrop"><section class="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="resultsTitle"><div class="lesson-results"><div class="results-icon">${perfect?'🏆':'✦'}</div><span class="eyebrow">${first?'PATH PROGRESS UPDATED':'PRACTICE COMPLETE'}</span><h2 id="resultsTitle">${perfect?'Brilliant work.':'Nice work showing up.'}</h2><p>${first?`You finished “${escapeHTML(l.title)}” in ${escapeHTML(c.title)}. Another step added to your learning path.`:'You completed another practice run. Revisit a lesson whenever you want to reinforce what you know.'}${perfect?' You got every answer right.':' Every attempt is a chance to make the next one easier.'}</p><div class="result-stats"><div class="result-stat"><strong>${s.correctCount}/${l.questions.length}</strong><small>Correct answers</small></div><div class="result-stat"><strong>${accuracy}%</strong><small>Accuracy</small></div><div class="result-stat"><strong>${s.pointsEarned+streakBonus}</strong><small>Points gained*</small></div></div>${streakBonus?`<div class="result-bonus">✦ Daily lesson bonus +${streakBonus} points</div>`:''}<div class="result-actions"><button class="btn btn-secondary" data-action="results-path">View learning path</button><button class="btn btn-primary" data-action="results-continue">Keep learning ${icon('arrow')}</button></div><p style="font-size:9px;margin-top:17px">*Includes points from your answers and today's streak bonus. Mission rewards are added separately.</p></div></section></div>`;}
function closeLesson(){if(activeSession&&!activeSession.finished){showToast('Lesson closed. Your answered-question points are saved.','info');}activeSession=null;$('#modalRoot').innerHTML='';render();}
function unlockLevel(courseId,index){const c=getCourse(courseId);if(!c||index===0)return;const key=lessonKey(courseId,index);if(isUnlocked(c,index)){showToast('This level is already unlocked.','info');return;}const cost=unlockCost(index);if(state.points<cost){showToast(`You need ${cost-state.points} more points for this level.`,'lock');return;}state.points-=cost;state.unlockedLessons.push(key);saveState();showToast(`${c.levels[index].title} unlocked.`,'check');render();}
function buySkill(skillId){const skill=SKILLS.find(s=>s.id===skillId);if(!skill)return;const level=skillLevel(skill);if(level>=skill.max){showToast('You already have this upgrade at max level.','info');return;}const cost=skillCost(skill);if(state.points<cost){showToast(`You need ${cost-state.points} more points for this upgrade.`,'lock');return;}state.points-=cost;if(skillId==='shield'){state.skills.shield=true;state.skills.shieldCharges++;}else state.skills[skillId]++;awardAchievements();saveState();render();showToast(`${skill.title} upgraded.`,'sparkles');}
function claimWeekly(){const count=weeklyLessonCount(),key=weeklyTargetKey();if(count<5){showToast('Finish five lessons this week to claim the reward.','info');return;}if(state.weeklyClaims.includes(key)){showToast('You already claimed this week’s reward.','info');return;}state.weeklyClaims.push(key);addPoints(50);awardAchievements();saveState();render();showToast('Weekly goal complete · +50 points','trophy');}
function exportData(){const payload={app:'Motive Learn',schema:1,exportedAt:new Date().toISOString(),state};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`motive-learn-progress-${today()}.json`;document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);showToast('Progress backup exported.','download');}
function importData(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);const imported=data.state||data;if(imported.schema!==1||!Array.isArray(imported.completedLessons)||!imported.skills)throw new Error('This file is not a Motive Learn backup.');if(!confirm('Import this backup and replace progress currently saved on this device?'))return;const safe=makeDefaultState();state={...safe,...imported,skills:{...safe.skills,...imported.skills},day:{...safe.day,...imported.day},activity:imported.activity&&typeof imported.activity==='object'?imported.activity:{},completedLessons:imported.completedLessons.filter(k=>typeof k==='string'),unlockedLessons:Array.isArray(imported.unlockedLessons)?imported.unlockedLessons.filter(k=>typeof k==='string'):[],attemptedLessons:Array.isArray(imported.attemptedLessons)?imported.attemptedLessons.filter(k=>typeof k==='string'):[],achievements:Array.isArray(imported.achievements)?imported.achievements:[],weeklyClaims:Array.isArray(imported.weeklyClaims)?imported.weeklyClaims:[]};ensureToday();saveState();render();showToast('Backup imported successfully.','check');}catch(e){alert(e.message||'Could not import this backup.');}};reader.readAsText(file);}
function showToast(message,symbol='sparkles'){const region=$('#toastRegion');const t=document.createElement('div');const sym=symbol==='check'?'✓':symbol==='trophy'?'🏆':symbol==='lock'?'🔒':symbol==='shield'?'🛡️':symbol==='download'?'↓':symbol==='info'?'i':'✦';t.className='toast';t.innerHTML=`<span class="toast-symbol">${sym}</span><span>${escapeHTML(message)}</span>`;region.append(t);setTimeout(()=>{t.classList.add('toast-leave');setTimeout(()=>t.remove(),280)},3000);}
function toggleTheme(){state.darkMode=!state.darkMode;saveState();syncTheme();const main=$('#mainView');}
function saveProfile(){const input=$('#profileName');if(!input)return;const name=input.value.trim().slice(0,30)||'Learner';state.name=name;saveState();render();showToast('Profile saved on this device.','check');}
function resetProgress(){if(!confirm('Reset all Motive Learn progress on this device? This removes your points, streak, achievements and learning history.'))return;state=makeDefaultState();ensureToday();saveState();currentPage='home';courseFilter='All';courseSearch='';$('#globalSearch').value='';render();showToast('Learning space reset. Ready for a fresh start.','check');}

function handleAction(actionEl){const action=actionEl.dataset.action;
  switch(action){
    case 'go-page':go(actionEl.dataset.page);break;
    case 'open-course':currentCourse=actionEl.dataset.course;currentPage='course';render();window.scrollTo({top:0,behavior:'smooth'});break;
    case 'start-recommended':{const r=recommendedLesson();startLesson(r.course.id,r.index);break;}
    case 'start-lesson':startLesson(actionEl.dataset.course,Number(actionEl.dataset.level));break;
    case 'unlock-level':unlockLevel(actionEl.dataset.course,Number(actionEl.dataset.level));break;
    case 'set-filter':courseFilter=actionEl.dataset.filter;render();break;
    case 'buy-skill':buySkill(actionEl.dataset.skill);break;
    case 'check-answer':recordAnswer();break;
    case 'select-answer':if(activeSession&&!activeSession.answered){activeSession.selected=Number(actionEl.dataset.answer);renderLessonModal();}break;
    case 'next-question':if(activeSession){const c=getCourse(activeSession.courseId),l=c.levels[activeSession.levelIndex];if(activeSession.questionIndex<l.questions.length-1){activeSession.questionIndex++;activeSession.selected=null;activeSession.answered=false;renderLessonModal();}else completeLesson();}break;
    case 'close-lesson':closeLesson();break;
    case 'results-path':if(activeSession){currentCourse=activeSession.courseId;activeSession=null;$('#modalRoot').innerHTML='';currentPage='course';render();}break;
    case 'results-continue':{activeSession=null;$('#modalRoot').innerHTML='';const rec=recommendedLesson();startLesson(rec.course.id,rec.index);break;}
    case 'toggle-dark':state.darkMode=!state.darkMode;saveState();render();break;
    case 'toggle-motion':state.reducedMotion=!state.reducedMotion;saveState();render();break;
    case 'save-profile':saveProfile();break;
    case 'export-data':exportData();break;
    case 'import-data':$('#importFile').click();break;
    case 'reset-progress':resetProgress();break;
    case 'claim-weekly':claimWeekly();break;
  }
}

document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-page]');
  if(nav && !nav.dataset.action){go(nav.dataset.page);return;}
  if(e.target.closest('.brand[data-page-link]')){go('home');return;}
  const action=e.target.closest('[data-action]');if(action){handleAction(action);return;}
});
$('#menuButton').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#mobileOverlay').classList.add('show')});
$('#mobileOverlay').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#mobileOverlay').classList.remove('show')});
$('#themeToggle').addEventListener('click',()=>{state.darkMode=!state.darkMode;saveState();render()});
$('#globalSearch').addEventListener('input',e=>{courseSearch=e.target.value;if(courseSearch&&currentPage!=='learn'){go('learn');return;}if(currentPage==='learn')render();});
$('#globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){go('learn');$('#mainView').scrollIntoView({behavior:'smooth'});}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();e.target.focus();}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(activeSession)closeLesson();else{ $('#sidebar').classList.remove('open');$('#mobileOverlay').classList.remove('show');}}if((e.key==='Enter'||e.key===' ')&&e.target.matches('.course-card[data-action="open-course"]')){e.preventDefault();currentCourse=e.target.dataset.course;currentPage='course';render();window.scrollTo({top:0,behavior:'smooth'});}});
$('#importFile').addEventListener('change',e=>{importData(e.target.files[0]);e.target.value='';});

ensureToday();
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
$('#yearNow').textContent=new Date().getFullYear();
applyIcons(document);
if(!state.reducedMotion)document.documentElement.style.scrollBehavior='smooth';
awardAchievements();saveState();render();
