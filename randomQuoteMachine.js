const QUOTES = [
  '"The Dude abides."',
  '"That rug really tied the room together."',
  '"Will you come off it, Walter? You\'re not even f***ing Jewish, man."',
  '"This is not a worthy adversary."',
  '"...for recreation? Oh, the usual. I bowl. Drive around. The occasional acid flashback."',
  '"I had a rough night and I hate the f***ing Eagles, man."',
  '"Yeah, well, that’s just, like, your opinion, man."',
  '-Darkness washed over the Dude - darker\'n a black steer\'s tookus on a moonless prairie night. There was no bottom.-',
  '"You want a toe? I can get you a toe, believe me. There are ways, Dude. You don\'t wanna know about it, believe me."',
  '"Hell, I can get you a toe by three o’clock this afternoon… with nail polish."',
  '"Am I wrong?" "No you\'re not wrong." "Am I wrong?" "You\'re not wrong Walter. You\'re just an asshole." "All right then."',
  '"You human paraquat! You figured \'Oh, here\'s a loser. A deadbeat, someone the square community won\'t give a shit about.\'\"  \"Well, aren\'t you?\" \"Well... yeah."',
  '"No, you\'re not wrong, you\'re just an a**hole."',
  '"Fortunately, I\'m adhering to a pretty strict, uh, drug, uh, regimen to keep my mind, you know, uh, limber."',
  '"Does this place look like I\'m f***in\' married? The toilet seat\’s up man!"',
  '"Am I the only one who gives a s*** about the rules?!"',
  '"Nobody calls me Lebowski. You got the wrong guy. I\'m The Dude, man."',
  '"Were you listening to the Dude\'s story, Donny?" "I was bowling."',
  '"Johnson?"',
  'She\'s not my special lady, she\'s my f***ing lady friend. I\'m just helping her conceive."',
  '"You have no frame of reference here, Donny. You\'re like a child who wanders into the middle of a movie."',
  '"Walter, Walter, what\'s the point, man?"',
  '"Are these the Nazis, Walter?" "No, Donny, these men are nihilists, there\'s nothing to be afraid of."',
  '"OVER THE LINE!!!"',
  '"You are entering a world of pain."',
  '"This aggression will not stand, man."',
  '"I\'m not Mr Lebowski. You\'re Mr Lebowski. I\'m The Dude."',
  '"Dude, where is your car?"',
  'So that\'s what you call me, you know, that, or His Dudeness, or, uh, Duder, or El Duderino, if you\'re not into the whole brevity thing."',
  '"Has the whole world gone crazy?!!"',
  '"Calm down, you\'re being very un-Dude."',
  '"Hey, careful, man, there\'s a beverage here!"',
  '"Sometimes you eat the bar and sometimes, well, the bar eats you."',
  '"At least I\'m housebroken."',
  '"I was talking about my rug."',
  '"I\'m sorry your stepmother is a nympho."',
  '"3000 years of beautiful tradition, from Moses to Sandy Koufax, you\'re goddamned right I\'m livin in the f***ing past!"',
  '"I mean, say what you want about the tenants of National Socialism, Dude, at least it\'s an ethos."',
  '"Just take it easy, man."',
  '"Strikes and gutters, ups and downs."',
  '"Walter, I love you, but sooner or later you are going to have to face the fact that you\'re a moron."',
  '"Yeah, well, that\'s just, like, your opinion, man."',
  '"I do mind. The Dude minds. This will not stand, ya know, this aggression will not stand, man."',
  '"That kid already spent all the money!" "New Corvette? Hardly, Dude. I\'d say he\'s still got about $960 - $970,000 left, depending on the options."',
  '"I don\'t need your sympathy, I need my Johnson."',
  '"Ah, f*** it."',
  '"You said it, man. Nobody f***s with the Jesus." "Eight-year-olds do."',
  '"Do you see what happens, Larry? Do you see what happens when you f*** a stranger in the ass?!"',
  '"Son, this is what happens when you f*** a stranger in the ass!"',
  '"What\'s a... pederast, Walter?" "Shut the f*** up, Donny."',
  '"F*** it dude, let\'s go bowling."',
  '"I can\'t be worrying about that s***. Life goes on, man."',
  '"The ringer cannot look empty."',
  '"You know, Dude, I myself dabbled in pacifism once. Not in \'nam, of course."',
  '"I could be just sitting at home with pee stains on my rug."',
  '"Isn\'t that what makes a man?" "Mmm, sure. That and a pair of testicles."',
  '"They peed on my rug, man!"',
  '"Obviously, you are not a golfer!"',
  '"So if you could just write me a check for ten percent of a million dollars... five grand..."',
  '"You brought the f***in\' Pomeranian bowling?"',
  '"What do you mean brought (the dog) bowling, Dude? I didn\'t rent it shoes. I\'m not buying it a f***ing beer. He\'s not taking your f***ing turn, Dude."',
  '"I don\'t see any connection to Vietnam, Walter." "Well, there isn\'t a literal connection, Dude." "Walter, face it, there isn\'t any connection."',
  '"I\'ll take it away from you, stick it up your ass and pull the f***ing trigger \'til it goes: \'click\'."',
  '"This is not \'nam. This is bowling. There are rules."',
  '"I told that Kraut a f***in\' thousand times, I don\'t roll on Shabbos!"',
  '"That\'s right, Dude, they peed on your f***ing rug."',
  '"Do you have to use so many cuss words?" "What the f*** you talking about?"',
  '"I\'m sorry, I wasn\'t listening."',
  '"This is a very complicated case... You know, a lotta ins, a lotta outs, lotta what-have-yous."',
  '"I am the walrus."'
];

let randomQuote;
let currentQuote;

function getQuote() {
  let randomNum;
  randomNum = Math.floor(Math.random() * QUOTES.length);
  randomQuote = QUOTES[randomNum];
  $(".quote").text(randomQuote);
}

$(".twitter-button").on("click", function() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      randomQuote +
      " - The Big Lebowski"
  );
});

$(document).ready(function() {
  $(".another-quote").on("click", function() {
    getQuote();
  });
});