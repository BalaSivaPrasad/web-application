// server.js (Backend with Node.js and Express.js)
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
const importantPlaces = {
  "Andhra Pradesh": {
    cities: ["Amaravati (Capital City)", "Visakhapatnam (Port City)", "Tirupati (Temple City)"],
    temples: ["Tirumala Venkateswara Temple", "Sri Kalahasti Temple"],
    parksAndSanctuaries: ["Sri Venkateswara Wildlife Sanctuary", "Kambalakonda Wildlife Sanctuary"],
    hillyRegions: ["Araku Valley"],
    forts: ["Chilkur Balaji Fort"],
    mountains: ["Eastern Ghats"]
  },
  "Arunachal Pradesh": {
    cities: ["Itanagar (Capital City)", "Tawang", "Ziro"],
    temples: ["Tawang Monastery"],
    parksAndSanctuaries: ["Namdapha National Park", "Mouling National Park"],
    hillyRegions: ["Himalayas"],
    forts: ["Naharlagun Fort"],
    mountains: ["Himalayas"]
  },
  "Assam": {
    cities: ["Guwahati (Gateway of Northeast)", "Tezpur", "Jorhat"],
    temples: ["Kamakhya Temple", "Umananda Temple"],
    parksAndSanctuaries: ["Kaziranga National Park", "Manas National Park"],
    hillyRegions: ["Naga Hills"], // Corrected from "Kaziranga Hills"
    forts: ["Sivasagar Fort", "Rang Ghar"], // Corrected fort names
    mountains: ["Himalayas"]
  },
  "Bihar": {
    cities: ["Patna (Capital City)", "Gaya", "Bhagalpur"],
    temples: ["Bodh Gaya (Mahabodhi Temple)", "Vaishali (Lord Buddha Site)"],
    parksAndSanctuaries: ["Kaimur Wildlife Sanctuary", "Valmiki National Park"],
    hillyRegions: ["Kaimur Hills"],
    forts: ["Patna Fort", "Gaya Fort"],
    mountains: ["Kaimur Hills"]
  },
  "Chhattisgarh": {
    cities: ["Raipur (Capital City)", "Bilaspur", "Durg"],
    temples: ["Bhoramdeo Temple", "Chhattisgarh Mahadev Temple"],
    parksAndSanctuaries: ["Kanger Valley National Park", "Indravati National Park"],
    hillyRegions: ["Chilpi Hills"],
    forts: ["Rajnandgaon Fort", "Chandrapur Fort"],
    mountains: ["Maikal Hills"]
  },
  "Goa": {
    cities: ["Panaji (Capital City)", "Margao", "Vasco da Gama"],
    temples: ["Shri Mangueshi Temple", "Shri Shantadurga Temple"],
    parksAndSanctuaries: ["Bhagwan Mahavir Wildlife Sanctuary", "Salim Ali Bird Sanctuary"],
    hillyRegions: ["Western Ghats"],
    forts: ["Aguada Fort", "Chapora Fort"],
    mountains: ["Western Ghats"]
  },
  "Gujarat": {
    cities: ["Ahmedabad (Commercial Capital)", "Surat", "Vadodara"],
    temples: ["Somnath Temple", "Dwarkadhish Temple", "Akshardham Temple"],
    parksAndSanctuaries: ["Gir National Park", "Rann of Kutch"],
    hillyRegions: ["Saputara"],
    forts: ["Lal Kot", "Patan Fort"],
    mountains: ["Aravalli Range"]
  },
  "Haryana": {
    cities: ["Chandigarh (Capital City)", "Gurugram", "Faridabad"],
    temples: ["Sultanpur Bird Sanctuary", "Sheetala Devi Temple"],
    parksAndSanctuaries: ["Sultanpur National Park", "Kalesar Wildlife Sanctuary"],
    hillyRegions: ["Aravalli Range"],
    forts: ["Firoz Shah Kotla Fort", "Gurgaon Fort"],
    mountains: ["Aravalli Range"]
  },
  "Himachal Pradesh": {
    cities: ["Shimla (Capital City)", "Manali", "Kullu"],
    temples: ["Hidimba Devi Temple", "Jwalamukhi Temple"],
    parksAndSanctuaries: ["Great Himalayan National Park", "Kangra Valley Wildlife Sanctuary"],
    hillyRegions: ["Manali", "Shimla"],
    forts: ["Kangra Fort", "Chamba Fort"],
    mountains: ["Himalayas"]
  },
  "Jharkhand": {
    cities: ["Ranchi (Capital City)", "Jamshedpur", "Dhanbad"],
    temples: ["Baidyanath Temple", "Deoghar Temple"],
    parksAndSanctuaries: ["Betla National Park", "Hazaribagh Wildlife Sanctuary"],
    hillyRegions: ["Netarhat"],
    forts: ["Ranchi Fort"],
    mountains: ["Chotanagpur Plateau"]
  },
  "Karnataka": {
    cities: ["Bangalore (IT Capital)", "Mysore", "Hubli"],
    temples: ["Virupaksha Temple (Hampi)", "Golden Temple (Coorg)"],
    parksAndSanctuaries: ["Bandipur National Park", "Nagarhole National Park"],
    hillyRegions: ["Coorg", "Chikmagalur"],
    forts: ["Bangalore Fort", "Chitradurga Fort"],
    mountains: ["Western Ghats"]
  },
  "Kerala": {
    cities: ["Thiruvananthapuram (Capital City)", "Kochi (Commercial Hub)", "Kozhikode (Historic Trade Center)"],
    temples: ["Sabarimala (Lord Ayyappa Temple)", "Padmanabhaswamy Temple"],
    parksAndSanctuaries: ["Periyar Wildlife Sanctuary", "Silent Valley National Park"],
    hillyRegions: ["Munnar", "Wayanad"],
    forts: ["Bekal Fort", "St. Angelo's Fort"],
    mountains: ["Western Ghats"]
  },
  "Madhya Pradesh": {
    cities: ["Bhopal (Capital City)", "Indore", "Gwalior"],
    temples: ["Kedarnath Temple", "Mahakaleshwar Jyotirlinga"],
    parksAndSanctuaries: ["Kanha National Park", "Bandhavgarh National Park"],
    hillyRegions: ["Satpura Hills"],
    forts: ["Gwalior Fort", "Mandu Fort"],
    mountains: ["Satpura Range"]
  },
  "Maharashtra": {
    cities: ["Mumbai (Financial Capital)", "Pune (IT Hub)", "Nagpur (Orange City)"],
    temples: ["Shirdi (Sai Baba Temple)", "Grishneshwar (Jyotirlinga Temple)", "Ellora Caves (Ancient Buddhist Temples)"],
    parksAndSanctuaries: ["Sanjay Gandhi National Park", "Tadoba Tiger Reserve"],
    hillyRegions: ["Lonavala", "Mahabaleshwar"],
    forts: ["Sinhagad Fort", "Raigad Fort", "Lohagad Fort"],
    mountains: ["Western Ghats"]
  },
  "Manipur": {
    cities: ["Imphal (Capital City)", "Thoubal"],
    temples: ["Lunglei Church", "Bikramshila Monastery"],
    parksAndSanctuaries: ["Keibul Lamjao National Park", "Sangai Wildlife Sanctuary"],
    hillyRegions: ["Yumnak Hills"],
    forts: ["Kangla Fort"],
    mountains: ["Naga Hills"]
  },
  "Meghalaya": {
    cities: ["Shillong (Capital City)", "Tura"],
    temples: ["Shri Shankar Temple", "Nartiang Temple"],
    parksAndSanctuaries: ["Nokrek National Park", "Siju Wildlife Sanctuary"],
    hillyRegions: ["Shillong Plateau"],
    forts: ["Shillong Fort"],
    mountains: ["Eastern Himalayas"]
  },
  "Mizoram": {
    cities: ["Aizawl (Capital City)", "Lunglei"],
    temples: ["Lunglei Church", "Bikramshila Monastery"],
    parksAndSanctuaries: ["Dampa Tiger Reserve", "Murlen National Park"],
    hillyRegions: ["Lushai Hills"],
    forts: ["Aizawl Fort"],
    mountains: ["Lushai Hills"]
  },
  "Nagaland": {
    cities: ["Kohima (Capital City)", "Dimapur"],
    temples: ["Kohima Cathedral"],
    parksAndSanctuaries: ["Puliebadze Wildlife Sanctuary"],
    hillyRegions: ["Naga Hills"],
    forts: ["Kohima Fort"],
    mountains: ["Naga Hills"]
  },
  "Odisha": {
    cities: ["Bhubaneswar (Capital City)", "Cuttack", "Puri"],
    temples: ["Jagannath Temple (Puri)", "Lingaraja Temple (Bhubaneswar)"],
    parksAndSanctuaries: ["Simlipal National Park", "Chilika Lake"],
    hillyRegions: ["Mahanadi Hills"],
    forts: ["Brahmapur Fort"],
    mountains: ["Eastern Ghats"]
  },
  "Punjab": {
    cities: ["Chandigarh (Capital City)", "Amritsar (Golden Temple)", "Ludhiana"],
    temples: ["Golden Temple (Amritsar)", "Durgiana Temple"],
    parksAndSanctuaries: ["Harike Wetland", "Ropar Wetland"],
    hillyRegions: ["Shivalik Hills"],
    forts: ["Qila Mubarak", "Lahore Fort"],
    mountains: ["Shivalik Range"]
  },
  "Rajasthan": {
    cities: ["Jaipur (Pink City)", "Jodhpur (Sun City)", "Udaipur (City of Lakes)"],
    temples: ["Dilwara Temples", "Brahma Temple (Pushkar)"],
    parksAndSanctuaries: ["Ranthambhore National Park", "Sariska Tiger Reserve"],
    hillyRegions: ["Aravalli Range"],
    forts: ["Amber Fort", "Mehrangarh Fort", "Chittorgarh Fort"],
    mountains: ["Aravalli Hills"]
  },
  "Sikkim": {
    cities: ["Gangtok (Capital City)", "Pelling", "Namchi"],
    temples: ["Rumtek Monastery", "Tsuk La Khang Monastery"],
    parksAndSanctuaries: ["Khangchendzonga National Park", "Fambong Lho Wildlife Sanctuary"],
    hillyRegions: ["Khangchendzonga Range"],
    forts: ["Tashiding Monastery"],
    mountains: ["Khangchendzonga Mountain"]
  },
  "Tamil Nadu": {
    cities: ["Chennai (State Capital)", "Coimbatore (Manchester of South India)", "Madurai (Temple City)"],
    temples: ["Meenakshi Temple (Madurai)", "Brihadeeswarar Temple (Thanjavur)"],
    parksAndSanctuaries: ["Mudumalai Wildlife Sanctuary", "Indira Gandhi Wildlife Sanctuary"],
    hillyRegions: ["Ooty (Nilgiris)"],
    forts: ["Vijayanagar Fort (Chennai)", "Fort St. George (Chennai)"],
    mountains: ["Nilgiri Hills"]
  },
  "Telangana": {
    cities: ["Hyderabad (Capital City)", "Warangal", "Khammam"],
    temples: ["Sri Lakshmi Narasimha Swamy Temple (Yadagirigutta)", "Bhadrachalam Temple"],
    parksAndSanctuaries: ["KBR National Park", "Eturnagaram Wildlife Sanctuary"],
    hillyRegions: ["Hills of Telangana"],
    forts: ["Golconda Fort", "Warangal Fort"],
    mountains: ["Eastern Ghats"]
  },
  "Uttar Pradesh": {
    cities: ["Lucknow (Capital City)", "Varanasi (Spiritual Capital)", "Agra (Home of Taj Mahal)"],
    temples: ["Kashi Vishwanath Temple (Varanasi)", "Banke Bihari Temple (Vrindavan)"],
    parksAndSanctuaries: ["Dudhwa National Park", "Sultanpur Bird Sanctuary"],
    hillyRegions: ["Vindhya Range"],
    forts: ["Red Fort (Agra)", "Chunar Fort"],
    mountains: ["Vindhya Range"]
  },
  "Uttarakhand": {
    cities: ["Dehradun (Capital City)", "Nainital", "Haridwar"],
    temples: ["Badrinath Temple", "Har Ki Pauri"],
    parksAndSanctuaries: ["Jim Corbett National Park", "Rajaji National Park"],
    hillyRegions: ["Mussoorie", "Nainital"],
    forts: ["Ranikhet Fort", "Pauri Fort"],
    mountains: ["Himalayas"]
  },
  "West Bengal": {
    cities: ["Kolkata (Capital City)", "Darjeeling", "Siliguri"],
    temples: ["Dakshineswar Kali Temple", "Kalighat Temple"],
    parksAndSanctuaries: ["Sundarbans National Park", "Buxa Tiger Reserve"],
    hillyRegions: ["Darjeeling"],
    forts: ["Fort William (Kolkata)", "Murshidabad Fort"],
    mountains: ["Himalayas"]
  }
};
app.get("/places", (req, res) => {
  const state = req.query.state;
  if (!state) {
    return res.status(400).json({ error: "State query parameter is required." });
  }
  const places = importantPlaces[state];
  if (places) {
    res.json({ places });
  } else {
    res.status(404).json({ error: "No important places found for this state." });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
