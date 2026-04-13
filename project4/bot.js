require("dotenv").config();

const m = require("masto");

const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io",
  accessToken: process.env.TOKEN,
});

const makeStatus = async () => {
  let poems = [
    "Hope is the thing with feathers / That perches in the soul / And sings the tune without the words / And never stops at all. #hope",
    "Forever is composed of nows. #forever",
    "That it will never come again is what makes life so sweet. #sweet",
    "A little Madness in the Spring is wholesome even for the King. #wholesome",
    "Nature is a haunted house—but Art—is a house that tries to be haunted. #what?",
    "To live is so startling it leaves little time for anything else. #deep",
    "Beauty is not caused. It is. #preach",
    "The soul should always stand ajar, ready to welcome the ecstatic experience. #yes",
    "Dogs are better than human beings because they know but do not tell. #IWantToBeADog",
    "How happy is the little stone / That rambles in the road alone, / And doesn't care about careers, / And exigencies never fears; / Whose coat of elemental brown / A passing universe put on; / And independent as the sun, / Associates or glows alone, / Fulfilling absolute decree / In casual simplicity. #ThisHitsHardRightNow",
    "The Heart wants what it wants—or else it does not care. #TheHeartWantsWhatItWants",
    "Truth is so rare, it is delightful to tell it. #real",
    "The dearest ones of time, the strongest friends of the soul—BOOKS. #booklife",
    "One need not be a chamber to be haunted. #ImHaunted",
    "Unable are the loved to die. For love is immortality. #WeAreImmortal",
    "Life is a spell so exquisite that everything conspires to break it. #brokenlife",
    "A wounded deer leaps the highest. #yesss",
    "Behavior is what a man does, not what he thinks, feels, or believes. #actionsmatter",
    "Those who have not found the heaven below will fail of it above. #amIgoingtohell?",
    "To be alive—is Power. #power",
    "That love is all there is, is all we know of love. #love",
    "Anger as soon as fed is dead—/'Tis starving makes it fat. #fat",
    "Dying is a wild night and a new road. #wild",
    "The possible's slow fuse is lit by the imagination. #lit",
    "In this short life/that only lasts an hour,/how much—how little—is within our power. #SoSad",
    "People need hard times and oppression to develop psychic muscles. #damn",
    "To shut your eyes is to travel. #crazzyyy",
    "Old age comes on suddenly, and not gradually as is thought. #ImScared",
  ];

  let randomSelection = Math.floor(Math.random() * poems.length);

  const s = await masto.v1.statuses.create({
    status: poems[randomSelection],
    visibility: "public",
  });
  console.log(s.url);
};

//will post a status one time every 3 hours
makeStatus();
setInterval(makeStatus, 10800000);
