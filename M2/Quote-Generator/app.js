var person = []
var quote = 0
var prevQuoteValue = -1
let element = document.getElementById("getQuote")

////////// Tells the system the selected person //////////
document.getElementById('Arthur').onclick = function() {people("Arthur Morgan")}
document.getElementById('Phoebe').onclick = function() {people("Phoebe Waller-Bridge")}
document.getElementById('Charlie').onclick = function() {people("Charlie Kaufman")}
document.getElementById('Margaret').onclick = function() {people("Margaret Atwood")}
document.getElementById('Geralt').onclick = function() {people("Geralt of Rivia")}

////////// Check if a different person is selected //////////
function people(diffPerson){
  if(diffPerson != person){
    person = []
    person.push(diffPerson)
  } else if(diffPerson == null){
    person.push(diffPerson)
  }
  element.removeAttribute("hidden")
  console.log(person)
}

////////// Generate a quote //////////
async function getQuote() {
  if(person == "Arthur Morgan"){ ////////// Arthur Morgan //////////
    var image = ["images/arthur.jpeg"]
    var quotes = [
      '"You don’t get to live a bad life and have good things happen to you."',
      '"Lack of something to feel important about is almost the greatest tragedy a man may have."',
      '"We’re more ghosts than people."',
      '"We can’t change what’s done, we can only move on."',
      '"Lack of something to feel important about is almost the greatest tragedy a man may have."' 
    ]
  } else if(person == "Phoebe Waller-Bridge"){ ////////// Phoebe Waller-Bridge //////////
    var image = ["images/phoebe.jpg"]
    var quotes = [
      '"People just disappear because it spooks them to be around someone in pain."',
      '"Maybe happiness isn’t what you believe, but who you believe."',
      '"People make mistakes. That’s why they put rubbers at the end of pencils."',
      '"I want someone to tell me what to wear every morning. I want someone to tell me what to eat. What to like, what to hate, what to rage about, what to listen to, what band to like, what to buy tickets for, what to joke about, what not to joke about. I want someone to tell me what to believe in, who to vote for, who to love and how to tell them."',
      '"Love is awful. It’s painful. Frightening. It makes you doubt yourself, judge yourself, distance yourself from the other people in your life. Makes you selfish, makes you creepy, makes you obsessed with your hair. It takes strength to know what’s right. And love isn’t something that weak people do. Being a romantic takes a hell of a lot of hope."'
    ]
  } else if(person == "Charlie Kaufman"){ ////////// Charlie Kaufman //////////
    var image = ["images/charlie.jpg"]
    var quotes = [
      '"And the truth is I’m so angry and the truth is I’m so fucking sad, and the truth is I’ve been so fucking hurt for so fucking long and for just as long have been pretending I’m ok, just to get along, just for, I don’t know why, maybe because no one wants to hear about my misery, because they have their own, and their own is too overwhelming to allow them to listen to or care about mine."',
      '"Too many guys think I’m a concept, or I complete them, or I’m gonna make them alive. But I’m just a fucked-up girl who’s lookin’ for my own peace of mind; don’t assign me yours."',
      '"What was once before you - an exciting, mysterious future - is now behind you. Lived; understood; disappointing. You realize you are not special. You have struggled into existence, and are now slipping silently out of it. This is everyone’s experience."',
      '"How happy is the blameless vestal’s lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind! Each pray’r accepted, and each wish resign’d."',
      '"But while alive, you wait in vain, wasting years, for a phone call or a letter or a look from someone or something to make it all right. And it never comes or it seems to but doesn’t really. And so you spend your time in vague regret or vaguer hope for something good to come along. Something to make you feel connected, to make you feel whole, to make you feel loved."'
    ]
  } else if(person == "Margaret Atwood"){ ////////// Margaret Atwood //////////
    var image = ["images/margaret.jpg"]
    var quotes = [
      '"But people will do anything rather than admit that their lives have no meaning. No use, that is. No plot."',
      '"I am not your justification for existence."',
      '"You can’t help what you feel, but you can help how you behave."',
      '"But remember that forgiveness too is a power. To beg for it is a power, and to withhold or bestow it is a power, perhaps the greatest."',
      '"Perspective is necessary, otherwise there are only two dimensions. Otherwise, you live with your face squashed up against a wall, everything a huge foreground, of details, close-ups, hairs, the weave of the bedsheet, the molecules of the face...otherwise, you live in the moment. Which is not where I want to be."'
    ]
  } else if(person == "Geralt of Rivia"){ ////////// Geralt of Rivia //////////
    var image = ["images/geralt.jpg"]
    var quotes = [
      '"But first appearances are often deceptive. Not everything monstrous-looking is evil, and not everything fair is good… and in every fairytale, there is a grain of truth."',
      '"This world is full of Evil which waits for the day none of us are left."',
      '"Mistakes are also important to me. I don’t cross them out of my life, or memory. And I never blame others for them."',
      '"Time eats away at memories, distorts them. Sometimes we only remember the good... sometimes only the bad."',
      '"Evil is evil. Lesser, greater, middling... Makes no difference. The degree is arbitrary. The definition’s blurred. If I’m to choose between one evil and another... I’d rather not choose at all."'
    ]
  }
  while(prevQuoteValue == quote || prevQuoteValue == -1)
  {
    quote = await Math.floor(Math.random() * quotes.length)
    console.log(quote)
    prevQuoteValue = 0
  }
  prevQuoteValue = quote
  document.querySelector("#quote").textContent = quotes[quote]
  document.querySelector("#image").src = image
  document.querySelector("#person").textContent = person
}