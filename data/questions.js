const questions = [
  {
    category: "Finance & Money",
    question: "What does a credit score primarily measure?",
    options: ["Your income", "Your spending habits", "Your trustworthiness to repay debt", "Your savings amount"],
    answer: "Your trustworthiness to repay debt",
    explanation: "A credit score reflects your reliability in repaying borrowed money, based on past credit behavior."
  },
  {
    category: "Finance & Money",
    question: "Which of these is considered a good budgeting rule?",
    options: ["80/20 Rule", "50/30/20 Rule", "10/20/70 Rule", "60/30/10 Rule"],
    answer: "50/30/20 Rule",
    explanation: "The 50/30/20 rule suggests spending 50% on needs, 30% on wants, and 20% on savings or debt repayment."
  },
  {
    category: "Finance & Money",
    question: "Which investment type generally has the lowest risk?",
    options: ["Stocks", "Mutual Funds", "Government Bonds", "Cryptocurrency"],
    answer: "Government Bonds",
    explanation: "Government bonds are typically considered low-risk investments with stable returns."
  },
  {
    category: "Finance & Money",
    question: "What is the full form of ATM in banking?",
    options: ["Automated Teller Machine", "Advanced Transaction Method", "Authorized Transfer Machine", "Automatic Tax Mechanism"],
    answer: "Automated Teller Machine",
    explanation: "ATM stands for Automated Teller Machine, which allows users to perform banking transactions without a teller."
  },
  {
    category: "Finance & Money",
    question: "Which of the following is a cryptocurrency?",
    options: ["Ripple", "PayPal", "Visa", "Swift"],
    answer: "Ripple",
    explanation: "Ripple (XRP) is a digital cryptocurrency used for international transfers and blockchain-based payments."
  },
  {
    category: "Finance & Money",
    question: "What does ROI stand for in financial analysis?",
    options: ["Rate of Income", "Return on Investment", "Reinvestment Option Index", "Revenue of Interest"],
    answer: "Return on Investment",
    explanation: "ROI (Return on Investment) measures the gain or loss generated on an investment relative to its cost."
  },
  {
    category: "Finance & Money",
    question: "Which global organization regulates international trade policies?",
    options: ["WTO", "IMF", "World Bank", "NATO"],
    answer: "WTO",
    explanation: "The World Trade Organization (WTO) sets global trade rules between countries."
  },
  {
    category: "Finance & Money",
    question: "What is the primary purpose of an emergency fund?",
    options: ["Investing in stocks", "Paying for vacations", "Covering unexpected expenses", "Buying luxury goods"],
    answer: "Covering unexpected expenses",
    explanation: "An emergency fund provides a financial buffer for medical emergencies, job loss, or urgent repairs."
  },
  {
    category: "Finance & Money",
    question: "Which one is a digital payment app?",
    options: ["WhatsApp", "Spotify", "Venmo", "LinkedIn"],
    answer: "Venmo",
    explanation: "Venmo is a digital wallet for sending and receiving money electronically."
  },
  {
    category: "Finance & Money",
    question: "What is inflation?",
    options: ["Rise in income", "Fall in employment", "General rise in prices over time", "Increase in tax rates"],
    answer: "General rise in prices over time",
    explanation: "Inflation refers to the overall increase in the price of goods and services, reducing purchasing power."
  },
  {
    category: "Finance & Money",
    question: "Which of these is a decentralized digital currency?",
    options: ["Bitcoin", "PayPal", "MasterCard", "Western Union"],
    answer: "Bitcoin",
    explanation: "Bitcoin is a decentralized cryptocurrency that operates without a central bank."
  },
  {
    category: "Finance & Money",
    question: "What is compound interest?",
    options: ["Interest paid only on the initial amount", "Interest paid on previous interest", "Fixed yearly profit", "Bank service fee"],
    answer: "Interest paid on previous interest",
    explanation: "Compound interest accumulates on both the principal and the interest earned previously."
  },
  {
    category: "Finance & Money",
    question: "Which country uses the yen as its currency?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
    explanation: "The yen is the official currency of Japan."
  },
  {
    category: "Finance & Money",
    question: "Which of the following is NOT a retirement plan?",
    options: ["401(k)", "Roth IRA", "Pension", "PayPal"],
    answer: "PayPal",
    explanation: "PayPal is a digital payment service, not a retirement savings plan."
  },
  {
    category: "Finance & Money",
    question: "Which organization is responsible for issuing currency in the U.S.?",
    options: ["IRS", "Federal Reserve", "IMF", "Treasury Department"],
    answer: "Federal Reserve",
    explanation: "The U.S. Federal Reserve is the central bank responsible for printing and regulating the dollar."
  },
  {
    category: "Finance & Money",
    question: "What does 'APR' stand for?",
    options: ["Annual Price Rate", "Average Percentage Rate", "Annual Percentage Rate", "Applied Payment Ratio"],
    answer: "Annual Percentage Rate",
    explanation: "APR is the yearly interest charged on loans or credit cards, including fees."
  },
  {
    category: "Finance & Money",
    question: "Which of these is an example of a scam?",
    options: ["Phishing email", "Paying bills", "Buying groceries", "Online banking"],
    answer: "Phishing email",
    explanation: "Phishing emails are designed to trick people into giving away personal or financial information."
  },
  {
    category: "Finance & Money",
    question: "What is a diversified portfolio?",
    options: ["All stocks from one industry", "Stocks and bonds only", "Varied investments to reduce risk", "Only crypto assets"],
    answer: "Varied investments to reduce risk",
    explanation: "Diversification means spreading investments across types and sectors to minimize risk."
  },
  {
    category: "Finance & Money",
    question: "Which of these is a stock exchange?",
    options: ["NASDAQ", "IMF", "Paytm", "FedEx"],
    answer: "NASDAQ",
    explanation: "NASDAQ is a major U.S. stock exchange where shares are bought and sold."
  },
  {
    category: "Finance & Money",
    question: "Which tax is added to the price of goods and services?",
    options: ["Income tax", "Property tax", "Sales tax", "Wealth tax"],
    answer: "Sales tax",
    explanation: "Sales tax is applied at the point of sale to the final price of goods and services."
  },
  {
    category: "Finance & Money",
    question: "What is an asset?",
    options: ["Anything you owe", "Something that loses value", "Something of financial value you own", "Bank loan"],
    answer: "Something of financial value you own",
    explanation: "Assets include property, cash, stocks, and anything of monetary value you own."
  },
  {
    category: "Finance & Money",
    question: "Which of these is a liability?",
    options: ["Car", "Salary", "Loan", "Dividend"],
    answer: "Loan",
    explanation: "Liabilities are debts or financial obligations such as loans and credit card balances."
  },
  {
    category: "Finance & Money",
    question: "What is the main role of a central bank?",
    options: ["Issue driving licenses", "Enforce traffic rules", "Control the money supply", "Provide student loans"],
    answer: "Control the money supply",
    explanation: "Central banks manage a country's currency and monetary policy, including inflation control."
  },
  {
    category: "Finance & Money",
    question: "Which of these is considered a long-term investment?",
    options: ["Savings account", "Lottery", "Stocks", "Daily expenses"],
    answer: "Stocks",
    explanation: "Stocks are often held for years and are considered long-term growth investments."
  },
  {
    category: "Finance & Money",
    question: "What is a budget?",
    options: ["A tax document", "Plan for how to spend money", "Bank loan", "Stock market report"],
    answer: "Plan for how to spend money",
    explanation: "A budget is a financial plan that helps control spending and track income."
  },
  {
    category: "Finance & Money",
    question: "Which document summarizes a company's profits and expenses?",
    options: ["Balance sheet", "Invoice", "Income statement", "Pay stub"],
    answer: "Income statement",
    explanation: "An income statement shows a company’s revenues and expenses over a period of time."
  },
  {
    category: "Finance & Money",
    question: "What is diversification in investing?",
    options: ["Buying one stock", "Investing in only crypto", "Spreading investments across different assets", "Putting money in savings"],
    answer: "Spreading investments across different assets",
    explanation: "Diversification reduces risk by spreading money across various assets like stocks, bonds, and real estate."
  },
  {
    category: "Finance & Money",
    question: "What is the purpose of insurance?",
    options: ["Earn interest", "Increase wealth", "Protect against financial loss", "Avoid taxes"],
    answer: "Protect against financial loss",
    explanation: "Insurance provides financial protection against risks like accidents, illness, or theft."
  },
  {
    category: "Finance & Money",
    question: "Which of these platforms is best known for stock trading?",
    options: ["Robinhood", "Instagram", "Spotify", "Gmail"],
    answer: "Robinhood",
    explanation: "Robinhood is an app that allows commission-free stock and cryptocurrency trading."
  },
  {
    category: "Finance & Money",
    question: "What is net worth?",
    options: ["Total income for the year", "Value of your car", "Assets minus liabilities", "Your credit score"],
    answer: "Assets minus liabilities",
    explanation: "Net worth is what you own minus what you owe."
  },
  {
    category: "Finance & Money",
    question: "Which of the following is a cryptocurrency wallet?",
    options: ["MetaMask", "Dropbox", "Gmail", "Netflix"],
    answer: "MetaMask",
    explanation: "MetaMask is a digital wallet used to store and manage cryptocurrencies and tokens."
  },
  {
    category: "Finance & Money",
    question: "What is the minimum age to open a retirement account in most countries?",
    options: ["12", "18", "25", "30"],
    answer: "18",
    explanation: "You usually must be at least 18 to legally open a retirement or investment account."
  },
  {
    category: "Finance & Money",
    question: "What is a credit card grace period?",
    options: ["Penalty-free time for late payment", "Time before interest is charged", "The limit amount", "A fixed fee"],
    answer: "Time before interest is charged",
    explanation: "The grace period is the time during which you can pay your balance without interest."
  },
  {
    category: "Finance & Money",
    question: "What is the purpose of a tax deduction?",
    options: ["Increase tax", "Reduce taxable income", "Avoid paying tax", "Change tax rates"],
    answer: "Reduce taxable income",
    explanation: "Deductions lower your total taxable income, which reduces the tax you owe."
  },
  {
    category: "Finance & Money",
    question: "Which of these is a type of retirement savings plan?",
    options: ["Roth IRA", "Credit Card", "Loan", "Mutual Fund"],
    answer: "Roth IRA",
    explanation: "A Roth IRA is a retirement savings account that allows for tax-free growth."
  },
  {
    category: "Finance & Money",
    question: "What does GDP measure?",
    options: ["Debt of a country", "Government budget", "Total value of goods and services produced", "Tax collection"],
    answer: "Total value of goods and services produced",
    explanation: "Gross Domestic Product (GDP) measures a nation's total economic output."
  },
  {
    category: "Finance & Money",
    question: "Which of the following is a scam where fake investment returns are paid from new investor money?",
    options: ["Ponzi scheme", "Index fund", "Fixed deposit", "ETF"],
    answer: "Ponzi scheme",
    explanation: "A Ponzi scheme is a fraudulent investment where returns are paid using money from new investors."
  },
  {
    category: "Finance & Money",
    question: "Which tax applies to your salary?",
    options: ["Sales tax", "Excise tax", "Income tax", "Capital gains tax"],
    answer: "Income tax",
    explanation: "Income tax is charged on your earnings from employment or business."
  },
  {
    category: "Finance & Money",
    question: "Which financial product is designed to help save money for children's education?",
    options: ["529 Plan", "Roth IRA", "Credit Card", "Life Insurance"],
    answer: "529 Plan",
    explanation: "A 529 Plan is a tax-advantaged savings plan for education expenses."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country recently became the newest member of BRICS as of 2024?",
    options: ["Saudi Arabia", "Argentina", "Indonesia", "Bangladesh"],
    answer: "Saudi Arabia",
    explanation: "Saudi Arabia officially joined BRICS in 2024 as part of the group’s expansion to include more developing economies."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which African country became the first to offer a visa-free policy to all African nationals in 2024?",
    options: ["Rwanda", "Kenya", "Ghana", "Botswana"],
    answer: "Kenya",
    explanation: "Kenya announced in 2024 that it would allow visa-free entry for all African nationals to promote unity and tourism."
  },


  {
    category: "General Knowledge & Current Affairs",
    question: "Which country won the FIFA Women's World Cup in 2023?",
    options: ["Spain", "USA", "England", "Germany"],
    answer: "Spain",
    explanation: "Spain won their first-ever FIFA Women's World Cup title in 2023 by defeating England in the final."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Who was awarded the Nobel Peace Prize in 2023?",
    options: ["Narges Mohammadi", "Volodymyr Zelenskyy", "Malala Yousafzai", "Greta Thunberg"],
    answer: "Narges Mohammadi",
    explanation: "Iranian activist Narges Mohammadi won the 2023 Nobel Peace Prize for her fight against the oppression of women in Iran."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which company became the world’s most valuable publicly traded company in 2024?",
    options: ["Apple", "Microsoft", "Saudi Aramco", "Amazon"],
    answer: "Microsoft",
    explanation: "Microsoft overtook Apple in early 2024 to become the world's most valuable publicly traded company, driven by its AI investments."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which city hosted the COP28 United Nations Climate Change Conference in 2023?",
    options: ["Paris", "Dubai", "Glasgow", "New Delhi"],
    answer: "Dubai",
    explanation: "COP28 was held in Dubai, UAE, in 2023 where nations discussed accelerating climate action."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "In 2023, India became the ___ country to successfully land on the Moon’s south pole.",
    options: ["First", "Second", "Third", "Fourth"],
    answer: "First",
    explanation: "India made history in August 2023 by becoming the first country to land on the Moon's south pole through the Chandrayaan-3 mission."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which tech company introduced the first consumer-grade AI wearable device in 2024?",
    options: ["Meta", "Humane", "Google", "Samsung"],
    answer: "Humane",
    explanation: "Humane launched the 'AI Pin' in 2024, a wearable AI assistant that doesn't require a screen or smartphone."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which country launched the world’s first digital passport in 2024?",
    options: ["Finland", "Estonia", "Singapore", "Japan"],
    answer: "Finland",
    explanation: "Finland became the first country to pilot digital passports in 2024, allowing travelers to cross borders using their smartphones."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "What is the name of the submarine that imploded in 2023 during a Titanic wreck expedition?",
    options: ["OceanGate Titan", "Nautilus One", "Deep Sea Explorer", "Abyss Voyager"],
    answer: "OceanGate Titan",
    explanation: "The OceanGate Titan submersible tragically imploded in June 2023 during a dive to the Titanic wreck site."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which social media platform rebranded itself as 'X' in 2023?",
    options: ["Facebook", "TikTok", "Twitter", "Snapchat"],
    answer: "Twitter",
    explanation: "Elon Musk rebranded Twitter to 'X' in 2023, aiming to transform it into an all-in-one platform for payments, messaging, and content."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which nation hosted the 2024 Summer Olympics?",
    options: ["France", "USA", "China", "Australia"],
    answer: "France",
    explanation: "The 2024 Summer Olympics were held in Paris, France, marking the third time the city hosted the games."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which global conflict saw a significant escalation in 2024 between Israel and Hamas?",
    options: ["Gaza Conflict", "Syrian War", "Yemen Crisis", "Lebanon Tensions"],
    answer: "Gaza Conflict",
    explanation: "The Gaza Conflict between Israel and Hamas escalated sharply in 2024 with widespread military operations and casualties."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "What was the name of the mission that returned samples from asteroid Bennu in 2023?",
    options: ["OSIRIS-REx", "Perseverance", "Voyager II", "Artemis I"],
    answer: "OSIRIS-REx",
    explanation: "NASA's OSIRIS-REx mission successfully returned asteroid Bennu samples to Earth in 2023 after a seven-year journey."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which global messaging app introduced Channels in 2023 to allow broadcast-style communication?",
    options: ["WhatsApp", "Telegram", "Signal", "WeChat"],
    answer: "WhatsApp",
    explanation: "In 2023, WhatsApp launched 'Channels', a feature allowing creators and organizations to broadcast messages to followers."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which African country defaulted on its debt for the second time in 3 years in 2024?",
    options: ["Zambia", "Nigeria", "Ethiopia", "South Africa"],
    answer: "Zambia",
    explanation: "Zambia defaulted again on its sovereign debt in 2024, continuing its economic struggles with restructuring talks."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which country announced the successful development of a 100% mRNA-based cancer vaccine in 2024 trials?",
    options: ["Germany", "USA", "Japan", "UK"],
    answer: "Germany",
    explanation: "Germany’s BioNTech made headlines in 2024 for promising results from its mRNA-based personalized cancer vaccine trials."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which country legalized same-sex marriage in 2023, becoming the first in Southeast Asia to do so?",
    options: ["Thailand", "Vietnam", "Singapore", "Philippines"],
    answer: "Thailand",
    explanation: "Thailand passed legislation in 2023 legalizing same-sex marriage, becoming the first Southeast Asian nation to do so."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which major U.S. bank collapsed in 2023 due to a liquidity crisis and poor risk management?",
    options: ["Silicon Valley Bank", "Wells Fargo", "Bank of America", "CitiBank"],
    answer: "Silicon Valley Bank",
    explanation: "Silicon Valley Bank collapsed in March 2023, triggering fears in the tech startup ecosystem and wider financial markets."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which Asian country’s population began shrinking for the first time in recorded history in 2023?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: "China",
    explanation: "In 2023, China recorded a population decline for the first time, signaling major demographic challenges ahead."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which country became the first to approve lab-grown meat for commercial sale in 2023?",
    options: ["Singapore", "USA", "Netherlands", "Canada"],
    answer: "USA",
    explanation: "In 2023, the United States gave regulatory approval for lab-grown chicken to be sold to consumers, marking a food tech milestone."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which country launched its own central bank digital currency (CBDC) named 'eNaira'?",
    options: ["Ghana", "South Africa", "Nigeria", "Kenya"],
    answer: "Nigeria",
    explanation: "Nigeria became the first African country to launch a central bank digital currency (CBDC) named eNaira in 2021, with expanded rollout in later years."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country experienced the deadliest earthquake of 2023, killing over 50,000 people?",
    options: ["Indonesia", "Turkey", "Mexico", "Pakistan"],
    answer: "Turkey",
    explanation: "A massive 7.8 magnitude earthquake struck Turkey and Syria in February 2023, causing over 50,000 deaths, making it one of the deadliest quakes in modern history."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which Latin American country elected its first female president in 2024?",
    options: ["Colombia", "Argentina", "Mexico", "Peru"],
    answer: "Mexico",
    explanation: "Claudia Sheinbaum was elected as Mexico's first female president in 2024, a historic milestone for the country."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which tech CEO officially stepped down from Amazon in 2021 but remains relevant in business news?",
    options: ["Tim Cook", "Bill Gates", "Jeff Bezos", "Sundar Pichai"],
    answer: "Jeff Bezos",
    explanation: "Jeff Bezos stepped down as Amazon CEO in 2021 but continues to influence global business and space through Blue Origin."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which major sporting event introduced gender-neutral categories in 2023?",
    options: ["Commonwealth Games", "World Athletics", "X Games", "Golden Globes"],
    answer: "Golden Globes",
    explanation: "The Golden Globes announced in 2023 they would remove gendered acting categories starting in 2024, opting for gender-neutral awards."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which global e-commerce company launched its own AI shopping assistant in 2024?",
    options: ["eBay", "Alibaba", "Amazon", "Walmart"],
    answer: "Amazon",
    explanation: "In 2024, Amazon introduced a generative AI shopping assistant integrated with Alexa to provide smarter search and buying experiences."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which European country faced nationwide farmer protests over climate regulations in early 2024?",
    options: ["France", "Germany", "Netherlands", "Spain"],
    answer: "Netherlands",
    explanation: "Dutch farmers protested en masse in 2024 against government climate rules that required reducing nitrogen emissions, affecting agriculture."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country became the largest producer of electric vehicles by volume in 2024?",
    options: ["USA", "Germany", "China", "Japan"],
    answer: "China",
    explanation: "China remained the world's largest producer of electric vehicles in 2024, led by companies like BYD and NIO."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which African country joined the BRICS economic bloc in 2024?",
    options: ["Algeria", "Ethiopia", "Morocco", "Tanzania"],
    answer: "Ethiopia",
    explanation: "Ethiopia officially joined BRICS in 2024 as part of the group’s expansion to include more emerging economies."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Who won the Ballon d'Or 2023 for best male footballer?",
    options: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne"],
    answer: "Lionel Messi",
    explanation: "Lionel Messi won the Ballon d'Or in 2023, largely due to his performance at the 2022 FIFA World Cup, where he led Argentina to victory."
  },



  {
    category: "General Knowledge & Current Affairs",
    question: "Which country officially changed its name to Türkiye in international bodies in 2023?",
    options: ["Turkey", "Turkmenistan", "Tunisia", "Tajikistan"],
    answer: "Turkey",
    explanation: "In 2023, Turkey formally requested international organizations and media to use 'Türkiye' as its official name to reflect its cultural identity."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which global event was canceled in 2024 due to extreme heat and environmental concerns?",
    options: ["Burning Man", "Cannes Film Festival", "Glastonbury Festival", "Tour de France"],
    answer: "Burning Man",
    explanation: "Burning Man 2024 was canceled following extreme heatwaves and climate protests highlighting sustainability concerns."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which Asian tech company overtook Samsung in global smartphone shipments in early 2024?",
    options: ["Xiaomi", "Vivo", "Apple", "Huawei"],
    answer: "Apple",
    explanation: "Apple became the top smartphone brand by global shipments in early 2024, overtaking Samsung due to strong iPhone 15 and 16 demand."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which popular AI chatbot hit over 1 billion users by mid-2024?",
    options: ["Google Bard", "ChatGPT", "Claude", "Gemini"],
    answer: "ChatGPT",
    explanation: "OpenAI’s ChatGPT crossed 1 billion users by 2024, becoming the most widely used AI chatbot globally."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country launched the 'One Student One Laptop' initiative in 2024?",
    options: ["India", "Brazil", "South Africa", "Indonesia"],
    answer: "India",
    explanation: "India launched the 'One Student One Laptop' scheme in 2024 to boost digital education among underprivileged students."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country hosted Expo 2025?",
    options: ["Japan", "UAE", "Germany", "South Korea"],
    answer: "Japan",
    explanation: "Expo 2025 is set to be held in Osaka, Japan, with a focus on sustainable development and technological innovation."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which international organization elected Ajay Banga as its President in 2023?",
    options: ["World Bank", "United Nations", "WTO", "IMF"],
    answer: "World Bank",
    explanation: "Ajay Banga, an Indian-American business executive, was appointed President of the World Bank in 2023."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country saw massive anti-retirement reform protests in 2023?",
    options: ["France", "Italy", "Spain", "Portugal"],
    answer: "France",
    explanation: "France witnessed massive protests in 2023 against President Macron's retirement age reform from 62 to 64."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which 2024 global event focused on AI safety and ethics with participation from 30+ nations?",
    options: ["AI Safety Summit", "Tech Ethics Forum", "World AI Congress", "UN AI Dialogue"],
    answer: "AI Safety Summit",
    explanation: "The AI Safety Summit 2024 brought together tech leaders and global policymakers to discuss the safe and ethical development of AI."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country’s president survived an assassination attempt in 2023, causing global headlines?",
    options: ["Ukraine", "Brazil", "Argentina", "Japan"],
    answer: "Japan",
    explanation: "Japanese Prime Minister Fumio Kishida narrowly escaped an assassination attempt during a public appearance in 2023."
  },

  {
    category: "General Knowledge & Current Affairs",
    question: "Which international organization added six new countries to its membership in 2024, including Saudi Arabia and Iran?",
    options: ["NATO", "G7", "BRICS", "ASEAN"],
    answer: "BRICS",
    explanation: "BRICS expanded its membership in 2024 by adding Saudi Arabia, Iran, Ethiopia, Egypt, Argentina, and UAE to increase global representation."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which nation announced plans to build the first vertical city, 'The Line', in the desert?",
    options: ["UAE", "Qatar", "Saudi Arabia", "Egypt"],
    answer: "Saudi Arabia",
    explanation: "Saudi Arabia’s NEOM project includes 'The Line', a proposed vertical smart city extending 170 km in the desert with zero carbon emissions."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Who won the 2023 ICC Cricket World Cup?",
    options: ["India", "England", "Australia", "Pakistan"],
    answer: "Australia",
    explanation: "Australia won the 2023 ICC Cricket World Cup, defeating India in the final and extending their record to six titles."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which social media platform faced a global ban in Nepal in 2023 due to concerns over social harmony?",
    options: ["Facebook", "Instagram", "TikTok", "Snapchat"],
    answer: "TikTok",
    explanation: "Nepal banned TikTok in 2023 citing its negative impact on social harmony and cultural values."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which country became the world's most populous in 2023, overtaking China?",
    options: ["India", "USA", "Indonesia", "Brazil"],
    answer: "India",
    explanation: "In 2023, India officially overtook China to become the most populous country in the world, with over 1.4 billion people."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which Southeast Asian country experienced record-breaking air pollution levels in 2024, causing health emergencies?",
    options: ["Vietnam", "Thailand", "Malaysia", "Philippines"],
    answer: "Thailand",
    explanation: "In 2024, Thailand recorded severe air pollution due to forest fires and haze, prompting health alerts in major cities like Chiang Mai."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which major company announced a massive AI chip investment to compete with Nvidia in 2024?",
    options: ["AMD", "Intel", "Google", "Microsoft"],
    answer: "Microsoft",
    explanation: "In 2024, Microsoft unveiled its own AI chips to reduce reliance on Nvidia and power its Azure and OpenAI services."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which world leader won re-election in Russia’s 2024 presidential election?",
    options: ["Vladimir Putin", "Alexei Navalny", "Dmitry Medvedev", "Sergei Shoigu"],
    answer: "Vladimir Putin",
    explanation: "Vladimir Putin secured another term as president in Russia’s 2024 elections, continuing his long-standing rule."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which European country became the first to make menstrual products free for all in 2023?",
    options: ["France", "Germany", "Scotland", "Sweden"],
    answer: "Scotland",
    explanation: "Scotland became the first country in the world to provide free period products to anyone who needs them starting in 2023."
  },
  {
    category: "General Knowledge & Current Affairs",
    question: "Which African country launched its first satellite into space in 2023?",
    options: ["Ghana", "Nigeria", "Angola", "Kenya"],
    answer: "Kenya",
    explanation: "Kenya launched its first operational satellite, Taifa-1, into orbit in 2023 to support agriculture, mapping, and disaster response."
  },
  {
    category: "Entertainment",
    question: "Which film won Best Picture at the Oscars 2023?",
    options: ["The Fabelmans", "Everything Everywhere All at Once", "Top Gun: Maverick", "All Quiet on the Western Front"],
    answer: "Everything Everywhere All at Once",
    explanation: "The film 'Everything Everywhere All at Once' won the 2023 Oscar for Best Picture with its unique multiverse storyline and emotional depth."
  },
  {
    category: "Entertainment",
    question: "Which K-pop group made history by performing at Coachella 2023?",
    options: ["TWICE", "BTS", "BLACKPINK", "NewJeans"],
    answer: "BLACKPINK",
    explanation: "BLACKPINK became the first K-pop group to headline Coachella in 2023, making history and drawing global attention."
  },
  {
    category: "Entertainment",
    question: "Which actor portrayed Oppenheimer in Christopher Nolan’s 2023 biopic?",
    options: ["Cillian Murphy", "Robert Downey Jr.", "Matt Damon", "Christian Bale"],
    answer: "Cillian Murphy",
    explanation: "Cillian Murphy played the lead role of J. Robert Oppenheimer in Christopher Nolan’s 2023 film 'Oppenheimer'."
  },
  {
    category: "Entertainment",
    question: "Which Netflix series broke viewership records in 2021 and remained in the global top 10 in 2024?",
    options: ["Wednesday", "Money Heist", "Squid Game", "Bridgerton"],
    answer: "Squid Game",
    explanation: "'Squid Game' became a global phenomenon, holding Netflix’s top-viewed spot in many countries and remaining popular through 2024."
  },
  {
    category: "Entertainment",
    question: "Who won the 2023 Grammy for Album of the Year?",
    options: ["Adele", "Beyoncé", "Harry Styles", "Taylor Swift"],
    answer: "Harry Styles",
    explanation: "Harry Styles won Album of the Year at the 2023 Grammy Awards for 'Harry’s House', surprising many fans and critics."
  },
  {
    category: "Entertainment",
    question: "Which actor plays Geralt of Rivia in the first three seasons of Netflix's 'The Witcher'?",
    options: ["Henry Cavill", "Chris Hemsworth", "Tom Hardy", "Kit Harington"],
    answer: "Henry Cavill",
    explanation: "Henry Cavill portrayed Geralt of Rivia in Netflix's 'The Witcher' for seasons 1–3 before being replaced by Liam Hemsworth."
  },
  {
    category: "Entertainment",
    question: "Which movie is the highest-grossing film of all time as of 2024?",
    options: ["Avatar", "Avengers: Endgame", "Titanic", "Spider-Man: No Way Home"],
    answer: "Avatar",
    explanation: "James Cameron’s 'Avatar' holds the record for the highest-grossing film globally after re-releases kept it ahead of 'Endgame'."
  },
  {
    category: "Entertainment",
    question: "Which animated movie won Best Animated Feature at the Oscars 2023?",
    options: ["Puss in Boots: The Last Wish", "Turning Red", "Guillermo del Toro’s Pinocchio", "Marcel the Shell with Shoes On"],
    answer: "Guillermo del Toro’s Pinocchio",
    explanation: "Guillermo del Toro’s dark, stop-motion take on 'Pinocchio' won Best Animated Feature at the 2023 Academy Awards."
  },
  {
    category: "Entertainment",
    question: "Which singer headlined the Super Bowl Halftime Show in 2023?",
    options: ["Beyoncé", "Rihanna", "Eminem", "Taylor Swift"],
    answer: "Rihanna",
    explanation: "Rihanna performed the 2023 Super Bowl Halftime Show, marking her first live performance in over 5 years — while pregnant!"
  },
  {
    category: "Entertainment",
    question: "Which anime film won the Japan Academy Prize for Animation of the Year in 2023?",
    options: ["Suzume", "One Piece Film: Red", "Jujutsu Kaisen 0", "Demon Slayer: Mugen Train"],
    answer: "Suzume",
    explanation: "Makoto Shinkai’s film 'Suzume' won Animation of the Year at the Japan Academy Prize 2023 for its emotional storytelling and visuals."
  },
  {
    category: "Entertainment",
    question: "Which actress won Best Actress at the Oscars 2023 for her role in 'TÁR'?",
    options: ["Michelle Yeoh", "Cate Blanchett", "Michelle Williams", "Andrea Riseborough"],
    answer: "Michelle Yeoh",
    explanation: "Michelle Yeoh won the 2023 Oscar for Best Actress for her performance in 'Everything Everywhere All at Once'."
  },
  {
    category: "Entertainment",
    question: "Which movie in the Marvel Cinematic Universe introduced the character Kang the Conqueror?",
    options: ["Ant-Man and the Wasp: Quantumania", "Loki", "Doctor Strange: Multiverse of Madness", "Eternals"],
    answer: "Ant-Man and the Wasp: Quantumania",
    explanation: "Kang the Conqueror was introduced as the primary villain in 'Ant-Man and the Wasp: Quantumania' (2023)."
  },
  {
    category: "Entertainment",
    question: "Which show became Netflix’s most-watched English-language series as of 2023?",
    options: ["Wednesday", "The Night Agent", "Stranger Things", "The Queen's Gambit"],
    answer: "Wednesday",
    explanation: "'Wednesday', starring Jenna Ortega, became the most-watched English-language series on Netflix shortly after its release in 2022."
  },
  {
    category: "Entertainment",
    question: "Which Indian film won an Oscar for Best Original Song in 2023?",
    options: ["Pathaan", "RRR", "Kantara", "Brahmastra"],
    answer: "RRR",
    explanation: "The Telugu-language film 'RRR' won Best Original Song for 'Naatu Naatu' at the Oscars 2023."
  },
  {
    category: "Entertainment",
    question: "Which artist released the hit album 'Midnights' in 2022 and went on a global tour in 2023?",
    options: ["Adele", "Dua Lipa", "Billie Eilish", "Taylor Swift"],
    answer: "Taylor Swift",
    explanation: "Taylor Swift released 'Midnights' in 2022 and launched the record-breaking 'Eras Tour' in 2023."
  },
  {
    category: "Entertainment",
    question: "Which 2023 movie featured Margot Robbie and Ryan Gosling as Barbie and Ken?",
    options: ["Greta", "Plastic World", "Barbie", "Dream House"],
    answer: "Barbie",
    explanation: "Greta Gerwig’s 'Barbie' starred Margot Robbie and Ryan Gosling, becoming a major 2023 box office hit."
  },
  {
    category: "Entertainment",
    question: "Which director is known for the 2023 film 'Killers of the Flower Moon'?",
    options: ["Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "Steven Spielberg"],
    answer: "Martin Scorsese",
    explanation: "Martin Scorsese directed 'Killers of the Flower Moon', a 2023 film starring Leonardo DiCaprio and Robert De Niro."
  },
  {
    category: "Entertainment",
    question: "Which singer made history by winning her 32nd Grammy in 2023, becoming the most awarded artist in Grammy history?",
    options: ["Beyoncé", "Adele", "Lady Gaga", "Taylor Swift"],
    answer: "Beyoncé",
    explanation: "Beyoncé became the most decorated artist in Grammy history in 2023 with 32 total wins."
  },
  {
    category: "Entertainment",
    question: "Which anime series released its final season in 2023, concluding after nearly a decade?",
    options: ["Attack on Titan", "One Piece", "My Hero Academia", "Naruto: Boruto"],
    answer: "Attack on Titan",
    explanation: "'Attack on Titan: The Final Season – Part 4' marked the conclusion of the iconic anime series in 2023."
  },
  {
    category: "Entertainment",
    question: "Which actor played Mario in the 2023 animated film 'The Super Mario Bros. Movie'?",
    options: ["Chris Pratt", "Jack Black", "Charlie Day", "Tom Holland"],
    answer: "Chris Pratt",
    explanation: "Chris Pratt voiced Mario in 'The Super Mario Bros. Movie', which was released in 2023 and became a huge box office success."
  },
  {
    category: "Entertainment",
    question: "Which South Korean actor gained international fame for his role in 'Squid Game'?",
    options: ["Lee Jung-jae", "Park Seo-joon", "Gong Yoo", "Hyun Bin"],
    answer: "Lee Jung-jae",
    explanation: "Lee Jung-jae rose to global stardom after starring as the lead character Seong Gi-hun in Netflix's 'Squid Game'."
  },
  {
    category: "Entertainment",
    question: "Which famous director is behind the 'Dune' film franchise (2021, 2024)?",
    options: ["James Cameron", "Denis Villeneuve", "Ridley Scott", "Zack Snyder"],
    answer: "Denis Villeneuve",
    explanation: "Denis Villeneuve directed the sci-fi epics 'Dune' (2021) and its sequel, released in 2024."
  },
  {
    category: "Entertainment",
    question: "Which pop star’s 2023 documentary 'The Eras Tour' broke box office records for concert films?",
    options: ["Lady Gaga", "Taylor Swift", "Beyoncé", "Billie Eilish"],
    answer: "Taylor Swift",
    explanation: "Taylor Swift's 'The Eras Tour' concert film became the highest-grossing concert documentary ever upon release in 2023."
  },
  {
    category: "Entertainment",
    question: "Which actor plays Joel in the HBO series adaptation of 'The Last of Us'?",
    options: ["Pedro Pascal", "Oscar Isaac", "Javier Bardem", "Nikolaj Coster-Waldau"],
    answer: "Pedro Pascal",
    explanation: "Pedro Pascal plays Joel in HBO’s critically acclaimed 2023 adaptation of the video game 'The Last of Us'."
  },
  {
    category: "Entertainment",
    question: "Which streaming service released the hit true crime series 'Dahmer – Monster: The Jeffrey Dahmer Story'?",
    options: ["Netflix", "HBO Max", "Hulu", "Amazon Prime Video"],
    answer: "Netflix",
    explanation: "'Dahmer' became one of Netflix’s most-watched true crime series, sparking both praise and controversy in 2022–2023."
  },
  {
    category: "Entertainment",
    question: "Which actress stars as Ariel in Disney’s 2023 live-action remake of 'The Little Mermaid'?",
    options: ["Zendaya", "Halle Bailey", "Chloe Bailey", "Keke Palmer"],
    answer: "Halle Bailey",
    explanation: "Halle Bailey was cast as Ariel in Disney’s 2023 live-action adaptation of 'The Little Mermaid'."
  },
  {
    category: "Entertainment",
    question: "Which global phenomenon K-drama features a deadly survival game and red light-green light challenge?",
    options: ["All of Us Are Dead", "Sweet Home", "Squid Game", "Alice in Borderland"],
    answer: "Squid Game",
    explanation: "'Squid Game' became a cultural sensation for its dystopian survival game concept, especially the red light-green light scene."
  },
  {
    category: "Entertainment",
    question: "Which Hollywood actor played Ken in the 2023 blockbuster movie 'Barbie'?",
    options: ["Ryan Gosling", "Chris Evans", "Zac Efron", "Channing Tatum"],
    answer: "Ryan Gosling",
    explanation: "Ryan Gosling played the iconic role of Ken alongside Margot Robbie in Greta Gerwig’s 2023 'Barbie' movie."
  },
  {
    category: "Entertainment",
    question: "Which TV series won Best Drama at the 2023 Emmy Awards?",
    options: ["Succession", "The Crown", "Better Call Saul", "Euphoria"],
    answer: "Succession",
    explanation: "'Succession' won Best Drama at the 2023 Emmys for its gripping portrayal of media moguls and corporate drama."
  },
  {
    category: "Entertainment",
    question: "Which 2023 movie is based on the story of the creation of the atomic bomb?",
    options: ["Oppenheimer", "The Atom Project", "Nolan", "The Bomb"],
    answer: "Oppenheimer",
    explanation: "Christopher Nolan’s 2023 epic 'Oppenheimer' explores the life of J. Robert Oppenheimer and the development of the atomic bomb."
  },
  {
    category: "Entertainment",
    question: "Which actor returned as Batman in the 2023 film 'The Flash'?",
    options: ["Ben Affleck", "Robert Pattinson", "Michael Keaton", "Christian Bale"],
    answer: "Michael Keaton",
    explanation: "Michael Keaton reprised his iconic Batman role in 'The Flash' (2023), creating major nostalgia for fans of the 1989 film."
  },
  {
    category: "Entertainment",
    question: "Which Spanish show gained global fame for its story about a heist at the Royal Mint?",
    options: ["Money Heist", "Elite", "Sky Rojo", "Valeria"],
    answer: "Money Heist",
    explanation: "'Money Heist' (La Casa de Papel) became a global Netflix hit for its gripping heist plot and beloved characters like The Professor."
  },
  {
    category: "Entertainment",
    question: "Which rapper starred in the film 'Spider-Man: Across the Spider-Verse' soundtrack?",
    options: ["Post Malone", "Drake", "Metro Boomin", "Kendrick Lamar"],
    answer: "Metro Boomin",
    explanation: "Metro Boomin curated and produced much of the soundtrack for 'Spider-Man: Across the Spider-Verse' in 2023."
  },
  {
    category: "Entertainment",
    question: "Which film features Tom Cruise returning to his role as a fighter pilot decades after the original?",
    options: ["Top Gun: Maverick", "Mission: Skyforce", "Jetstream", "Air Ace"],
    answer: "Top Gun: Maverick",
    explanation: "'Top Gun: Maverick' (2022) saw Tom Cruise reprise his role as Pete 'Maverick' Mitchell over 30 years after the original."
  },
  {
    category: "Entertainment",
    question: "Which Netflix reality series became a viral hit by featuring strangers dating in complete darkness?",
    options: ["The Circle", "Too Hot To Handle", "Love Is Blind", "Perfect Match"],
    answer: "Love Is Blind",
    explanation: "'Love Is Blind' gained global popularity for its unique concept of couples getting engaged without ever seeing each other."
  },
  {
    category: "Entertainment",
    question: "Which legendary Japanese animation studio created 'Spirited Away' and 'The Boy and the Heron'?",
    options: ["Studio Trigger", "MAPPA", "Toei Animation", "Studio Ghibli"],
    answer: "Studio Ghibli",
    explanation: "Studio Ghibli, led by Hayao Miyazaki, is renowned for films like 'Spirited Away' and 2023’s 'The Boy and the Heron'."
  },
  {
    category: "Entertainment",
    question: "Which famous DJ released the 2023 album 'Funk Wav Bounces Vol. 2'?",
    options: ["Calvin Harris", "David Guetta", "Kygo", "Zedd"],
    answer: "Calvin Harris",
    explanation: "Calvin Harris dropped 'Funk Wav Bounces Vol. 2' in 2023, featuring collaborations with artists like Dua Lipa and Justin Timberlake."
  },
  {
    category: "Entertainment",
    question: "Which movie series features characters named Dominic Toretto and Brian O’Conner?",
    options: ["Transformers", "John Wick", "Fast & Furious", "Kingsman"],
    answer: "Fast & Furious",
    explanation: "The 'Fast & Furious' franchise follows street racers Dominic Toretto (Vin Diesel) and Brian O’Conner (Paul Walker)."
  },
  {
    category: "Entertainment",
    question: "Which actress played Princess Diana in Season 5 of 'The Crown'?",
    options: ["Emma Corrin", "Elizabeth Debicki", "Claire Foy", "Olivia Colman"],
    answer: "Elizabeth Debicki",
    explanation: "Elizabeth Debicki portrayed Princess Diana in Season 5 of Netflix’s 'The Crown', earning critical acclaim."
  },
  {
    category: "Entertainment",
    question: "Which 2023 musical biopic starred Austin Butler as Elvis Presley?",
    options: ["Elvis", "Rock King", "Jailhouse Rock", "Presley"],
    answer: "Elvis",
    explanation: "Austin Butler portrayed Elvis Presley in Baz Luhrmann’s biopic 'Elvis', earning widespread praise for his performance."
  },
  {
    category: "Entertainment",
    question: "Which show became a global hit for blending horror and teen drama set in the town of Hawkins?",
    options: ["Riverdale", "Stranger Things", "The Umbrella Academy", "Dark"],
    answer: "Stranger Things",
    explanation: "'Stranger Things' is a Netflix original that combines 80s nostalgia, horror, and sci-fi elements — centered around Hawkins, Indiana."
  },
  {
    category: "Entertainment",
    question: "Which 2023 film marked the return of Indiana Jones, starring Harrison Ford?",
    options: ["The Dial of Destiny", "Temple Reborn", "Kingdom of Time", "Last Crusade 2"],
    answer: "The Dial of Destiny",
    explanation: "'Indiana Jones and the Dial of Destiny' (2023) brought back Harrison Ford in his iconic role for one final adventure."
  },
  {
    category: "Entertainment",
    question: "Which pop artist launched the 'Renaissance World Tour' in 2023?",
    options: ["Beyoncé", "Dua Lipa", "Rihanna", "Ariana Grande"],
    answer: "Beyoncé",
    explanation: "Beyoncé launched the 'Renaissance World Tour' in 2023 following the release of her dance-heavy album 'Renaissance'."
  },
  {
    category: "Entertainment",
    question: "Which anime features a boy named Denji who merges with a chainsaw devil?",
    options: ["Demon Slayer", "Jujutsu Kaisen", "Chainsaw Man", "Bleach"],
    answer: "Chainsaw Man",
    explanation: "'Chainsaw Man' is a popular anime where the main character Denji fuses with a chainsaw demon and becomes a devil hunter."
  },
  {
    category: "Entertainment",
    question: "Which actor played Enzo Ferrari in the 2023 biopic directed by Michael Mann?",
    options: ["Adam Driver", "Rami Malek", "Daniel Brühl", "Christian Bale"],
    answer: "Adam Driver",
    explanation: "Adam Driver starred as Enzo Ferrari in the 2023 film 'Ferrari', exploring the founder’s personal and professional struggles."
  },
  {
    category: "Entertainment",
    question: "Which global idol group announced their hiatus in 2022 but continued with solo projects?",
    options: ["BLACKPINK", "EXO", "BTS", "Stray Kids"],
    answer: "BTS",
    explanation: "BTS announced a group hiatus in 2022 for military service and solo careers, though they remained active individually."
  },
  {
    category: "Entertainment",
    question: "Which 2023 horror movie featured a viral smiling curse and a haunting marketing campaign?",
    options: ["Smile", "The Boogeyman", "Talk to Me", "The Nun II"],
    answer: "Smile",
    explanation: "'Smile' (2023) became a horror sensation thanks to its creepy smile curse and creative viral marketing at public events."
  },
  {
    category: "Entertainment",
    question: "Which actress played the live-action role of Ahsoka Tano in the 2023 Disney+ series?",
    options: ["Rosario Dawson", "Zoe Saldana", "Ming-Na Wen", "Tessa Thompson"],
    answer: "Rosario Dawson",
    explanation: "Rosario Dawson brought Ahsoka Tano to life in the 2023 Disney+ series 'Ahsoka', set in the Star Wars universe."
  },
  {
    category: "Entertainment",
    question: "Which YouTuber became the most subscribed individual creator on YouTube in 2023?",
    options: ["MrBeast", "PewDiePie", "Markiplier", "Logan Paul"],
    answer: "MrBeast",
    explanation: "MrBeast surpassed PewDiePie in 2023 to become the most subscribed individual creator on YouTube, known for massive giveaways."
  },
  {
    category: "Entertainment",
    question: "Which Taylor Swift re-recorded album was released in 2023 and included vault tracks like 'Is It Over Now?'",
    options: ["1989 (Taylor's Version)", "Red (Taylor's Version)", "Speak Now (Taylor's Version)", "Reputation (Taylor's Version)"],
    answer: "1989 (Taylor's Version)",
    explanation: "'1989 (Taylor’s Version)' was released in October 2023 with previously unreleased vault tracks, continuing Swift’s re-recording project."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What type of traveler are you?",
    options: ["Adventure Seeker", "Relaxation Lover", "Culture Enthusiast", "Luxury Explorer"],
    answer: "Adventure Seeker",
    explanation: "If you prefer hiking, skydiving, and exploring the unknown, you're definitely an Adventure Seeker!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which season best matches your personality?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    answer: "Autumn",
    explanation: "Autumn represents thoughtful, calm, and cozy vibes—just like people who enjoy deep conversations and creativity."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your productivity style?",
    options: ["Early Riser", "Last-Minute Sprinter", "Planner Pro", "Constant Hustler"],
    answer: "Planner Pro",
    explanation: "If you love organizing your schedule and sticking to plans, you're a classic Planner Pro."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which pet matches your personality?",
    options: ["Dog", "Cat", "Parrot", "Turtle"],
    answer: "Cat",
    explanation: "Cats are independent, smart, and selective—just like people who value personal space and deep connections."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What does your music taste say about you?",
    options: ["Pop = Energetic", "Rock = Passionate", "Jazz = Calm Thinker", "EDM = Party Vibes"],
    answer: "Jazz = Calm Thinker",
    explanation: "Jazz lovers are known to be reflective, intelligent, and composed in both life and conversation."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which fictional universe would you thrive in?",
    options: ["Harry Potter", "Marvel", "Star Wars", "Lord of the Rings"],
    answer: "Harry Potter",
    explanation: "If you love magic, creativity, and boarding-school adventures—Hogwarts is your ideal world!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your ideal weekend vibe?",
    options: ["Party All Night", "Netflix & Chill", "Nature Hike", "Museum Tour"],
    answer: "Netflix & Chill",
    explanation: "Those who prefer Netflix and comfy blankets are usually introverted and love quality solo or small-group time."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What kind of friend are you?",
    options: ["The Listener", "The Joker", "The Planner", "The Motivator"],
    answer: "The Listener",
    explanation: "If people always come to you for advice or comfort, you’re definitely The Listener—empathetic and calm."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which dessert describes your personality?",
    options: ["Chocolate Cake = Classic", "Macaron = Stylish", "Ice Cream = Fun", "Fruit Tart = Refreshing"],
    answer: "Ice Cream = Fun",
    explanation: "Ice cream fans are fun-loving, youthful, and adaptable to different moods and situations."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What does your phone usage reveal about you?",
    options: ["Always Online = Extrovert", "Silent Mode = Focused", "Camera Addict = Creative", "Zero Apps = Minimalist"],
    answer: "Silent Mode = Focused",
    explanation: "People who use silent mode often are deep thinkers and prefer real-world focus over constant notifications."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which social media app matches your vibe?",
    options: ["Instagram = Visual", "Twitter = Witty", "TikTok = Trendy", "Reddit = Deep Thinker"],
    answer: "Reddit = Deep Thinker",
    explanation: "If you enjoy deep discussions, long threads, and niche communities, you’re a true Reddit thinker."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your decision-making style?",
    options: ["Go With Gut", "Overthinker", "Team Consult", "Flip a Coin"],
    answer: "Go With Gut",
    explanation: "Gut-driven people are intuitive and confident, often trusting their inner voice for big choices."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your dream job based on your personality?",
    options: ["Artist = Creative Soul", "Scientist = Logical Thinker", "Entrepreneur = Risk-Taker", "Teacher = Nurturer"],
    answer: "Entrepreneur = Risk-Taker",
    explanation: "Entrepreneurs love challenges, lead boldly, and aren't afraid of taking calculated risks for big rewards."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What color reflects your energy?",
    options: ["Blue = Calm", "Red = Bold", "Green = Balanced", "Yellow = Joyful"],
    answer: "Yellow = Joyful",
    explanation: "If people describe you as bubbly, positive, and energetic — yellow perfectly matches your aura."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your hidden superpower?",
    options: ["Reading People", "Staying Calm", "Inspiring Others", "Solving Problems"],
    answer: "Reading People",
    explanation: "Empaths and emotionally intelligent individuals often have the quiet power of reading others with precision."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "If you were a weather type, which would you be?",
    options: ["Sunny", "Rainy", "Stormy", "Cloudy"],
    answer: "Cloudy",
    explanation: "Cloudy personalities are mysterious, thoughtful, and often have layers others love to discover over time."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your love language?",
    options: ["Words of Affirmation", "Acts of Service", "Gifts", "Quality Time"],
    answer: "Quality Time",
    explanation: "If you value presence more than presents, your love language is all about spending meaningful moments together."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which classic board game fits your mindset?",
    options: ["Chess = Strategic", "Monopoly = Ambitious", "Scrabble = Word Lover", "Jenga = Risk Taker"],
    answer: "Chess = Strategic",
    explanation: "If you enjoy analyzing moves before you make them, you think like a chess master—strategic and calm."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you recharge after a long day?",
    options: ["Sleep", "Music", "Gaming", "Talking to Friends"],
    answer: "Music",
    explanation: "Music lovers often find peace, energy, and emotional balance through their favorite tunes."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What kind of meme describes you best?",
    options: ["Relatable", "Dark Humor", "Wholesome", "Sarcastic"],
    answer: "Wholesome",
    explanation: "If you love memes that spread smiles and comfort—you're a wholesome meme soul at heart."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your dominant mindset?",
    options: ["Growth", "Fixed", "Creative", "Practical"],
    answer: "Growth",
    explanation: "If you're always looking to improve, learn from failure, and take on challenges — you have a growth mindset."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which fantasy creature matches your soul?",
    options: ["Dragon", "Unicorn", "Phoenix", "Mermaid"],
    answer: "Phoenix",
    explanation: "Phoenix souls rise stronger from every fall — resilient, passionate, and unstoppable."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you handle pressure?",
    options: ["Stay Calm", "Panic First", "Talk It Out", "Escape"],
    answer: "Stay Calm",
    explanation: "People who stay calm under pressure are resilient thinkers and great problem-solvers in chaotic moments."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "If your life were a genre, what would it be?",
    options: ["Rom-Com", "Thriller", "Drama", "Fantasy"],
    answer: "Rom-Com",
    explanation: "If you're always mixing laughter with love and chaos with charm, your life is a perfect rom-com script."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your ideal vacation style?",
    options: ["Beach", "Mountains", "City Adventure", "Staycation"],
    answer: "Mountains",
    explanation: "If you crave peace, fresh air, and scenic escapes — you're a mountain soul with a love for nature."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which emoji describes your daily vibe?",
    options: ["😂", "😎", "🤔", "🥱"],
    answer: "😎",
    explanation: "If you're cool, confident, and roll with any situation — you're clearly rocking the 😎 emoji energy."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you start your mornings?",
    options: ["With Coffee", "With Meditation", "With Chaos", "With Motivation"],
    answer: "With Motivation",
    explanation: "Motivated morning people tend to set goals early and attack the day with energy and intention."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which Hogwarts house fits your vibe?",
    options: ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"],
    answer: "Ravenclaw",
    explanation: "If you're curious, intelligent, and love solving mysteries — you belong in Ravenclaw, the house of wisdom."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which retro device matches your personality?",
    options: ["Walkman", "Polaroid", "Game Boy", "Typewriter"],
    answer: "Polaroid",
    explanation: "Polaroid people are nostalgic, spontaneous, and love to freeze perfect moments in time."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you react to surprises?",
    options: ["Excited", "Suspicious", "Awkward", "Play Along"],
    answer: "Play Along",
    explanation: "People who go with the flow in surprise situations are often adaptable and enjoy the unexpected."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which breakfast food are you?",
    options: ["Pancakes = Sweet & Warm", "Omelette = Bold & Practical", "Smoothie = Energetic & Healthy", "Toast = Classic & Reliable"],
    answer: "Pancakes = Sweet & Warm",
    explanation: "If you're comforting, cheerful, and bring joy to people around you — you’re definitely pancake energy!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your go-to stress reaction?",
    options: ["Sleep it off", "Overthink everything", "Clean your space", "Talk to someone"],
    answer: "Clean your space",
    explanation: "People who clean when stressed love control and clarity, using external order to calm internal chaos."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which time of day are you?",
    options: ["Morning = Fresh Start", "Afternoon = Focus Mode", "Evening = Chill Vibes", "Midnight = Deep Thoughts"],
    answer: "Midnight = Deep Thoughts",
    explanation: "If you find your mind running wild with creativity or emotion late at night, you’re a true midnight soul."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your conversation style?",
    options: ["Storyteller", "Straight to the Point", "Listener", "Joker"],
    answer: "Storyteller",
    explanation: "Storytellers bring flavor to every chat — dramatic, detailed, and super fun to talk to."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which movie genre matches your personality?",
    options: ["Comedy", "Horror", "Sci-Fi", "Drama"],
    answer: "Comedy",
    explanation: "If you're light-hearted, spontaneous, and love to laugh — you're comedy gold in human form."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What type of learner are you?",
    options: ["Visual", "Auditory", "Kinesthetic", "Reading/Writing"],
    answer: "Visual",
    explanation: "Visual learners grasp ideas best through images, videos, and seeing things in action."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "If your mind were a browser, how many tabs would be open?",
    options: ["1-2 = Minimalist", "3-5 = Focused", "6-10 = Busy Brain", "20+ = Chaos"],
    answer: "20+ = Chaos",
    explanation: "If your brain jumps topics constantly, with ideas everywhere, you’re a proud multi-tab mind!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What kind of texter are you?",
    options: ["Quick Responder", "Emoji Overload", "One-word Reply", "Ghost Mode"],
    answer: "Emoji Overload",
    explanation: "If your messages look like an emoji parade — you express emotions visually and colorfully."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your biggest energy source?",
    options: ["Music", "Books", "People", "Solitude"],
    answer: "Solitude",
    explanation: "If you recharge in peace and silence — alone time is your fuel, not your weakness."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you spend your ideal Sunday?",
    options: ["Sleeping In", "Adventure Time", "Organizing Life", "Catching Up on Shows"],
    answer: "Catching Up on Shows",
    explanation: "If your weekend dream is bingeing a new season in comfy clothes — you're a chill-style Sunday soul."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which type of dreamer are you?",
    options: ["The Visionary", "The Realist", "The Escapist", "The Planner"],
    answer: "The Visionary",
    explanation: "Visionaries dream big, think beyond limits, and are always imagining the next big thing."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your texting tone?",
    options: ["Formal & Punctual", "All Lowercase", "ALL CAPS", "Voice Notes Only"],
    answer: "All Lowercase",
    explanation: "People who text in all lowercase often come across chill, casual, and emotionally neutral — but deep inside, they care."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which core value drives your decisions?",
    options: ["Freedom", "Loyalty", "Ambition", "Peace"],
    answer: "Freedom",
    explanation: "If you value doing things your way and hate being boxed in — freedom fuels your choices."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which aesthetic best fits your vibe?",
    options: ["Cottagecore", "Minimalist", "Cyberpunk", "Vintage"],
    answer: "Minimalist",
    explanation: "If clean spaces, simple colors, and clutter-free environments give you peace — you're all about that minimalist life."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "How do you express love?",
    options: ["Gifts", "Time", "Words", "Touch"],
    answer: "Words",
    explanation: "If compliments, support, and affirmations are your way to show love — 'words' are your superpower."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "If your brain were a city, what would it be?",
    options: ["New York = Fast & Loud", "Tokyo = Organized & Innovative", "Paris = Artistic & Romantic", "Reykjavik = Calm & Deep"],
    answer: "Tokyo = Organized & Innovative",
    explanation: "If your thoughts run fast but remain structured, and you love tech & future-thinking — you’re Tokyo-brained!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your procrastination style?",
    options: ["Clean Everything", "Scroll Socials", "Take a Nap", "Make a To-Do List"],
    answer: "Make a To-Do List",
    explanation: "Some people procrastinate productively — by preparing instead of acting. To-do lists give the illusion of progress!"
  },
  {
    category: "Personality & Fun Quizzes",
    question: "Which snack matches your personality?",
    options: ["Popcorn = Fun & Social", "Dark Chocolate = Intense & Classy", "Chips = Casual & Bold", "Fruit = Balanced & Healthy"],
    answer: "Popcorn = Fun & Social",
    explanation: "Popcorn people are the life of the room — quick to laugh, easy to be with, and always ready for a movie night."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your energy like on Mondays?",
    options: ["Let’s Crush It!", "Snooze x3", "Existential Crisis", "Coffee is My Personality"],
    answer: "Coffee is My Personality",
    explanation: "If caffeine is your Monday survival tool, you’re in the coffee-fueled club of dreamers and doers."
  },
  {
    category: "Personality & Fun Quizzes",
    question: "What’s your real superpower in a friend group?",
    options: ["The Therapist", "The Entertainer", "The Planner", "The Wild Card"],
    answer: "The Therapist",
    explanation: "You're the go-to for emotional support, advice, and late-night deep talks — the heart of your circle."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is known as the 'City of Canals'?",
    options: ["Amsterdam", "Bangkok", "Venice", "Bruges"],
    answer: "Venice",
    explanation: "Venice, Italy is world-famous for its unique canal network instead of roads, attracting millions of tourists each year."
  },
  {
    category: "Geography & World Culture",
    question: "Which country celebrates the Day of the Dead (Día de los Muertos)?",
    options: ["Spain", "Peru", "Mexico", "Chile"],
    answer: "Mexico",
    explanation: "Día de los Muertos is a traditional Mexican holiday honoring deceased loved ones with altars, food, and colorful skulls."
  },
  {
    category: "Geography & World Culture",
    question: "Mount Everest is located between which two countries?",
    options: ["India and Nepal", "China and India", "Nepal and China", "Bhutan and Nepal"],
    answer: "Nepal and China",
    explanation: "Mount Everest, the world's tallest peak, straddles the border between Nepal and China's Tibet Autonomous Region."
  },
  {
    category: "Geography & World Culture",
    question: "Which African country is known for its ancient rock-hewn churches in Lalibela?",
    options: ["Ethiopia", "Kenya", "Sudan", "Morocco"],
    answer: "Ethiopia",
    explanation: "Lalibela in Ethiopia is home to 11 medieval churches carved entirely from rock, and is a UNESCO World Heritage site."
  },
  {
    category: "Geography & World Culture",
    question: "Which festival involves throwing colored powders in celebration of spring?",
    options: ["Diwali", "Holi", "Songkran", "Carnival"],
    answer: "Holi",
    explanation: "Holi, the Festival of Colors, is a vibrant Hindu celebration of spring and joy, originating in India."
  },
  {
    category: "Geography & World Culture",
    question: "Which ocean lies between Africa and Australia?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
    answer: "Indian Ocean",
    explanation: "The Indian Ocean is the third-largest ocean in the world and borders Africa, Asia, and Australia."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is home to the famous Christ the Redeemer statue?",
    options: ["Buenos Aires", "Lisbon", "Rio de Janeiro", "Barcelona"],
    answer: "Rio de Janeiro",
    explanation: "Christ the Redeemer overlooks Rio de Janeiro, Brazil, and is one of the New Seven Wonders of the World."
  },
  {
    category: "Geography & World Culture",
    question: "Which European country has four official languages?",
    options: ["Switzerland", "Belgium", "Luxembourg", "Finland"],
    answer: "Switzerland",
    explanation: "Switzerland recognizes German, French, Italian, and Romansh as its four national languages."
  },
  {
    category: "Geography & World Culture",
    question: "Which desert is the largest hot desert in the world?",
    options: ["Gobi", "Atacama", "Sahara", "Kalahari"],
    answer: "Sahara",
    explanation: "The Sahara Desert spans North Africa and is the largest hot desert in the world, covering over 9 million square kilometers."
  },
  {
    category: "Geography & World Culture",
    question: "Which Asian country is famous for its cherry blossom festivals?",
    options: ["China", "Thailand", "Japan", "Vietnam"],
    answer: "Japan",
    explanation: "Japan's cherry blossom (sakura) season is celebrated with picnics and festivals across the country every spring."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "France", "Germany", "Switzerland"],
    answer: "France",
    explanation: "The Eiffel Tower is one of the most iconic landmarks in Paris, France, and a global symbol of romance and architecture."
  },
  {
    category: "Geography & World Culture",
    question: "Which country has the most official time zones?",
    options: ["USA", "Russia", "France", "China"],
    answer: "France",
    explanation: "France has the most time zones (12), due to its numerous overseas territories spread across the globe."
  },
  {
    category: "Geography & World Culture",
    question: "Which island country is located southeast of India?",
    options: ["Sri Lanka", "Maldives", "Indonesia", "Bangladesh"],
    answer: "Sri Lanka",
    explanation: "Sri Lanka is an island nation located in the Indian Ocean, known for its cultural heritage and scenic beauty."
  },
  {
    category: "Geography & World Culture",
    question: "Which festival is celebrated by people splashing water on each other in Thailand?",
    options: ["Holi", "Songkran", "Tet", "Vesak"],
    answer: "Songkran",
    explanation: "Songkran is the Thai New Year festival, celebrated in April with water fights to symbolize cleansing and renewal."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is known as the 'Big Apple'?",
    options: ["Los Angeles", "London", "New York City", "Chicago"],
    answer: "New York City",
    explanation: "New York City is often referred to as the 'Big Apple', a nickname popularized in the 1920s jazz scene."
  },
  {
    category: "Geography & World Culture",
    question: "What is the official language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    answer: "Portuguese",
    explanation: "Brazil is the only country in South America that speaks Portuguese, due to its colonial history with Portugal."
  },
  {
    category: "Geography & World Culture",
    question: "Which European city is famous for its ancient Colosseum?",
    options: ["Athens", "Rome", "Madrid", "Paris"],
    answer: "Rome",
    explanation: "The Colosseum in Rome, Italy, is one of the greatest architectural and engineering feats of the ancient Roman Empire."
  },
  {
    category: "Geography & World Culture",
    question: "Which mountain range separates Europe from Asia?",
    options: ["Alps", "Carpathians", "Himalayas", "Ural Mountains"],
    answer: "Ural Mountains",
    explanation: "The Ural Mountains run through Russia and traditionally mark the boundary between Europe and Asia."
  },
  {
    category: "Geography & World Culture",
    question: "Which Asian country is home to Angkor Wat?",
    options: ["Thailand", "Cambodia", "Vietnam", "Laos"],
    answer: "Cambodia",
    explanation: "Angkor Wat is a massive temple complex in Cambodia, originally built as a Hindu temple and now a national symbol."
  },
  {
    category: "Geography & World Culture",
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa",
    explanation: "Africa has 54 recognized sovereign nations, making it the continent with the most countries in the world."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is famous for inventing pizza and pasta?",
    options: ["France", "Spain", "Italy", "Greece"],
    answer: "Italy",
    explanation: "Italy is the birthplace of many beloved dishes like pizza and pasta, deeply embedded in its cultural heritage."
  },
  {
    category: "Geography & World Culture",
    question: "Which city hosts the annual Carnival with samba parades and colorful costumes?",
    options: ["Barcelona", "Venice", "Rio de Janeiro", "New Orleans"],
    answer: "Rio de Janeiro",
    explanation: "The Rio Carnival in Brazil is one of the world’s largest and most vibrant celebrations, known for its music and dance."
  },
  {
    category: "Geography & World Culture",
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    answer: "Ottawa",
    explanation: "Ottawa is the capital city of Canada, located in the province of Ontario and known for its government buildings and history."
  },
  {
    category: "Geography & World Culture",
    question: "In which country can you visit the Great Barrier Reef?",
    options: ["Australia", "Philippines", "Indonesia", "Fiji"],
    answer: "Australia",
    explanation: "The Great Barrier Reef is the world's largest coral reef system, located off the northeastern coast of Australia."
  },
  {
    category: "Geography & World Culture",
    question: "Which Scandinavian country is known for its fjords?",
    options: ["Denmark", "Sweden", "Finland", "Norway"],
    answer: "Norway",
    explanation: "Norway is world-famous for its dramatic fjords—narrow, deep inlets of the sea flanked by steep cliffs."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is home to the ancient city of Petra?",
    options: ["Egypt", "Jordan", "Lebanon", "Iraq"],
    answer: "Jordan",
    explanation: "Petra is an archaeological site in southern Jordan, carved into red sandstone cliffs and once a thriving trading hub."
  },
  {
    category: "Geography & World Culture",
    question: "Which US state is famous for its Polynesian cultural influence and volcanic landscapes?",
    options: ["California", "Florida", "Alaska", "Hawaii"],
    answer: "Hawaii",
    explanation: "Hawaii has strong Polynesian roots and is known for its islands, active volcanoes, and tropical culture."
  },
  {
    category: "Geography & World Culture",
    question: "Which country celebrates Bastille Day on July 14th?",
    options: ["Germany", "Italy", "France", "Belgium"],
    answer: "France",
    explanation: "Bastille Day commemorates the French Revolution and is France’s national day, celebrated with fireworks and parades."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is famous for the ancient Inca city of Machu Picchu?",
    options: ["Colombia", "Peru", "Bolivia", "Ecuador"],
    answer: "Peru",
    explanation: "Machu Picchu is a 15th-century Inca citadel set high in the Andes Mountains of Peru."
  },
  {
    category: "Geography & World Culture",
    question: "Which Asian country is nicknamed 'The Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
    explanation: "Japan is often called 'The Land of the Rising Sun' because it lies to the east of the Asian continent and symbolizes the dawn."
  },
  {
    category: "Geography & World Culture",
    question: "Which country has the most volcanoes in the world?",
    options: ["Indonesia", "Iceland", "Japan", "Philippines"],
    answer: "Indonesia",
    explanation: "Indonesia lies on the Pacific Ring of Fire and has over 130 active volcanoes — the most of any country."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is famous for the historic Acropolis?",
    options: ["Rome", "Istanbul", "Cairo", "Athens"],
    answer: "Athens",
    explanation: "The Acropolis is a symbol of ancient Greece, located in Athens and home to the iconic Parthenon temple."
  },
  {
    category: "Geography & World Culture",
    question: "What is the official language of Egypt?",
    options: ["Berber", "Arabic", "French", "Turkish"],
    answer: "Arabic",
    explanation: "Arabic is the official and most widely spoken language in Egypt, used in government, education, and media."
  },
  {
    category: "Geography & World Culture",
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
    answer: "Nile",
    explanation: "Although some debate exists, the Nile is generally considered the longest river in the world, flowing through 11 African countries."
  },
  {
    category: "Geography & World Culture",
    question: "Which South American country is known for tango music and dance?",
    options: ["Argentina", "Brazil", "Chile", "Uruguay"],
    answer: "Argentina",
    explanation: "Tango originated in Buenos Aires, Argentina, and is now celebrated globally for its passion and rhythm."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is home to the Blue Mosque?",
    options: ["Mecca", "Istanbul", "Cairo", "Tehran"],
    answer: "Istanbul",
    explanation: "The Blue Mosque, also known as the Sultan Ahmed Mosque, is a historic landmark in Istanbul, Turkey."
  },
  {
    category: "Geography & World Culture",
    question: "Which festival marks the Lunar New Year in China?",
    options: ["Mid-Autumn Festival", "Dragon Boat Festival", "Spring Festival", "Chuseok"],
    answer: "Spring Festival",
    explanation: "The Spring Festival is the Chinese Lunar New Year, marked by family gatherings, fireworks, and red decorations."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is known for the Highland Games and kilts?",
    options: ["Ireland", "Scotland", "Wales", "England"],
    answer: "Scotland",
    explanation: "Scotland celebrates its heritage with Highland Games featuring traditional sports, kilts, and bagpipes."
  },
  {
    category: "Geography & World Culture",
    question: "Which Caribbean island is famous for reggae music and jerk chicken?",
    options: ["Barbados", "Jamaica", "Cuba", "Trinidad"],
    answer: "Jamaica",
    explanation: "Jamaica is the birthplace of reggae music and is known globally for its flavorful jerk cuisine."
  },
  {
    category: "Geography & World Culture",
    question: "Which Asian city is known as the 'City of Skyscrapers'?",
    options: ["Shanghai", "Tokyo", "Hong Kong", "Singapore"],
    answer: "Hong Kong",
    explanation: "Hong Kong holds the record for the most skyscrapers in any city, blending vertical living with fast-paced urban life."
  },
  {
    category: "Geography & World Culture",
    question: "Which European country is famous for windmills, tulips, and canals?",
    options: ["Denmark", "Belgium", "Netherlands", "Austria"],
    answer: "Netherlands",
    explanation: "The Netherlands is iconic for its flat landscapes, windmills, colorful tulip fields, and historic canals, especially in Amsterdam."
  },
  {
    category: "Geography & World Culture",
    question: "Which traditional Japanese garment is often worn during festivals?",
    options: ["Sari", "Kimono", "Hanbok", "Cheongsam"],
    answer: "Kimono",
    explanation: "The kimono is a traditional Japanese robe worn during festivals, ceremonies, and cultural celebrations."
  },
  {
    category: "Geography & World Culture",
    question: "Which city is home to the world-famous Louvre Museum?",
    options: ["Rome", "Paris", "Madrid", "Berlin"],
    answer: "Paris",
    explanation: "The Louvre, located in Paris, France, is the world's largest art museum and home to the Mona Lisa."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is shaped like a boot on the map?",
    options: ["Italy", "Greece", "Portugal", "Croatia"],
    answer: "Italy",
    explanation: "Italy is famously shaped like a high-heeled boot, easily recognizable on any world map."
  },
  {
    category: "Geography & World Culture",
    question: "Which continent is known as the birthplace of humanity?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa",
    explanation: "Africa is considered the cradle of humanity due to fossil evidence of early human ancestors found there."
  },
  {
    category: "Geography & World Culture",
    question: "Which ocean surrounds the Maldives?",
    options: ["Atlantic", "Indian", "Pacific", "Southern"],
    answer: "Indian",
    explanation: "The Maldives is a tropical paradise of islands located in the Indian Ocean, southwest of India and Sri Lanka."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is known for Oktoberfest and bratwurst?",
    options: ["Germany", "Austria", "Switzerland", "Poland"],
    answer: "Germany",
    explanation: "Germany celebrates Oktoberfest annually in Munich, showcasing beer, traditional clothing, and bratwurst sausages."
  },
  {
    category: "Geography & World Culture",
    question: "Which ancient civilization built the pyramids in Giza?",
    options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
    answer: "Egyptians",
    explanation: "The ancient Egyptians built the pyramids in Giza as tombs for pharaohs thousands of years ago."
  },
  {
    category: "Geography & World Culture",
    question: "Which Southeast Asian country is known for its floating markets?",
    options: ["Vietnam", "Thailand", "Malaysia", "Philippines"],
    answer: "Thailand",
    explanation: "Thailand’s floating markets, such as Damnoen Saduak, are vibrant tourist attractions and traditional commerce hubs."
  },
  {
    category: "Geography & World Culture",
    question: "Which country is famous for building the Great Wall?",
    options: ["China", "India", "Japan", "Mongolia"],
    answer: "China",
    explanation: "The Great Wall of China was constructed over centuries to protect Chinese territories from invasions and remains a global symbol of heritage."
  },
  {
    category: "Science & Technology",
    question: "What is the chemical symbol for gold?",
    options: ["Gd", "Au", "Ag", "Go"],
    answer: "Au",
    explanation: "The symbol 'Au' comes from the Latin word 'Aurum', which means gold."
  },
  {
    category: "Science & Technology",
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Stephen Hawking"],
    answer: "Albert Einstein",
    explanation: "Albert Einstein introduced the theory of relativity in the early 20th century, revolutionizing physics."
  },
  {
    category: "Science & Technology",
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Mercury"],
    answer: "Mars",
    explanation: "Mars appears red due to iron oxide (rust) on its surface."
  },
  {
    category: "Science & Technology",
    question: "What does 'HTTP' stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Program", "Hyper Technical Text Protocol", "High Transmission Text Path"],
    answer: "HyperText Transfer Protocol",
    explanation: "HTTP is the protocol used by web browsers to communicate with servers and load webpages."
  },
  {
    category: "Science & Technology",
    question: "Which part of the cell contains genetic material?",
    options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
    answer: "Nucleus",
    explanation: "The nucleus stores the cell's DNA and controls genetic activities."
  },
  {
    category: "Science & Technology",
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
    answer: "300,000 km/s",
    explanation: "The speed of light in a vacuum is approximately 299,792 kilometers per second, commonly rounded to 300,000 km/s."
  },
  {
    category: "Science & Technology",
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
    explanation: "Plants absorb carbon dioxide from the air and use sunlight to convert it into energy."
  },
  {
    category: "Science & Technology",
    question: "What does DNA stand for?",
    options: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Digital Neural Agent", "Direct Nitrogen Analysis"],
    answer: "Deoxyribonucleic Acid",
    explanation: "DNA is the molecule that carries genetic instructions used in growth and development."
  },
  {
    category: "Science & Technology",
    question: "Who is credited with inventing the first telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Michael Faraday"],
    answer: "Alexander Graham Bell",
    explanation: "Alexander Graham Bell patented the telephone in 1876 and is widely credited with its invention."
  },
  {
    category: "Science & Technology",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Chloroplast", "Ribosome", "Mitochondria"],
    answer: "Mitochondria",
    explanation: "Mitochondria generate energy for the cell through a process called cellular respiration."
  },
  {
    category: "Science & Technology",
    question: "What is the main function of white blood cells?",
    options: ["Carry oxygen", "Digest food", "Fight infection", "Store energy"],
    answer: "Fight infection",
    explanation: "White blood cells are part of the immune system and help defend the body against infections and diseases."
  },
  {
    category: "Science & Technology",
    question: "Which device is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    answer: "Thermometer",
    explanation: "A thermometer is an instrument that measures temperature using substances that expand or contract with heat."
  },
  {
    category: "Science & Technology",
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Neptune", "Saturn", "Mars"],
    answer: "Saturn",
    explanation: "As of 2023, Saturn holds the record with over 140 confirmed moons, surpassing Jupiter."
  },
  {
    category: "Science & Technology",
    question: "Which scientist is known for the laws of motion and gravity?",
    options: ["Galileo Galilei", "Isaac Newton", "James Clerk Maxwell", "Albert Einstein"],
    answer: "Isaac Newton",
    explanation: "Isaac Newton formulated the laws of motion and universal gravitation in the 17th century."
  },
  {
    category: "Science & Technology",
    question: "What is the function of a CPU in a computer?",
    options: ["Store data", "Display images", "Process instructions", "Power the system"],
    answer: "Process instructions",
    explanation: "The CPU (Central Processing Unit) is the brain of the computer, responsible for executing programs and calculations."
  },
  {
    category: "Science & Technology",
    question: "What is the study of heredity called?",
    options: ["Anatomy", "Ecology", "Genetics", "Microbiology"],
    answer: "Genetics",
    explanation: "Genetics is the branch of biology that studies how traits are inherited from parents to offspring."
  },
  {
    category: "Science & Technology",
    question: "Which planet is the hottest in the solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
    explanation: "Despite being second from the Sun, Venus has a thick CO₂ atmosphere that traps heat, making it the hottest planet."
  },
  {
    category: "Science & Technology",
    question: "What is the unit of electrical resistance?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    answer: "Ohm",
    explanation: "The ohm (symbol: Ω) is the SI unit of electrical resistance, named after German physicist Georg Ohm."
  },
  {
    category: "Science & Technology",
    question: "Which organ in the human body is primarily responsible for filtering blood?",
    options: ["Heart", "Liver", "Kidneys", "Lungs"],
    answer: "Kidneys",
    explanation: "The kidneys filter waste products from the blood and regulate fluid and electrolyte balance."
  },
  {
    category: "Science & Technology",
    question: "Which tech company created the Android operating system?",
    options: ["Apple", "Samsung", "Google", "Microsoft"],
    answer: "Google",
    explanation: "Google acquired Android Inc. in 2005 and developed the Android OS, now the most widely used mobile platform."
  },
  {
    category: "Science & Technology",
    question: "Which technology is used to create virtual simulations of real-world environments?",
    options: ["Blockchain", "Artificial Intelligence", "Virtual Reality", "3D Printing"],
    answer: "Virtual Reality",
    explanation: "Virtual Reality (VR) creates immersive digital experiences, often using headsets to simulate real or fictional environments."
  },
  {
    category: "Science & Technology",
    question: "What is the main gas responsible for global warming?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
    explanation: "Carbon dioxide (CO₂) is a greenhouse gas that traps heat in Earth's atmosphere, contributing to climate change."
  },
  {
    category: "Science & Technology",
    question: "Who is known as the father of modern computing?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Tim Berners-Lee"],
    answer: "Charles Babbage",
    explanation: "Charles Babbage designed the first mechanical computer, laying the foundation for modern computing."
  },
  {
    category: "Science & Technology",
    question: "What is the term for the smallest unit of an element?",
    options: ["Molecule", "Electron", "Atom", "Proton"],
    answer: "Atom",
    explanation: "An atom is the basic unit of matter and the smallest unit of a chemical element."
  },
  {
    category: "Science & Technology",
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    answer: "Cerebellum",
    explanation: "The cerebellum, located at the back of the brain, regulates motor control and coordination."
  },
  {
    category: "Science & Technology",
    question: "What is the branch of science that studies earthquakes?",
    options: ["Geology", "Volcanology", "Seismology", "Meteorology"],
    answer: "Seismology",
    explanation: "Seismology is the scientific study of earthquakes and the movement of seismic waves through the Earth."
  },
  {
    category: "Science & Technology",
    question: "Which AI chatbot was released by OpenAI in 2022 and gained massive popularity?",
    options: ["Alexa", "Siri", "ChatGPT", "Bard"],
    answer: "ChatGPT",
    explanation: "ChatGPT, developed by OpenAI, became one of the most widely adopted AI tools for conversation and productivity in 2022."
  },
  {
    category: "Science & Technology",
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "120°C", "80°C"],
    answer: "100°C",
    explanation: "At standard atmospheric pressure, water boils at 100 degrees Celsius."
  },
  {
    category: "Science & Technology",
    question: "What is a light-year a measure of?",
    options: ["Time", "Weight", "Distance", "Speed"],
    answer: "Distance",
    explanation: "A light-year is the distance light travels in one year — about 9.46 trillion kilometers."
  },
  {
    category: "Science & Technology",
    question: "Which element is the most abundant in the Earth's crust?",
    options: ["Oxygen", "Iron", "Silicon", "Aluminum"],
    answer: "Oxygen",
    explanation: "Oxygen makes up nearly 46% of the Earth's crust by weight, mostly in the form of oxides and silicates."
  },
  {
    category: "Science & Technology",
    question: "Which organ is responsible for pumping blood throughout the body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    answer: "Heart",
    explanation: "The heart is a muscular organ that pumps oxygen-rich blood to the body and returns deoxygenated blood to the lungs."
  },
  {
    category: "Science & Technology",
    question: "Which space agency landed the Perseverance rover on Mars in 2021?",
    options: ["ESA", "ISRO", "NASA", "Roscosmos"],
    answer: "NASA",
    explanation: "NASA’s Perseverance rover landed on Mars in February 2021 to search for signs of ancient life and collect rock samples."
  },
  {
    category: "Science & Technology",
    question: "What is the scientific name for the process of cell division in body cells?",
    options: ["Meiosis", "Photosynthesis", "Mitosis", "Fermentation"],
    answer: "Mitosis",
    explanation: "Mitosis is the process where a single cell divides into two identical daughter cells, essential for growth and repair."
  },
  {
    category: "Science & Technology",
    question: "Which material is known as the best electrical conductor?",
    options: ["Aluminum", "Copper", "Silver", "Gold"],
    answer: "Silver",
    explanation: "Silver has the highest electrical conductivity of all metals, although copper is more widely used due to cost."
  },
  {
    category: "Science & Technology",
    question: "What does 'URL' stand for in web technology?",
    options: ["Universal Record Locator", "Uniform Resource Locator", "User Router Link", "Unified Remote Link"],
    answer: "Uniform Resource Locator",
    explanation: "A URL is the address of a webpage or file on the internet, allowing browsers to locate and retrieve it."
  },
  {
    category: "Science & Technology",
    question: "Which planet has the strongest gravity in our solar system?",
    options: ["Earth", "Saturn", "Neptune", "Jupiter"],
    answer: "Jupiter",
    explanation: "Jupiter is the largest planet in our solar system and has the strongest gravitational pull."
  },
  {
    category: "Science & Technology",
    question: "What do we call animals that maintain a constant body temperature?",
    options: ["Cold-blooded", "Ectothermic", "Warm-blooded", "Invertebrates"],
    answer: "Warm-blooded",
    explanation: "Warm-blooded animals, like mammals and birds, maintain stable internal temperatures regardless of the environment."
  },
  {
    category: "Science & Technology",
    question: "Which futuristic technology is used to manipulate matter at the atomic level?",
    options: ["Biotechnology", "Quantum Computing", "Nanotechnology", "Cryptography"],
    answer: "Nanotechnology",
    explanation: "Nanotechnology involves the manipulation of materials at the scale of atoms and molecules for advanced applications."
  },
  {
    category: "Science & Technology",
    question: "Which global tech giant created the Azure cloud platform?",
    options: ["Google", "IBM", "Apple", "Microsoft"],
    answer: "Microsoft",
    explanation: "Microsoft Azure is a cloud computing platform offering services like storage, networking, and AI tools globally."
  },
  {
    category: "Science & Technology",
    question: "Which blood type is known as the universal donor?",
    options: ["AB+", "O+", "O-", "A-"],
    answer: "O-",
    explanation: "O negative blood can be given to patients of any blood type, making it crucial in emergencies."
  },
  {
    category: "Science & Technology",
    question: "Which programming language is known for its use in web development alongside HTML and CSS?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
    explanation: "JavaScript is a core technology for building interactive websites, used alongside HTML and CSS."
  },
  {
    category: "Science & Technology",
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Lungs", "Brain", "Skin"],
    answer: "Skin",
    explanation: "The skin is the largest organ, protecting the body from environmental damage and regulating temperature."
  },
  {
    category: "Science & Technology",
    question: "Which robotic spacecraft traveled beyond the solar system?",
    options: ["Voyager 1", "Hubble", "Curiosity", "Galileo"],
    answer: "Voyager 1",
    explanation: "Voyager 1, launched by NASA in 1977, became the first human-made object to enter interstellar space."
  },
  {
    category: "Science & Technology",
    question: "Which company developed the iPhone?",
    options: ["Google", "Samsung", "Apple", "Microsoft"],
    answer: "Apple",
    explanation: "Apple launched the first iPhone in 2007, revolutionizing mobile technology with touchscreen and app ecosystems."
  },
  {
    category: "Science & Technology",
    question: "Which field of science studies the weather and atmosphere?",
    options: ["Ecology", "Meteorology", "Geology", "Astronomy"],
    answer: "Meteorology",
    explanation: "Meteorology is the scientific study of weather patterns, climate, and atmospheric phenomena."
  },
  {
    category: "Science & Technology",
    question: "What is the main function of an antivirus program?",
    options: ["Store data", "Improve speed", "Detect and remove malware", "Optimize graphics"],
    answer: "Detect and remove malware",
    explanation: "Antivirus software scans, detects, and removes malicious software from computers to protect data and system integrity."
  },
  {
    category: "Science & Technology",
    question: "What does 5G stand for in telecommunications?",
    options: ["Fifth Generation", "Five Gigabytes", "Fast Global", "Fiber Grade"],
    answer: "Fifth Generation",
    explanation: "5G is the fifth generation of mobile network technology, offering faster speeds and lower latency than 4G."
  },
  {
    category: "Science & Technology",
    question: "Which molecule is primarily responsible for carrying oxygen in the blood?",
    options: ["Chlorophyll", "Hemoglobin", "Insulin", "Adrenaline"],
    answer: "Hemoglobin",
    explanation: "Hemoglobin is a protein in red blood cells that binds with oxygen and transports it throughout the body."
  },
  {
    category: "Science & Technology",
    question: "Which field focuses on the secure transmission of data?",
    options: ["Networking", "Machine Learning", "Cryptography", "Biometrics"],
    answer: "Cryptography",
    explanation: "Cryptography is the practice of securing communication by encoding messages to prevent unauthorized access."
  },
  {
    category: "Science & Technology",
    question: "Which chemical element has the atomic number 1?",
    options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
    answer: "Hydrogen",
    explanation: "Hydrogen is the first element on the periodic table, making it the lightest and most abundant element in the universe."
  },
  {
    category: "Gaming & Esports",
    question: "In PUBG, what does the abbreviation 'GG' stand for?",
    options: ["Gun Game", "Good Game", "Grenade Group", "Global Grind"],
    answer: "Good Game",
    explanation: "‘GG’ is a common gaming term meaning 'Good Game', used as a sign of sportsmanship after matches."
  },
  {
    category: "Gaming & Esports",
    question: "Which item in Free Fire restores HP quickly?",
    options: ["Armor", "Glue Wall", "Med Kit", "Energy Drink"],
    answer: "Med Kit",
    explanation: "Med Kits in Free Fire are used to quickly restore health during or after combat."
  },
  {
    category: "Gaming & Esports",
    question: "Which game features characters like Steve and mobs like Creepers?",
    options: ["Fortnite", "Minecraft", "Roblox", "Apex Legends"],
    answer: "Minecraft",
    explanation: "Minecraft is a sandbox game where players can explore, build, and survive in a blocky world filled with mobs like Creepers."
  },
  {
    category: "Gaming & Esports",
    question: "Which esports game is most associated with headshots and tactical play?",
    options: ["Dota 2", "League of Legends", "Valorant", "Clash Royale"],
    answer: "Valorant",
    explanation: "Valorant is a tactical first-person shooter known for precision shooting and strategic gameplay."
  },
  {
    category: "Gaming & Esports",
    question: "In PUBG, which map is known for being desert-themed?",
    options: ["Erangel", "Sanhok", "Miramar", "Vikendi"],
    answer: "Miramar",
    explanation: "Miramar is a desert map in PUBG featuring wide open areas and sparse vegetation, ideal for long-range combat."
  },
  {
    category: "Gaming & Esports",
    question: "Which game features a Victory Royale when you win?",
    options: ["Call of Duty", "Fortnite", "Overwatch", "Free Fire"],
    answer: "Fortnite",
    explanation: "Fortnite declares a ‘Victory Royale’ when you are the last player or team standing in battle royale mode."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, which pet gives players an advantage with movement speed?",
    options: ["Moony", "Robo", "Beaston", "Falco"],
    answer: "Falco",
    explanation: "Falco boosts the gliding and diving speed when dropping into matches, helping players land faster."
  },
  {
    category: "Gaming & Esports",
    question: "Which company developed the game League of Legends?",
    options: ["Epic Games", "Valve", "Riot Games", "Ubisoft"],
    answer: "Riot Games",
    explanation: "Riot Games is the developer behind League of Legends, one of the most popular MOBA titles worldwide."
  },
  {
    category: "Gaming & Esports",
    question: "What is the in-game currency used in Fortnite?",
    options: ["Fortbucks", "F-Coins", "Battle Points", "V-Bucks"],
    answer: "V-Bucks",
    explanation: "V-Bucks are Fortnite's premium in-game currency used to buy skins, emotes, and battle passes."
  },
  {
    category: "Gaming & Esports",
    question: "Which role is NOT part of standard Free Fire character classes?",
    options: ["Support", "Sniper", "Tank", "Engineer"],
    answer: "Engineer",
    explanation: "Free Fire uses roles like Support and Sniper, but 'Engineer' is not a standard class or ability set in the game."
  },
  {
    category: "Gaming & Esports",
    question: "What is the maximum number of players in a classic PUBG match?",
    options: ["100", "50", "120", "80"],
    answer: "100",
    explanation: "Classic PUBG battle royale matches host up to 100 players, either solo, in duos, or squads."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire character is based on the real-life DJ Alok?",
    options: ["Kelly", "Hayato", "DJ Alok", "Wukong"],
    answer: "DJ Alok",
    explanation: "DJ Alok is a playable character in Free Fire, inspired by the famous Brazilian DJ and offers healing and speed boosts."
  },
  {
    category: "Gaming & Esports",
    question: "Which esports game is played professionally in The International tournament?",
    options: ["CS:GO", "Valorant", "Dota 2", "Overwatch"],
    answer: "Dota 2",
    explanation: "The International is the biggest Dota 2 tournament in the world, known for its multi-million dollar prize pools."
  },
  {
    category: "Gaming & Esports",
    question: "Which console is produced by Sony?",
    options: ["Xbox", "Switch", "PlayStation", "Steam Deck"],
    answer: "PlayStation",
    explanation: "Sony produces the PlayStation console series, including PS2, PS4, and PS5, globally popular among gamers."
  },
  {
    category: "Gaming & Esports",
    question: "Which vehicle is NOT available in PUBG?",
    options: ["Dacia", "Mirado", "Ferrari", "UAZ"],
    answer: "Ferrari",
    explanation: "While PUBG offers vehicles like the Dacia and UAZ, Ferrari is not part of the game's vehicle selection."
  },
  {
    category: "Gaming & Esports",
    question: "What’s the name of the building tool in Fortnite?",
    options: ["Blueprint Gun", "Builder Wand", "Build Mode", "Build Tool"],
    answer: "Build Tool",
    explanation: "Fortnite players can access the Build Tool to construct walls, ramps, and structures during gameplay."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, which weapon is considered a sniper rifle?",
    options: ["MP40", "Groza", "AWM", "M1014"],
    answer: "AWM",
    explanation: "The AWM is a high-damage sniper rifle in Free Fire, great for long-range precision shooting."
  },
  {
    category: "Gaming & Esports",
    question: "Which game is often abbreviated as 'LoL'?",
    options: ["Lost of Legends", "Legacy of Light", "League of Legends", "Legion of Light"],
    answer: "League of Legends",
    explanation: "'LoL' stands for League of Legends, a global multiplayer online battle arena (MOBA) game by Riot Games."
  },
  {
    category: "Gaming & Esports",
    question: "What type of game is Clash Royale?",
    options: ["MOBA", "Battle Royale", "Card Strategy", "Open World RPG"],
    answer: "Card Strategy",
    explanation: "Clash Royale is a real-time card-based strategy game where players deploy troops, spells, and buildings in arenas."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG map is known for its snow-covered terrain?",
    options: ["Vikendi", "Erangel", "Sanhok", "Livik"],
    answer: "Vikendi",
    explanation: "Vikendi is the snowy map in PUBG featuring icy terrain, snowmobiles, and frozen towns."
  },
  {
    category: "Gaming & Esports",
    question: "Which game allows players to drop into Los Santos and play as characters like Franklin and Trevor?",
    options: ["Saints Row", "GTA V", "Red Dead Redemption", "Watch Dogs"],
    answer: "GTA V",
    explanation: "GTA V (Grand Theft Auto V) is set in the fictional city of Los Santos and follows three playable characters."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, what is the purpose of the 'Glue Wall'?",
    options: ["Attack enemies", "Drive vehicles", "Create cover", "Heal teammates"],
    answer: "Create cover",
    explanation: "Glue Walls are used in Free Fire to instantly create portable cover during gunfights."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG gun is known for its powerful single-shot damage?",
    options: ["M416", "Scar-L", "Kar98k", "Vector"],
    answer: "Kar98k",
    explanation: "The Kar98k is a bolt-action sniper rifle in PUBG known for high damage in single shots, especially to the head."
  },
  {
    category: "Gaming & Esports",
    question: "Which esports team won the 2021 League of Legends World Championship?",
    options: ["T1", "G2 Esports", "DWG KIA", "EDward Gaming"],
    answer: "EDward Gaming",
    explanation: "EDward Gaming (EDG), a Chinese team, won the 2021 LoL World Championship in a thrilling final."
  },
  {
    category: "Gaming & Esports",
    question: "What is the main function of the UAV in Call of Duty multiplayer?",
    options: ["Heal teammates", "Block enemy vision", "Reveal enemy locations", "Spawn extra ammo"],
    answer: "Reveal enemy locations",
    explanation: "The UAV in Call of Duty reveals enemy positions on the minimap, helping players track opponents."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire character has the Time Turner ability?",
    options: ["Alok", "Chrono", "Jota", "K"],
    answer: "Chrono",
    explanation: "Chrono, a character based on Cristiano Ronaldo, uses Time Turner to create a shield and boost movement."
  },
  {
    category: "Gaming & Esports",
    question: "Which vehicle is fastest on the Erangel map in PUBG?",
    options: ["Buggy", "Dacia", "Motorcycle", "UAZ"],
    answer: "Motorcycle",
    explanation: "The motorcycle is the fastest vehicle on Erangel, perfect for quick escapes or zone rotations."
  },
  {
    category: "Gaming & Esports",
    question: "What type of game is Rocket League?",
    options: ["First-person shooter", "Sports-action", "Puzzle", "Battle Royale"],
    answer: "Sports-action",
    explanation: "Rocket League is a sports-action game where players play soccer using rocket-powered cars."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, what does the Blue Zone do?",
    options: ["Heals players", "Deals damage", "Gives loot", "Slows movement"],
    answer: "Deals damage",
    explanation: "Like many battle royale games, Free Fire’s Blue Zone shrinks the play area and deals damage to players outside it."
  },
  {
    category: "Gaming & Esports",
    question: "Which gaming platform is known for exclusive titles like God of War and Spider-Man?",
    options: ["Xbox", "Nintendo Switch", "PlayStation", "PC"],
    answer: "PlayStation",
    explanation: "Sony’s PlayStation has exclusive hits like God of War, Spider-Man, and The Last of Us that define the platform."
  },
  {
    category: "Gaming & Esports",
    question: "Which popular game creation platform allows users to design and play custom games?",
    options: ["Minecraft", "Roblox", "Fortnite", "Terraria"],
    answer: "Roblox",
    explanation: "Roblox is a global platform where users can create, publish, and play millions of user-generated games."
  },
  {
    category: "Gaming & Esports",
    question: "What’s the name of Fortnite’s creative map-building mode?",
    options: ["Battle Lab", "Sandbox", "Create Mode", "Creative"],
    answer: "Creative",
    explanation: "Creative mode in Fortnite allows players to build custom maps, games, and experiences."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire pet is designed to break enemy Glue Walls?",
    options: ["Falco", "Mr. Waggor", "Beaston", "Robo"],
    answer: "Beaston",
    explanation: "Beaston increases the throwing distance of grenades and helps counter enemies hiding behind Glue Walls."
  },
  {
    category: "Gaming & Esports",
    question: "What is the in-game currency used in Roblox?",
    options: ["Robux", "R-Coins", "RobloCoins", "BuildersBucks"],
    answer: "Robux",
    explanation: "Robux is Roblox’s premium currency used to purchase avatar items, game passes, and developer features."
  },
  {
    category: "Gaming & Esports",
    question: "Which weapon in Fortnite is known for its high damage and slow fire rate?",
    options: ["SMG", "Pump Shotgun", "Burst AR", "Sniper Rifle"],
    answer: "Pump Shotgun",
    explanation: "The Pump Shotgun in Fortnite delivers heavy damage at close range but has a slower rate of fire."
  },
  {
    category: "Gaming & Esports",
    question: "What is the name of the Roblox game where players escape from prison or play as police?",
    options: ["Escape Masters", "Jailbreak", "Prison Life", "Break Out"],
    answer: "Jailbreak",
    explanation: "Jailbreak is a popular Roblox game where players choose to be criminals escaping prison or officers stopping them."
  },
  {
    category: "Gaming & Esports",
    question: "Which character is known for reviving teammates quickly in Apex Legends?",
    options: ["Wraith", "Lifeline", "Pathfinder", "Fuse"],
    answer: "Lifeline",
    explanation: "Lifeline is a combat medic in Apex Legends, equipped with healing drones and fast revive abilities."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite chapter introduced the Zero Point storyline?",
    options: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
    answer: "Chapter 2",
    explanation: "The Zero Point story arc began in Chapter 2, bringing major lore updates, maps, and crossovers to Fortnite."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, what’s the scripting language used to develop games?",
    options: ["Python", "Lua", "JavaScript", "Scratch"],
    answer: "Lua",
    explanation: "Roblox uses Lua, a lightweight scripting language, to power game logic, interactions, and mechanics."
  },
  {
    category: "Gaming & Esports",
    question: "What is Fortnite’s building material that provides the most protection?",
    options: ["Wood", "Stone", "Metal", "Bricks"],
    answer: "Metal",
    explanation: "Metal structures in Fortnite take the longest to build but are the strongest against attacks and explosives."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite feature lets players team up in a no-combat social space?",
    options: ["Battle Hub", "Party Royale", "Creative Lounge", "Squad Zone"],
    answer: "Party Royale",
    explanation: "Party Royale is a Fortnite mode with no combat where players can socialize, watch concerts, and complete fun events."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, what is the popular horror game featuring doors and jump scares?",
    options: ["Escape Room", "Haunted House", "Doors", "Silent Steps"],
    answer: "Doors",
    explanation: "'Doors' is a horror puzzle game on Roblox where players explore rooms and survive sudden monster encounters."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG map is the smallest in size?",
    options: ["Erangel", "Sanhok", "Miramar", "Vikendi"],
    answer: "Sanhok",
    explanation: "Sanhok is the smallest PUBG map at 4x4 km, designed for fast-paced, high-action gameplay."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, which mode is known for fast 4v4 battles?",
    options: ["Battle Royale", "Clash Squad", "Survival Arena", "Zone Rush"],
    answer: "Clash Squad",
    explanation: "Clash Squad is a 4v4 mode in Free Fire where teams fight in short, intense matches with fixed weapon shops."
  },
  {
    category: "Gaming & Esports",
    question: "Which Roblox experience is about adopting and raising pets?",
    options: ["Pet World", "MeepCity", "Adopt Me!", "BloxPets"],
    answer: "Adopt Me!",
    explanation: "'Adopt Me!' is a top Roblox game where players can adopt pets, decorate homes, and role-play with others."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite crossover event featured Marvel superheroes?",
    options: ["Chapter 1 Finale", "Nexus War", "Galactic Showdown", "Infinity Drop"],
    answer: "Nexus War",
    explanation: "Fortnite’s Nexus War was a massive Marvel crossover event where players battled Galactus with superhero powers."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG gun is best known for its fast rate of fire in close combat?",
    options: ["AKM", "UMP45", "M416", "Vector"],
    answer: "Vector",
    explanation: "The Vector is a submachine gun with an incredibly fast fire rate, ideal for close-range fights in PUBG."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, what game simulates running a pizza restaurant?",
    options: ["Pizza Factory Tycoon", "Work at a Pizza Place", "Chef Mania", "Pizza Clicker"],
    answer: "Work at a Pizza Place",
    explanation: "'Work at a Pizza Place' is a classic Roblox game where players take roles like cook, cashier, or delivery driver."
  },
  {
    category: "Gaming & Esports",
    question: "What is the name of Fortnite’s storm-sensing tool?",
    options: ["Storm Tracker", "Weather Eye", "Storm Scout", "Pulse Scope"],
    answer: "Storm Scout",
    explanation: "The Storm Scout sniper rifle shows the next storm circle location, giving strategic advantage to players."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire character is inspired by the Indian actor Hrithik Roshan?",
    options: ["K", "Skyler", "Jai", "Wolfrahh"],
    answer: "Jai",
    explanation: "Jai is a Free Fire character based on Bollywood star Hrithik Roshan, equipped with an auto-reload ability on enemy knockdowns."
  },
  {
    category: "Gaming & Esports",
    question: "Which item in Fortnite restores both health and shields over time?",
    options: ["Chug Jug", "Slurp Juice", "Medkit", "Shield Potion"],
    answer: "Slurp Juice",
    explanation: "Slurp Juice gradually restores both health and shield, making it a versatile healing item in Fortnite."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, which game involves surviving disasters on different maps?",
    options: ["Survive the Chaos", "Disaster Valley", "Natural Disaster Survival", "Epic Survival"],
    answer: "Natural Disaster Survival",
    explanation: "Natural Disaster Survival is a popular Roblox game where players must survive floods, quakes, and storms on changing maps."
  },
  {
    category: "Gaming & Esports",
    question: "What is the main loot drop area in Erangel, PUBG, known for high risk and reward?",
    options: ["Rozhok", "Pochinki", "Mylta Power", "School"],
    answer: "School",
    explanation: "School in Erangel is a hot-drop zone packed with loot and intense early-game fights."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire character can recover EP (Energy Points) automatically?",
    options: ["Alok", "K", "Laura", "Hayato"],
    answer: "K",
    explanation: "K has a unique ability to recover EP over time, helping players regenerate health passively."
  },
  {
    category: "Gaming & Esports",
    question: "What Roblox experience lets players raise dragons and fly them across islands?",
    options: ["Sky Islands", "Dragon Flight", "Dragon Adventures", "Mythic Pets"],
    answer: "Dragon Adventures",
    explanation: "Dragon Adventures allows players to hatch, raise, and fly dragons across beautifully crafted worlds."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite weapon lets players fly short distances?",
    options: ["Jetpack", "Shockwave Hammer", "Impulse Grenade", "Boom Bow"],
    answer: "Jetpack",
    explanation: "Jetpacks in Fortnite let players hover and reach higher places briefly, great for mobility and surprise attacks."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG attachment improves aiming down sights (ADS) speed?",
    options: ["Foregrip", "Extended Mag", "Cheek Pad", "Laser Sight"],
    answer: "Laser Sight",
    explanation: "Laser Sights improve hip-fire accuracy and ADS speed, especially useful in close-quarter battles."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire mode allows players to respawn teammates?",
    options: ["Ranked Mode", "Classic Mode", "Lone Wolf", "Revival Squad"],
    answer: "Revival Squad",
    explanation: "In Revival Squad, players can bring back eliminated teammates using tokens and revival points."
  },
  {
    category: "Gaming & Esports",
    question: "What’s the main goal in Roblox's 'Tower of Hell'?",
    options: ["Defend towers", "Escape a dungeon", "Reach the top without falling", "Solve puzzles"],
    answer: "Reach the top without falling",
    explanation: "Tower of Hell challenges players to climb obstacle towers with no checkpoints — one mistake sends you back!"
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite skin is inspired by a banana?",
    options: ["Peely", "Agent Banana", "Fruit Boy", "Slipskin"],
    answer: "Peely",
    explanation: "Peely is a fan-favorite Fortnite skin modeled after a walking, smiling banana."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, what does ‘obby’ stand for?",
    options: ["Obstacle lobby", "Open battle base", "Object build yard", "Online board yard"],
    answer: "Obstacle lobby",
    explanation: "‘Obby’ is short for ‘Obstacle Lobby’, a type of Roblox game where players complete challenging parkour courses."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite crossover featured Naruto characters?",
    options: ["Anime Festival", "Shinobi Showdown", "Naruto x Fortnite", "Hidden Leaf Village"],
    answer: "Naruto x Fortnite",
    explanation: "Fortnite’s Naruto x Fortnite event added skins like Naruto, Sasuke, and Kakashi, along with themed challenges."
  },
  {
    category: "Gaming & Esports",
    question: "In Free Fire, which weapon is best known for close-range combat?",
    options: ["MP40", "M82B", "FAMAS", "XM8"],
    answer: "MP40",
    explanation: "The MP40 is a fast-firing SMG ideal for close-range engagements in Free Fire."
  },
  {
    category: "Gaming & Esports",
    question: "What is the name of the Roblox game where you mine and collect rare ores?",
    options: ["Treasure Miner", "Mine Simulator", "Mining Madness", "Mining Simulator"],
    answer: "Mining Simulator",
    explanation: "Mining Simulator lets players dig through layers of earth to collect ores, upgrade gear, and trade resources."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG item helps reduce recoil on sniper rifles?",
    options: ["Suppressor", "Vertical Grip", "Cheek Pad", "Extended Mag"],
    answer: "Cheek Pad",
    explanation: "The Cheek Pad reduces weapon sway and recoil on sniper rifles, improving long-range accuracy in PUBG."
  },
  {
    category: "Gaming & Esports",
    question: "What is the main objective in Fortnite’s Save the World mode?",
    options: ["Defeat other players", "Build creative maps", "Complete quests and defend from zombies", "Earn V-Bucks quickly"],
    answer: "Complete quests and defend from zombies",
    explanation: "Save the World is a PvE mode where players complete missions, build bases, and fight off zombie-like husks."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire pet creates a shield when you get knocked down?",
    options: ["Moony", "Robo", "Detective Panda", "Night Panther"],
    answer: "Robo",
    explanation: "Robo provides a protective shield when the player is knocked down, offering defense for a few seconds."
  },
  {
    category: "Gaming & Esports",
    question: "Which Roblox game lets you roleplay in a neighborhood as a citizen or criminal?",
    options: ["City Life", "Brookhaven", "Roleplay Town", "BloxTopia"],
    answer: "Brookhaven",
    explanation: "Brookhaven is a massively popular roleplay game in Roblox where players live in a city and create stories."
  },
  {
    category: "Gaming & Esports",
    question: "What is the Fortnite item used to bounce off surfaces or launch into the air?",
    options: ["Launch Pad", "Jump Bomb", "Impulse Shock", "Bounce Trap"],
    answer: "Launch Pad",
    explanation: "Launch Pads allow players to fly into the sky, useful for escaping storms or surprising enemies."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG gun is a light machine gun with a massive magazine?",
    options: ["M249", "Beryl M762", "DP-28", "UMP45"],
    answer: "M249",
    explanation: "The M249 is a powerful LMG in PUBG with high ammo capacity and fast fire rate, effective for squad wipes."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite item lets players redeploy from high places without taking damage?",
    options: ["Crash Pad", "Glider", "Shield Keg", "Bandage Bazooka"],
    answer: "Glider",
    explanation: "Glider Redeploy allows players to glide again from heights, preventing fall damage in Fortnite."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox’s 'Bee Swarm Simulator', what do bees collect for you?",
    options: ["Coins", "Energy", "Pollen", "Honeycombs"],
    answer: "Pollen",
    explanation: "In Bee Swarm Simulator, bees collect pollen from flowers which is converted into honey at your hive."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire character gains accuracy after every successful shot?",
    options: ["Laura", "Dasha", "Rafael", "Moco"],
    answer: "Laura",
    explanation: "Laura’s passive ability increases accuracy after landing a shot, ideal for precision shooters."
  },
  {
    category: "Gaming & Esports",
    question: "Which PUBG map includes the unique terrain of lava and waterfalls?",
    options: ["Erangel", "Livik", "Karakin", "Sanhok"],
    answer: "Livik",
    explanation: "Livik features compact design with diverse terrain, including lava streams and waterfalls — unique among PUBG maps."
  },
  {
    category: "Gaming & Esports",
    question: "Which Fortnite vehicle lets players drive and fly short distances?",
    options: ["Quadcrasher", "Baller", "Hoverboard", "Whiplash"],
    answer: "Baller",
    explanation: "The Baller is a rolling sphere with a grappler, allowing players to roll and swing through Fortnite's terrain."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox’s 'Tower Defense Simulator', what do players defend against?",
    options: ["Zombies", "Viruses", "Aliens", "Robots"],
    answer: "Zombies",
    explanation: "Tower Defense Simulator challenges players to set up units to fight waves of zombie enemies."
  },
  {
    category: "Gaming & Esports",
    question: "What does the Red Zone mean in PUBG?",
    options: ["Extra loot", "Zone with enemies", "Random bombing area", "Safe zone"],
    answer: "Random bombing area",
    explanation: "The Red Zone marks a randomly selected area where bombs drop, forcing players to seek shelter."
  },
  {
    category: "Gaming & Esports",
    question: "Which Free Fire mode is played in a 1v1 format?",
    options: ["Clash Squad", "Classic", "Lone Wolf", "Rush Mode"],
    answer: "Lone Wolf",
    explanation: "Lone Wolf mode is designed for intense 1v1 duels, testing individual skill and reflexes in Free Fire."
  },
  {
    category: "Gaming & Esports",
    question: "In Fortnite, what is the effect of the 'Shield Keg' item?",
    options: ["Heals only", "Grants extra speed", "Restores shields over time", "Teleports players"],
    answer: "Restores shields over time",
    explanation: "The Shield Keg creates an area-of-effect zone that restores shield to all nearby teammates gradually."
  },
  {
    category: "Gaming & Esports",
    question: "In Roblox, what does VIP often grant in games?",
    options: ["Banning powers", "Moderator role", "Special items and boosts", "Extra Robux"],
    answer: "Special items and boosts",
    explanation: "VIP passes in Roblox games usually provide exclusive perks like rare gear, pets, or faster progress."
  },
  {
    category: "Gaming & Esports",
    question: "Which game allows players to explore, build, and survive in a blocky 3D world?",
    options: ["Terraria", "Minecraft", "Rust", "ARK"],
    answer: "Minecraft",
    explanation: "Minecraft is a sandbox game where players explore, mine resources, build structures, and survive monsters."
  },
  {
    category: "Gaming & Esports",
    question: "Which agent in Valorant can heal teammates?",
    options: ["Jett", "Sage", "Phoenix", "Reyna"],
    answer: "Sage",
    explanation: "Sage is a support agent in Valorant who can heal allies and resurrect fallen teammates."
  },
  {
    category: "Gaming & Esports",
    question: "Which football game series is now rebranded from FIFA to a new name?",
    options: ["Pro Evolution Soccer", "Football Ultimate", "EA FC", "Goal Stars"],
    answer: "EA FC",
    explanation: "EA rebranded the FIFA game series to EA Sports FC starting in 2023 after ending its partnership with FIFA."
  },
  {
    category: "Gaming & Esports",
    question: "In Apex Legends, what is Wraith's special ability?",
    options: ["Healing teammates", "Teleportation", "Shield deployment", "Calling an airstrike"],
    answer: "Teleportation",
    explanation: "Wraith can create portals and teleport between locations, making her a popular and agile legend in Apex Legends."
  },
  {
    category: "Gaming & Esports",
    question: "Which popular RPG game features a vast open world with challenging bosses and was created by FromSoftware?",
    options: ["Skyrim", "Elden Ring", "Witcher 3", "Dark Souls"],
    answer: "Elden Ring",
    explanation: "Elden Ring is an open-world action RPG developed by FromSoftware, known for its tough gameplay and deep lore."
  },
  {
    category: "Gaming & Esports",
    question: "What is the main objective in Among Us?",
    options: ["Collect resources", "Kill enemies", "Build a base", "Find the impostor"],
    answer: "Find the impostor",
    explanation: "Among Us is a social deduction game where crewmates try to identify the impostor sabotaging and killing the crew."
  },
  {
    category: "Gaming & Esports",
    question: "Which character is known as the 'King of Fighters' in fighting game series?",
    options: ["Kazuya", "Ryu", "Terry Bogard", "Scorpion"],
    answer: "Terry Bogard",
    explanation: "Terry Bogard is the main protagonist of SNK's 'Fatal Fury' and appears in the 'King of Fighters' series."
  },
  {
    category: "Gaming & Esports",
    question: "What is the primary weapon type in Call of Duty: Modern Warfare?",
    options: ["Swords", "Spells", "Guns", "Bows"],
    answer: "Guns",
    explanation: "Call of Duty: Modern Warfare is a military shooter series where players use a variety of firearms in combat."
  },
  {
    category: "Gaming & Esports",
    question: "Which esport is played on Summoner’s Rift?",
    options: ["Valorant", "Dota 2", "League of Legends", "Smite"],
    answer: "League of Legends",
    explanation: "Summoner’s Rift is the main competitive map in League of Legends, a 5v5 MOBA by Riot Games."
  },
  {
    category: "Gaming & Esports",
    question: "Which survival horror game features animatronics in a pizza place?",
    options: ["Outlast", "Five Nights at Freddy's", "The Evil Within", "Silent Hill"],
    answer: "Five Nights at Freddy's",
    explanation: "In FNAF, players must survive nights in a haunted pizza place by managing doors, lights, and cameras."
  },
  {
    category: "Gaming & Esports",
    question: "In Minecraft, what tool is best used to mine obsidian?",
    options: ["Iron Pickaxe", "Wooden Pickaxe", "Diamond Pickaxe", "Stone Pickaxe"],
    answer: "Diamond Pickaxe",
    explanation: "Only Diamond (or Netherite) pickaxes can mine obsidian blocks in Minecraft."
  },
  {
    category: "Gaming & Esports",
    question: "Which game introduced the character Arthur Morgan?",
    options: ["GTA V", "Red Dead Redemption 2", "Mafia III", "L.A. Noire"],
    answer: "Red Dead Redemption 2",
    explanation: "Arthur Morgan is the main character in Rockstar's western action game Red Dead Redemption 2."
  },
  {
    category: "Gaming & Esports",
    question: "In Valorant, what type of game is it?",
    options: ["MOBA", "Battle Royale", "Tactical Shooter", "Fighting Game"],
    answer: "Tactical Shooter",
    explanation: "Valorant is a tactical 5v5 shooter combining precise aim with agent abilities, similar to CS:GO with magic."
  },
  {
    category: "Gaming & Esports",
    question: "Which Nintendo game features a kart racing competition?",
    options: ["Kirby Racing", "Zelda Riders", "Mario Kart", "Donkey Dash"],
    answer: "Mario Kart",
    explanation: "Mario Kart is a series of racing games featuring Nintendo characters, items, and unique tracks."
  },
  {
    category: "Gaming & Esports",
    question: "What’s the name of the main character in the God of War series?",
    options: ["Spartan", "Ares", "Kratos", "Atlas"],
    answer: "Kratos",
    explanation: "Kratos, the Ghost of Sparta, is the main protagonist in the God of War series, battling gods and titans."
  },
  {
    category: "Gaming & Esports",
    question: "Which mobile strategy game is known for building villages and attacking others?",
    options: ["Clash Royale", "Mobile Legends", "Clash of Clans", "Boom Beach"],
    answer: "Clash of Clans",
    explanation: "In Clash of Clans, players build villages, train troops, and raid other players for resources."
  },
  {
    category: "Gaming & Esports",
    question: "Which game lets you play as a cat in a futuristic cyberpunk world?",
    options: ["Cat's Tale", "Neon Cat World", "Meow Simulator", "Stray"],
    answer: "Stray",
    explanation: "Stray is a unique indie game where you control a stray cat exploring a neon-lit robot-inhabited world."
  },
  {
    category: "Gaming & Esports",
    question: "Which game franchise features an assassin named Ezio Auditore?",
    options: ["Hitman", "Metal Gear Solid", "Assassin’s Creed", "Thief"],
    answer: "Assassin’s Creed",
    explanation: "Ezio Auditore da Firenze is a legendary assassin featured in Assassin’s Creed II, Brotherhood, and Revelations."
  },
  {
    category: "Gaming & Esports",
    question: "Which multiplayer game features ghost hunting and spooky missions?",
    options: ["Back 4 Blood", "Ghostwire: Tokyo", "Phasmophobia", "Dead by Daylight"],
    answer: "Phasmophobia",
    explanation: "Phasmophobia is a co-op horror game where players investigate haunted locations and identify ghost types."
  },
  {
    category: "Gaming & Esports",
    question: "Which fighting game franchise includes characters like Sub-Zero and Scorpion?",
    options: ["Street Fighter", "Tekken", "Mortal Kombat", "BlazBlue"],
    answer: "Mortal Kombat",
    explanation: "Mortal Kombat is known for brutal combat and signature characters like Scorpion and Sub-Zero."
  },
  {
    category: "Music & Artists",
    question: "Which artist holds the record for most Grammy Awards won in history?",
    options: ["Beyoncé", "Michael Jackson", "Taylor Swift", "Stevie Wonder"],
    answer: "Beyoncé",
    explanation: "Beyoncé became the most awarded artist in Grammy history in 2023, surpassing the previous record of 31 wins."
  },
  {
    category: "Music & Artists",
    question: "Which band is famous for the hit song 'Bohemian Rhapsody'?",
    options: ["Queen", "The Beatles", "Pink Floyd", "Led Zeppelin"],
    answer: "Queen",
    explanation: "'Bohemian Rhapsody' is a legendary rock song released in 1975 by the British band Queen."
  },
  {
    category: "Music & Artists",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"],
    answer: "Michael Jackson",
    explanation: "Michael Jackson earned the title 'King of Pop' due to his immense global impact on music, dance, and fashion."
  },
  {
    category: "Music & Artists",
    question: "Which K-pop group released the hit song 'Dynamite'?",
    options: ["EXO", "BLACKPINK", "BTS", "TWICE"],
    answer: "BTS",
    explanation: "BTS released 'Dynamite' in 2020, making history as the first all-English song by a K-pop group to top Billboard Hot 100."
  },
  {
    category: "Music & Artists",
    question: "Which artist released the album '1989'?",
    options: ["Adele", "Katy Perry", "Taylor Swift", "Lana Del Rey"],
    answer: "Taylor Swift",
    explanation: "'1989' is a Grammy-winning pop album released by Taylor Swift in 2014, featuring hits like 'Blank Space' and 'Shake It Off'."
  },
  {
    category: "Music & Artists",
    question: "Who is the lead vocalist of the rock band Coldplay?",
    options: ["Chris Martin", "Adam Levine", "Bono", "Dave Grohl"],
    answer: "Chris Martin",
    explanation: "Chris Martin is the frontman of Coldplay, known for hits like 'Yellow', 'Fix You', and 'Viva La Vida'."
  },
  {
    category: "Music & Artists",
    question: "Which artist is known for the global hit 'Shape of You'?",
    options: ["Ed Sheeran", "Sam Smith", "Shawn Mendes", "Charlie Puth"],
    answer: "Ed Sheeran",
    explanation: "'Shape of You' is one of Ed Sheeran’s biggest hits, released in 2017 and topping charts worldwide."
  },
  {
    category: "Music & Artists",
    question: "What genre is Drake most associated with?",
    options: ["Country", "Pop", "Rap", "Jazz"],
    answer: "Rap",
    explanation: "Drake is primarily a rapper and hip-hop artist, although he often blends pop and R&B into his music."
  },
  {
    category: "Music & Artists",
    question: "Which female artist released the album '30' in 2021?",
    options: ["Adele", "Billie Eilish", "Halsey", "Doja Cat"],
    answer: "Adele",
    explanation: "Adele's album '30' marked her comeback and featured deeply personal songs about motherhood and divorce."
  },
  {
    category: "Music & Artists",
    question: "Which music group is known for the songs 'How You Like That' and 'Kill This Love'?",
    options: ["BTS", "TWICE", "BLACKPINK", "ITZY"],
    answer: "BLACKPINK",
    explanation: "BLACKPINK is one of the biggest K-pop girl groups globally, known for energetic performances and global fanbase."
  },
  {
    category: "Music & Artists",
    question: "Which Latin artist is known for hits like 'Despacito' and 'Échame la Culpa'?",
    options: ["J Balvin", "Maluma", "Luis Fonsi", "Bad Bunny"],
    answer: "Luis Fonsi",
    explanation: "Luis Fonsi is a Puerto Rican singer who gained massive fame for his global hit 'Despacito'."
  },
  {
    category: "Music & Artists",
    question: "Who was the youngest artist to win all four major Grammy categories in one year?",
    options: ["Ariana Grande", "Billie Eilish", "Olivia Rodrigo", "Lorde"],
    answer: "Billie Eilish",
    explanation: "In 2020, Billie Eilish won Best New Artist, Album, Record, and Song of the Year at age 18."
  },
  {
    category: "Music & Artists",
    question: "Which band’s farewell tour is called 'The End of the Road'?",
    options: ["Metallica", "KISS", "Aerosmith", "U2"],
    answer: "KISS",
    explanation: "KISS launched their final world tour called 'The End of the Road' starting in 2019."
  },
  {
    category: "Music & Artists",
    question: "Which DJ is known for tracks like 'Wake Me Up' and 'Levels'?",
    options: ["David Guetta", "Marshmello", "Avicii", "Calvin Harris"],
    answer: "Avicii",
    explanation: "Avicii was a Swedish DJ and producer whose EDM hits like 'Levels' defined a generation."
  },
  {
    category: "Music & Artists",
    question: "Who composed the classical piece 'Fur Elise'?",
    options: ["Beethoven", "Mozart", "Bach", "Chopin"],
    answer: "Beethoven",
    explanation: "'Für Elise' is one of Beethoven's most iconic solo piano pieces, composed in 1810."
  },
  {
    category: "Music & Artists",
    question: "Which artist's fans are known as the 'Arianators'?",
    options: ["Ariana Grande", "Dua Lipa", "Selena Gomez", "Camila Cabello"],
    answer: "Ariana Grande",
    explanation: "Ariana Grande’s fanbase proudly calls themselves 'Arianators', supporting her music and fashion globally."
  },
  {
    category: "Music & Artists",
    question: "Which rapper released the album 'The Marshall Mathers LP'?",
    options: ["Drake", "Jay-Z", "Kendrick Lamar", "Eminem"],
    answer: "Eminem",
    explanation: "Eminem’s 'The Marshall Mathers LP' is one of the best-selling rap albums ever, featuring hits like 'Stan'."
  },
  {
    category: "Music & Artists",
    question: "Which artist collaborated with Lady Gaga on the song 'Rain on Me'?",
    options: ["Nicki Minaj", "Beyoncé", "Ariana Grande", "Dua Lipa"],
    answer: "Ariana Grande",
    explanation: "Lady Gaga and Ariana Grande teamed up for the chart-topping dance-pop anthem 'Rain on Me' in 2020."
  },
  {
    category: "Music & Artists",
    question: "Who is the frontman of the band Maroon 5?",
    options: ["Chris Martin", "Brendon Urie", "Adam Levine", "Shawn Mendes"],
    answer: "Adam Levine",
    explanation: "Adam Levine is the lead singer of Maroon 5, known for hits like 'Sugar' and 'She Will Be Loved'."
  },
  {
    category: "Music & Artists",
    question: "Which K-pop girl group released the album 'Born Pink'?",
    options: ["Red Velvet", "TWICE", "BLACKPINK", "NewJeans"],
    answer: "BLACKPINK",
    explanation: "BLACKPINK’s 2022 album 'Born Pink' includes global hits like 'Shut Down' and 'Pink Venom'."
  },
  {
    category: "Music & Artists",
    question: "Which singer starred in the movie 'A Star Is Born' alongside Bradley Cooper?",
    options: ["Lady Gaga", "Adele", "Miley Cyrus", "Rihanna"],
    answer: "Lady Gaga",
    explanation: "Lady Gaga played the lead role in 'A Star Is Born' (2018), earning critical acclaim and an Oscar for Best Original Song."
  },
  {
    category: "Music & Artists",
    question: "Which British band is famous for the song 'Wonderwall'?",
    options: ["Blur", "Arctic Monkeys", "Oasis", "Radiohead"],
    answer: "Oasis",
    explanation: "'Wonderwall' is one of Oasis’s most iconic tracks and a 90s Britpop anthem."
  },
  {
    category: "Music & Artists",
    question: "Which global hit starts with the lyrics 'Hello, it's me'?",
    options: ["Someone Like You", "Hello", "Rolling in the Deep", "Easy On Me"],
    answer: "Hello",
    explanation: "Adele’s 2015 single 'Hello' opens with the lyrics 'Hello, it's me' and became a viral sensation."
  },
  {
    category: "Music & Artists",
    question: "Which K-pop boy group is known for the song 'MANIAC'?",
    options: ["ATEEZ", "TXT", "Stray Kids", "SEVENTEEN"],
    answer: "Stray Kids",
    explanation: "Stray Kids released 'MANIAC' in 2022, showcasing their unique sound and energetic performances."
  },
  {
    category: "Music & Artists",
    question: "Which artist released the viral dance hit 'Uptown Funk' with Mark Ronson?",
    options: ["Bruno Mars", "Usher", "Justin Bieber", "Pharrell Williams"],
    answer: "Bruno Mars",
    explanation: "Bruno Mars sang lead vocals on 'Uptown Funk', a 2014 hit produced by Mark Ronson."
  },
  {
    category: "Music & Artists",
    question: "Which rapper is known for the alter ego 'Slim Shady'?",
    options: ["Kanye West", "Eminem", "Lil Wayne", "Travis Scott"],
    answer: "Eminem",
    explanation: "Eminem’s alter ego 'Slim Shady' is known for his edgy, controversial lyrics and persona."
  },
  {
    category: "Music & Artists",
    question: "Which classical composer became deaf later in life but continued composing?",
    options: ["Mozart", "Bach", "Beethoven", "Tchaikovsky"],
    answer: "Beethoven",
    explanation: "Despite losing his hearing, Beethoven composed many masterpieces including the Ninth Symphony."
  },
  {
    category: "Music & Artists",
    question: "Which Canadian artist sang 'Blinding Lights'?",
    options: ["Justin Bieber", "Drake", "The Weeknd", "Shawn Mendes"],
    answer: "The Weeknd",
    explanation: "The Weeknd released 'Blinding Lights' in 2019, which became one of the most streamed songs ever."
  },
  {
    category: "Music & Artists",
    question: "Which girl group had a hit with 'Say My Name'?",
    options: ["Little Mix", "TLC", "Destiny's Child", "Spice Girls"],
    answer: "Destiny's Child",
    explanation: "'Say My Name' was a breakthrough hit for Destiny’s Child, featuring Beyoncé as lead vocalist."
  },
  {
    category: "Music & Artists",
    question: "Which artist’s real name is Stefani Joanne Angelina Germanotta?",
    options: ["Lady Gaga", "Adele", "Dua Lipa", "Halsey"],
    answer: "Lady Gaga",
    explanation: "Lady Gaga is the stage name of Stefani Germanotta, known for her theatrical style and vocal power."
  },
  {
    category: "Music & Artists",
    question: "Which music streaming platform created the viral ‘Wrapped’ feature each year?",
    options: ["Apple Music", "YouTube Music", "Amazon Music", "Spotify"],
    answer: "Spotify",
    explanation: "Spotify Wrapped shows users their most-played songs, artists, and genres at the end of each year."
  },
  {
    category: "Music & Artists",
    question: "Which pop star’s fanbase is called the ‘Swifties’?",
    options: ["Selena Gomez", "Taylor Swift", "Olivia Rodrigo", "Billie Eilish"],
    answer: "Taylor Swift",
    explanation: "‘Swifties’ are Taylor Swift’s passionate fans known for supporting her re-released albums and tours."
  },
  {
    category: "Music & Artists",
    question: "Which song by Psy became the first YouTube video to hit 1 billion views?",
    options: ["Gentleman", "Gangnam Style", "DADDY", "New Face"],
    answer: "Gangnam Style",
    explanation: "‘Gangnam Style’ by Psy went viral in 2012, becoming the first YouTube video to reach 1 billion views."
  },
  {
    category: "Music & Artists",
    question: "Which group had the worldwide hit 'I Want It That Way'?",
    options: ["NSYNC", "Backstreet Boys", "Boyz II Men", "One Direction"],
    answer: "Backstreet Boys",
    explanation: "Released in 1999, 'I Want It That Way' is Backstreet Boys’ signature song and a pop classic."
  },
  {
    category: "Music & Artists",
    question: "Which DJ often wears a marshmallow-shaped helmet?",
    options: ["Skrillex", "Zedd", "Marshmello", "Alan Walker"],
    answer: "Marshmello",
    explanation: "Marshmello is known for his white helmet and EDM hits like ‘Alone’ and ‘Happier’."
  },
  {
    category: "Music & Artists",
    question: "Which BTS member released a solo album titled ‘Jack in the Box’?",
    options: ["RM", "V", "J-Hope", "Jungkook"],
    answer: "J-Hope",
    explanation: "J-Hope released ‘Jack in the Box’ as his debut solo album in 2022, showcasing a darker, experimental sound."
  },
  {
    category: "Music & Artists",
    question: "Which reggae legend is known for songs like 'One Love' and 'Redemption Song'?",
    options: ["Peter Tosh", "Damian Marley", "Shaggy", "Bob Marley"],
    answer: "Bob Marley",
    explanation: "Bob Marley is a global icon of reggae music and a symbol of peace and resistance."
  },
  {
    category: "Music & Artists",
    question: "Which female artist had hits with 'Juice' and 'Truth Hurts'?",
    options: ["SZA", "Lizzo", "Doja Cat", "Nicki Minaj"],
    answer: "Lizzo",
    explanation: "Lizzo is known for her body-positive anthems and empowering performances, including her Grammy-winning hit ‘Truth Hurts’."
  },
  {
    category: "Music & Artists",
    question: "Which boy band was Harry Styles a part of before going solo?",
    options: ["The Vamps", "Big Time Rush", "One Direction", "5 Seconds of Summer"],
    answer: "One Direction",
    explanation: "Harry Styles was a member of One Direction before launching a successful solo music and acting career."
  },
  {
    category: "Music & Artists",
    question: "Which artist created the alter ego Sasha Fierce?",
    options: ["Nicki Minaj", "Beyoncé", "Rihanna", "Doja Cat"],
    answer: "Beyoncé",
    explanation: "Beyoncé introduced Sasha Fierce to represent her onstage persona, especially during the 'I Am... Sasha Fierce' era."
  },
  {
    category: "Music & Artists",
    question: "Which artist became a global star after the song 'Drivers License' went viral?",
    options: ["Billie Eilish", "Sabrina Carpenter", "Olivia Rodrigo", "Dove Cameron"],
    answer: "Olivia Rodrigo",
    explanation: "Olivia Rodrigo’s breakout single 'Drivers License' became a chart-topping hit and pop culture moment in 2021."
  },
  {
    category: "Music & Artists",
    question: "Which French electronic music duo was behind hits like 'Get Lucky' and 'One More Time'?",
    options: ["Daft Punk", "Justice", "Calvin Harris & David Guetta", "Disclosure"],
    answer: "Daft Punk",
    explanation: "Daft Punk were pioneers in electronic music and became iconic for their robot personas and timeless tracks."
  },
  {
    category: "Music & Artists",
    question: "Which Spanish singer had an international hit with 'Con Altura'?",
    options: ["Rosalía", "Karol G", "Shakira", "Natti Natasha"],
    answer: "Rosalía",
    explanation: "Rosalía’s genre-blending style made her a breakout Latin star, with 'Con Altura' becoming a global hit."
  },
  {
    category: "Music & Artists",
    question: "Which artist was known for his alter ego Ziggy Stardust?",
    options: ["Prince", "David Bowie", "Freddie Mercury", "Elton John"],
    answer: "David Bowie",
    explanation: "David Bowie created the Ziggy Stardust persona in the 1970s, blending glam rock and sci-fi theatrics."
  },
  {
    category: "Music & Artists",
    question: "Which Nigerian singer gained global recognition with the song 'Essence'?",
    options: ["Burna Boy", "Fireboy DML", "Rema", "Wizkid"],
    answer: "Wizkid",
    explanation: "Wizkid’s 'Essence' featuring Tems became the first Nigerian song to chart on the Billboard Hot 100."
  },
  {
    category: "Music & Artists",
    question: "Which pop star is known for the albums 'Future Nostalgia' and 'Radical Optimism'?",
    options: ["Dua Lipa", "Doja Cat", "Camila Cabello", "SZA"],
    answer: "Dua Lipa",
    explanation: "Dua Lipa’s disco-pop sound and global hits like 'Levitating' made her one of the biggest pop stars of the 2020s."
  },
  {
    category: "Music & Artists",
    question: "Which artist headlined the 2023 Super Bowl Halftime Show while pregnant?",
    options: ["Rihanna", "Shakira", "Beyoncé", "Miley Cyrus"],
    answer: "Rihanna",
    explanation: "Rihanna made a surprise pregnancy reveal during her powerful Super Bowl Halftime Show in 2023."
  },
  {
    category: "Music & Artists",
    question: "Which Canadian artist is known for the songs 'Peaches' and 'Ghost'?",
    options: ["Shawn Mendes", "Justin Bieber", "Tory Lanez", "The Weeknd"],
    answer: "Justin Bieber",
    explanation: "Justin Bieber’s 'Peaches' and 'Ghost' were chart-topping hits from his album 'Justice'."
  },
  {
    category: "Music & Artists",
    question: "Which member of BLACKPINK released the solo song 'LALISA'?",
    options: ["Rosé", "Jennie", "Jisoo", "Lisa"],
    answer: "Lisa",
    explanation: "Thai rapper and dancer Lisa released 'LALISA' as her solo debut in 2021, breaking YouTube records."
  },
  {
    category: "Music & Artists",
    question: "Which artist performed the viral hit 'Bad Habit' in 2022?",
    options: ["Steve Lacy", "Giveon", "Frank Ocean", "Tyler, The Creator"],
    answer: "Steve Lacy",
    explanation: "Steve Lacy’s 'Bad Habit' became a surprise viral hit, topping the Billboard Hot 100 in 2022."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the plural form of the word 'cactus'?",
    options: ["Cactuses", "Cacti", "Cactis", "Cactus"],
    answer: "Cacti",
    explanation: "'Cacti' is the correct plural form of 'cactus', following Latin grammatical rules."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following words is an antonym of 'optimistic'?",
    options: ["Hopeful", "Positive", "Pessimistic", "Cheerful"],
    answer: "Pessimistic",
    explanation: "'Pessimistic' is the opposite of 'optimistic', meaning to expect negative outcomes."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the word 'benevolent' mean?",
    options: ["Evil", "Kind and generous", "Silent", "Envious"],
    answer: "Kind and generous",
    explanation: "'Benevolent' describes someone who is kind, giving, and has good intentions."
  },
  {
    category: "Language & Vocabulary",
    question: "Which sentence uses the correct form of 'their', 'there', or 'they’re'?",
    options: ["Their going to the mall.", "There going to the mall.", "They’re going to the mall.", "Their going too the mall."],
    answer: "They’re going to the mall.",
    explanation: "'They’re' is a contraction of 'they are', which fits the context of the sentence."
  },
  {
    category: "Language & Vocabulary",
    question: "What is a synonym for 'rapid'?",
    options: ["Slow", "Bright", "Fast", "Heavy"],
    answer: "Fast",
    explanation: "'Rapid' means something that happens quickly or in a short time — a synonym is 'fast'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is spelled correctly?",
    options: ["Recieve", "Definately", "Accommodate", "Seperately"],
    answer: "Accommodate",
    explanation: "The correct spelling is 'accommodate', with double C and double M."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the comparative form of the adjective 'happy'?",
    options: ["Happier", "More happy", "Happyer", "Happiest"],
    answer: "Happier",
    explanation: "'Happier' is the correct comparative form used when comparing two things."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is a homophone of 'flour'?",
    options: ["Flower", "Flavor", "Flow", "Floor"],
    answer: "Flower",
    explanation: "'Flour' and 'flower' are homophones — they sound the same but have different meanings and spellings."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the prefix 'pre-' mean in English?",
    options: ["Before", "After", "During", "Against"],
    answer: "Before",
    explanation: "The prefix 'pre-' means 'before', as seen in words like 'preview' or 'prepare'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which sentence is grammatically correct?",
    options: ["He don't like pizza.", "She doesn't like pizza.", "They doesn't like pizza.", "I doesn't like pizza."],
    answer: "She doesn't like pizza.",
    explanation: "The correct form is 'doesn't' with third-person singular subjects like 'she'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word means the opposite of 'expand'?",
    options: ["Stretch", "Compress", "Grow", "Multiply"],
    answer: "Compress",
    explanation: "'Compress' means to reduce in size or volume, making it the opposite of 'expand'."
  },
  {
    category: "Language & Vocabulary",
    question: "What part of speech is the word 'quickly'?",
    options: ["Adjective", "Noun", "Verb", "Adverb"],
    answer: "Adverb",
    explanation: "'Quickly' describes how something is done, so it functions as an adverb."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is a synonym for 'ancient'?",
    options: ["Modern", "Old", "Recent", "Early"],
    answer: "Old",
    explanation: "'Ancient' and 'old' both describe something from the distant past."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the correct plural of 'analysis'?",
    options: ["Analysises", "Analysi", "Analyses", "Analysis"],
    answer: "Analyses",
    explanation: "The plural form of 'analysis' is 'analyses', following irregular noun rules."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word fits this definition: 'a word that imitates a sound'?",
    options: ["Alliteration", "Simile", "Onomatopoeia", "Metaphor"],
    answer: "Onomatopoeia",
    explanation: "Onomatopoeia refers to words like 'buzz' or 'splash' that imitate real sounds."
  },
  {
    category: "Language & Vocabulary",
    question: "Choose the correct spelling:",
    options: ["Occassion", "Occasion", "Ocasion", "Occasssion"],
    answer: "Occasion",
    explanation: "'Occasion' is the correct spelling with one 's' and two 'c's."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is an example of a conjunction?",
    options: ["Because", "Quickly", "Happiness", "Jump"],
    answer: "Because",
    explanation: "'Because' is a subordinating conjunction used to connect ideas or clauses."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following is a compound word?",
    options: ["House", "Sunlight", "Bright", "Play"],
    answer: "Sunlight",
    explanation: "'Sunlight' is made up of two words: 'sun' and 'light', making it a compound word."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the word 'ambiguous' mean?",
    options: ["Clear and simple", "Hard to hear", "Open to more than one meaning", "Extremely large"],
    answer: "Open to more than one meaning",
    explanation: "'Ambiguous' refers to something that can be interpreted in multiple ways."
  },
  {
    category: "Language & Vocabulary",
    question: "Which suffix means 'the study of'?",
    options: ["-ist", "-ous", "-logy", "-ment"],
    answer: "-logy",
    explanation: "The suffix '-logy' means 'the study of', as in biology or psychology."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the superlative form of the adjective 'good'?",
    options: ["Goodest", "Better", "Best", "Most good"],
    answer: "Best",
    explanation: "'Best' is the superlative form of 'good', used when comparing more than two things."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of these words is an example of a preposition?",
    options: ["However", "Before", "Although", "Maybe"],
    answer: "Before",
    explanation: "‘Before’ is a preposition that indicates time or position."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the root word 'bio' mean?",
    options: ["Earth", "Life", "Time", "Mind"],
    answer: "Life",
    explanation: "The root 'bio' comes from Greek and means 'life', as in biology and biography."
  },
  {
    category: "Language & Vocabulary",
    question: "Which sentence contains a simile?",
    options: [
      "The clouds were cotton balls in the sky.",
      "She ran faster than anyone.",
      "He was as brave as a lion.",
      "The wind screamed all night."
    ],
    answer: "He was as brave as a lion.",
    explanation: "A simile compares two things using 'like' or 'as'; here, bravery is compared to a lion."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the past tense of the verb 'teach'?",
    options: ["Teached", "Taught", "Teach", "Taching"],
    answer: "Taught",
    explanation: "'Taught' is the irregular past tense form of the verb 'teach'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is spelled correctly?",
    options: ["Tommorrow", "Tommorow", "Tomorrow", "Tomorow"],
    answer: "Tomorrow",
    explanation: "'Tomorrow' has only one 'm' and two 'r’s."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of these is an example of a collective noun?",
    options: ["People", "Crowd", "Children", "Person"],
    answer: "Crowd",
    explanation: "'Crowd' is a collective noun that represents a group of people."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the word 'vocabulary' mean?",
    options: [
      "The study of verbs",
      "Rules of sentence formation",
      "Words known and used by a person",
      "The origin of languages"
    ],
    answer: "Words known and used by a person",
    explanation: "'Vocabulary' refers to the set of words a person understands or uses in communication."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following is an example of an interjection?",
    options: ["Quickly", "Wow!", "Despite", "Although"],
    answer: "Wow!",
    explanation: "'Wow!' is an interjection used to express strong emotion or surprise."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the plural form of the word 'mouse'?",
    options: ["Mouses", "Mices", "Mouse", "Mice"],
    answer: "Mice",
    explanation: "'Mice' is the correct irregular plural form of 'mouse'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is a synonym for 'tiny'?",
    options: ["Huge", "Small", "Heavy", "Tall"],
    answer: "Small",
    explanation: "'Small' is a synonym for 'tiny', meaning something of little size or amount."
  },
  {
    category: "Language & Vocabulary",
    question: "What type of word is 'jumped' in the sentence: 'She jumped over the puddle'?",
    options: ["Noun", "Verb", "Adjective", "Conjunction"],
    answer: "Verb",
    explanation: "'Jumped' describes an action and is therefore a verb in this sentence."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of these words means 'fear of confined spaces'?",
    options: ["Acrophobia", "Claustrophobia", "Arachnophobia", "Hydrophobia"],
    answer: "Claustrophobia",
    explanation: "'Claustrophobia' is the fear of tight or enclosed spaces."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word fits best in this sentence: 'She is ___ than her sister'?",
    options: ["Tall", "Taller", "Tallest", "Most tall"],
    answer: "Taller",
    explanation: "Use 'taller' to compare two people, as it is the comparative form of 'tall'."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the correct term for a word with the same spelling but different meanings?",
    options: ["Homonym", "Antonym", "Synonym", "Adjective"],
    answer: "Homonym",
    explanation: "Homonyms are words that are spelled the same but have different meanings, like 'bat' (animal or sports equipment)."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is a conjunction?",
    options: ["Because", "Quick", "Suddenly", "Running"],
    answer: "Because",
    explanation: "'Because' connects two clauses and explains reason, making it a conjunction."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the suffix '-less' mean?",
    options: ["More", "With", "Without", "Small"],
    answer: "Without",
    explanation: "The suffix '-less' means 'without', as in 'hopeless' or 'fearless'."
  },
  {
    category: "Language & Vocabulary",
    question: "Choose the sentence with correct subject-verb agreement.",
    options: ["They walks to school.", "He go to work.", "She runs every morning.", "We is ready."],
    answer: "She runs every morning.",
    explanation: "The subject 'she' agrees with the verb 'runs' — third-person singular."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of these is an example of alliteration?",
    options: ["The wind was strong.", "Peter Piper picked a peck of pickled peppers.", "He ran quickly.", "She was tired and hungry."],
    answer: "Peter Piper picked a peck of pickled peppers.",
    explanation: "Alliteration is the repetition of initial consonant sounds, as seen in this tongue twister."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the correct past participle of 'begin'?",
    options: ["Began", "Beginned", "Begun", "Begins"],
    answer: "Begun",
    explanation: "'Begun' is the past participle form of 'begin', used with helping verbs like 'has' or 'have'."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the collective noun for a group of lions?",
    options: ["Pack", "Flock", "Pride", "Swarm"],
    answer: "Pride",
    explanation: "A group of lions is called a 'pride', a unique collective noun used only for lions."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following words is a synonym for 'funny'?",
    options: ["Boring", "Amusing", "Plain", "Quiet"],
    answer: "Amusing",
    explanation: "'Amusing' is a synonym for 'funny', meaning something that makes you laugh or smile."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word completes this analogy: Cat is to Kitten as Dog is to ___?",
    options: ["Puppy", "Cub", "Foal", "Chick"],
    answer: "Puppy",
    explanation: "A 'kitten' is a baby cat, and a 'puppy' is a baby dog — making it the correct analogy."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of these words is an antonym of 'noisy'?",
    options: ["Loud", "Silent", "Busy", "Harsh"],
    answer: "Silent",
    explanation: "'Silent' means quiet or without sound, making it the opposite of 'noisy'."
  },
  {
    category: "Language & Vocabulary",
    question: "What is the meaning of the idiom 'break the ice'?",
    options: [
      "To literally crack frozen water",
      "To start a conversation in a social setting",
      "To ruin a party",
      "To ignore someone"
    ],
    answer: "To start a conversation in a social setting",
    explanation: "The idiom 'break the ice' means to initiate conversation or ease tension in a group."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following is a proper noun?",
    options: ["River", "Teacher", "India", "Mountain"],
    answer: "India",
    explanation: "'India' is a specific name of a country and is therefore a proper noun."
  },
  {
    category: "Language & Vocabulary",
    question: "What does the prefix 'anti-' mean?",
    options: ["With", "Against", "Before", "Under"],
    answer: "Against",
    explanation: "The prefix 'anti-' means 'against', as seen in words like 'antivirus' or 'antiwar'."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is an example of a gerund?",
    options: ["Run", "Running", "Ran", "Runs"],
    answer: "Running",
    explanation: "'Running' acts as a noun in sentences like 'Running is fun', making it a gerund."
  },
  {
    category: "Language & Vocabulary",
    question: "Which of the following is an example of an oxymoron?",
    options: ["Pretty ugly", "Really funny", "Extremely cold", "Big house"],
    answer: "Pretty ugly",
    explanation: "'Pretty ugly' is an oxymoron — a figure of speech combining contradictory terms."
  },
  {
    category: "Language & Vocabulary",
    question: "Which word is spelled correctly?",
    options: ["Febuary", "Februrary", "February", "Febbruary"],
    answer: "February",
    explanation: "'February' is the correct spelling of the second month of the year."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is famous for inventing sushi?",
    options: ["China", "Thailand", "South Korea", "Japan"],
    answer: "Japan",
    explanation: "Sushi originated in Japan and is known globally for its rice, seaweed, and raw fish components."
  },
  {
    category: "Food & Cuisine",
    question: "What is the main ingredient in traditional guacamole?",
    options: ["Tomato", "Avocado", "Cucumber", "Lettuce"],
    answer: "Avocado",
    explanation: "Guacamole is a Mexican dip made primarily from mashed avocados."
  },
  {
    category: "Food & Cuisine",
    question: "Which Italian dish is made of layers of pasta, sauce, and cheese?",
    options: ["Ravioli", "Spaghetti", "Lasagna", "Gnocchi"],
    answer: "Lasagna",
    explanation: "Lasagna consists of stacked pasta layers with sauce, meat, and cheese baked together."
  },
  {
    category: "Food & Cuisine",
    question: "Which fruit is used to make traditional wine?",
    options: ["Apple", "Grape", "Orange", "Cherry"],
    answer: "Grape",
    explanation: "Wine is typically made by fermenting crushed grapes."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is known for the dish 'paella'?",
    options: ["Portugal", "Greece", "Spain", "Italy"],
    answer: "Spain",
    explanation: "Paella is a famous Spanish dish made with rice, saffron, and a variety of seafood or meat."
  },
  {
    category: "Food & Cuisine",
    question: "What type of pastry is used to make a croissant?",
    options: ["Shortcrust", "Phyllo", "Choux", "Puff pastry"],
    answer: "Puff pastry",
    explanation: "Croissants are made from puff pastry, which gives them their flaky texture."
  },
  {
    category: "Food & Cuisine",
    question: "Which spice is known as the world’s most expensive by weight?",
    options: ["Cinnamon", "Cardamom", "Saffron", "Vanilla"],
    answer: "Saffron",
    explanation: "Saffron is extremely labor-intensive to harvest, making it the most expensive spice by weight."
  },
  {
    category: "Food & Cuisine",
    question: "What is tofu made from?",
    options: ["Rice", "Soybeans", "Almonds", "Chickpeas"],
    answer: "Soybeans",
    explanation: "Tofu is made by coagulating soy milk, which is derived from soybeans."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is the origin of the baguette?",
    options: ["Belgium", "Germany", "France", "Austria"],
    answer: "France",
    explanation: "The baguette is a classic French bread known for its long shape and crispy crust."
  },
  {
    category: "Food & Cuisine",
    question: "What type of food is 'kimchi'?",
    options: ["Pickled vegetable", "Fried rice", "Noodle soup", "Grilled meat"],
    answer: "Pickled vegetable",
    explanation: "Kimchi is a traditional Korean side dish made of fermented vegetables, usually cabbage and radish."
  },
  {
    category: "Food & Cuisine",
    question: "What is the main ingredient in hummus?",
    options: ["Lentils", "Chickpeas", "Soybeans", "Potatoes"],
    answer: "Chickpeas",
    explanation: "Hummus is a creamy Middle Eastern spread made primarily from blended chickpeas."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is known for the dish 'pho'?",
    options: ["China", "Vietnam", "Thailand", "Indonesia"],
    answer: "Vietnam",
    explanation: "Pho is a traditional Vietnamese soup consisting of broth, rice noodles, herbs, and meat."
  },
  {
    category: "Food & Cuisine",
    question: "What dairy product is traditionally used to make cheesecake?",
    options: ["Sour cream", "Butter", "Cream cheese", "Milk"],
    answer: "Cream cheese",
    explanation: "Cream cheese is the primary ingredient that gives cheesecake its smooth, rich texture."
  },
  {
    category: "Food & Cuisine",
    question: "Which fruit has its seeds on the outside?",
    options: ["Blueberry", "Banana", "Strawberry", "Grape"],
    answer: "Strawberry",
    explanation: "Strawberries are unique because their seeds are located on the outer surface of the fruit."
  },
  {
    category: "Food & Cuisine",
    question: "What is the national dish of the United Kingdom?",
    options: ["Fish and chips", "Roast beef", "Cottage pie", "Chicken tikka masala"],
    answer: "Fish and chips",
    explanation: "Fish and chips, a classic dish of fried fish and potato fries, is considered a British staple."
  },
  {
    category: "Food & Cuisine",
    question: "Which grain is used to make traditional risotto?",
    options: ["Jasmine rice", "Arborio rice", "Basmati rice", "Brown rice"],
    answer: "Arborio rice",
    explanation: "Arborio rice is a starchy short-grain rice that gives risotto its creamy texture."
  },
  {
    category: "Food & Cuisine",
    question: "What is the main ingredient in miso soup?",
    options: ["Soy paste", "Fish sauce", "Seaweed", "Coconut milk"],
    answer: "Soy paste",
    explanation: "Miso soup is made from miso paste, which is a fermented soybean product."
  },
  {
    category: "Food & Cuisine",
    question: "Which dessert is made of egg whites and sugar, then baked until crisp?",
    options: ["Macaron", "Meringue", "Éclair", "Croissant"],
    answer: "Meringue",
    explanation: "Meringue is a sweet treat made by whipping egg whites and sugar, then baking at low temperature."
  },
  {
    category: "Food & Cuisine",
    question: "What is the primary ingredient in the Indian dish 'dal'?",
    options: ["Paneer", "Lentils", "Yogurt", "Rice"],
    answer: "Lentils",
    explanation: "'Dal' is a term used for various Indian dishes made primarily from lentils or split pulses."
  },
  {
    category: "Food & Cuisine",
    question: "Which cheese is traditionally used on a Margherita pizza?",
    options: ["Parmesan", "Cheddar", "Mozzarella", "Ricotta"],
    answer: "Mozzarella",
    explanation: "Mozzarella is the classic Italian cheese used for its melty texture and mild flavor on Margherita pizza."
  },
  {
    category: "Food & Cuisine",
    question: "Which continent is the origin of chocolate?",
    options: ["Europe", "Africa", "South America", "Asia"],
    answer: "South America",
    explanation: "Chocolate originated in ancient Mesoamerica, primarily in regions of present-day Mexico and South America."
  },
  {
    category: "Food & Cuisine",
    question: "Which type of pasta is shaped like small rice grains and often used in soups?",
    options: ["Fusilli", "Orzo", "Penne", "Rigatoni"],
    answer: "Orzo",
    explanation: "Orzo is a rice-shaped pasta often used in Mediterranean dishes and soups."
  },
  {
    category: "Food & Cuisine",
    question: "What sweet treat is made from sugar or honey and nuts, often served in the Middle East?",
    options: ["Baklava", "Taffy", "Nougat", "Turkish delight"],
    answer: "Nougat",
    explanation: "Nougat is a chewy confection made with sugar or honey, roasted nuts, and sometimes egg whites."
  },
  {
    category: "Food & Cuisine",
    question: "Which vegetable is traditionally used in making sauerkraut?",
    options: ["Spinach", "Lettuce", "Cabbage", "Cauliflower"],
    answer: "Cabbage",
    explanation: "Sauerkraut is made by fermenting finely cut raw cabbage in brine."
  },
  {
    category: "Food & Cuisine",
    question: "Which cuisine is known for using a clay oven called a 'tandoor'?",
    options: ["Chinese", "Indian", "Mexican", "Italian"],
    answer: "Indian",
    explanation: "Indian cuisine often uses a 'tandoor' to cook dishes like naan and tandoori chicken."
  },
  {
    category: "Food & Cuisine",
    question: "What is the main ingredient in a traditional Greek tzatziki sauce?",
    options: ["Avocado", "Yogurt", "Mustard", "Tomato"],
    answer: "Yogurt",
    explanation: "Tzatziki is a Greek sauce made from yogurt, cucumber, garlic, and herbs."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is the origin of the spicy dish 'rendang'?",
    options: ["India", "Malaysia", "Indonesia", "Sri Lanka"],
    answer: "Indonesia",
    explanation: "Rendang is a slow-cooked Indonesian dish made with beef, coconut milk, and spices."
  },
  {
    category: "Food & Cuisine",
    question: "What is the name of the dish made from raw fish, often served in thin slices in Japanese cuisine?",
    options: ["Sashimi", "Nigiri", "Tempura", "Udon"],
    answer: "Sashimi",
    explanation: "Sashimi consists of thinly sliced raw fish or seafood, served without rice."
  },
  {
    category: "Food & Cuisine",
    question: "Which country is famous for its blue cheese called 'Roquefort'?",
    options: ["France", "Germany", "Switzerland", "Belgium"],
    answer: "France",
    explanation: "Roquefort is a French blue cheese made from sheep’s milk and aged in limestone caves."
  },
  {
    category: "Food & Cuisine",
    question: "Which global soft drink brand was originally invented as a medicinal tonic in the U.S.?",
    options: ["Sprite", "Pepsi", "Coca-Cola", "Dr Pepper"],
    answer: "Coca-Cola",
    explanation: "Coca-Cola was created in 1886 by John Pemberton as a medicinal drink containing coca leaves and kola nuts."
  },
  {
    category: "Food & Cuisine",
    question: "Which fast food chain is known for its 'Whopper' burger?",
    options: ["McDonald's", "KFC", "Burger King", "Wendy's"],
    answer: "Burger King",
    explanation: "Burger King's signature burger is the 'Whopper', known for its flame-grilled patty."
  },
  {
    category: "Food & Cuisine",
    question: "Which Asian fruit is known for its strong smell and is often banned in public places?",
    options: ["Lychee", "Durian", "Jackfruit", "Rambutan"],
    answer: "Durian",
    explanation: "Durian is known as the 'king of fruits' in Southeast Asia, but has a very strong and divisive odor."
  },
  {
    category: "Food & Cuisine",
    question: "Which dish typically contains rice, beans, meat, and plantains and is popular in many Latin American countries?",
    options: ["Bibimbap", "Biryani", "Gallo pinto", "Feijoada"],
    answer: "Feijoada",
    explanation: "Feijoada is a Brazilian stew made with black beans, pork or beef, and often served with rice and plantains."
  },
  {
    category: "Food & Cuisine",
    question: "Which nut is used to make marzipan?",
    options: ["Walnut", "Almond", "Pistachio", "Cashew"],
    answer: "Almond",
    explanation: "Marzipan is a sweet paste made from ground almonds and sugar, used in baking and candies."
  },
  {
    category: "Food & Cuisine",
    question: "Which drink is traditionally consumed in Argentina using a metal straw and shared socially?",
    options: ["Espresso", "Matcha", "Yerba Mate", "Green tea"],
    answer: "Yerba Mate",
    explanation: "Yerba Mate is a caffeine-rich herbal tea traditionally sipped from a gourd with a metal straw in South America."
  },
  {
    category: "Food & Cuisine",
    question: "What is the primary ingredient in the Middle Eastern dish 'falafel'?",
    options: ["Rice", "Chickpeas", "Meat", "Lentils"],
    answer: "Chickpeas",
    explanation: "Falafel is made by grinding chickpeas or fava beans, forming them into balls, and deep-frying them."
  },
  {
    category: "Food & Cuisine",
    question: "Which traditional Scottish dish consists of sheep's heart, liver, and lungs?",
    options: ["Haggis", "Black pudding", "Shepherd's pie", "Steak and kidney pie"],
    answer: "Haggis",
    explanation: "Haggis is a Scottish delicacy made of minced sheep organs mixed with oats and spices, traditionally cooked in a sheep’s stomach."
  },
  {
    category: "Food & Cuisine",
    question: "Which sweet pastry is known for its spiral shape and cinnamon flavor?",
    options: ["Donut", "Croissant", "Cinnamon roll", "Strudel"],
    answer: "Cinnamon roll",
    explanation: "Cinnamon rolls are pastries made with rolled dough, cinnamon sugar, and often topped with icing."
  },
  {
    category: "Food & Cuisine",
    question: "Which type of cuisine is known for dishes like tacos, enchiladas, and mole sauce?",
    options: ["Italian", "Mexican", "Greek", "Indian"],
    answer: "Mexican",
    explanation: "Mexican cuisine is famous for its bold flavors and dishes like tacos, enchiladas, and mole."
  },
  {
    category: "Food & Cuisine",
    question: "Which vitamin is most abundant in citrus fruits?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answer: "Vitamin C",
    explanation: "Citrus fruits like oranges and lemons are rich in Vitamin C, which helps boost the immune system."
  },
  {
    category: "Food & Cuisine",
    question: "What type of meat is traditionally used in a Greek gyro?",
    options: ["Beef", "Lamb", "Chicken", "Pork"],
    answer: "Lamb",
    explanation: "A traditional Greek gyro is made with seasoned lamb meat, though modern versions may use pork or chicken."
  },
  {
    category: "Food & Cuisine",
    question: "Which sauce is made with basil, pine nuts, Parmesan, garlic, and olive oil?",
    options: ["Pesto", "Alfredo", "Carbonara", "Marinara"],
    answer: "Pesto",
    explanation: "Pesto is an Italian sauce originating from Genoa, made with basil and other fresh ingredients."
  },
  {
    category: "Food & Cuisine",
    question: "Which dessert is known as Italy’s 'pick-me-up'?",
    options: ["Tiramisu", "Cannoli", "Gelato", "Panna cotta"],
    answer: "Tiramisu",
    explanation: "Tiramisu means 'pick me up' in Italian and is made with espresso, mascarpone, and cocoa."
  },
  {
    category: "Food & Cuisine",
    question: "What food is traditionally eaten during the Lunar New Year for good luck in Chinese culture?",
    options: ["Dumplings", "Pizza", "Churros", "Hot dogs"],
    answer: "Dumplings",
    explanation: "Dumplings symbolize wealth and are commonly eaten during Chinese Lunar New Year celebrations."
  },
  {
    category: "Food & Cuisine",
    question: "Which tropical fruit has a rough spiky exterior and sweet yellow flesh?",
    options: ["Papaya", "Pineapple", "Mango", "Passion fruit"],
    answer: "Pineapple",
    explanation: "Pineapples are tropical fruits known for their spiky shell and juicy sweet interior."
  },
  {
    category: "Food & Cuisine",
    question: "Which beverage is made by fermenting apples?",
    options: ["Cider", "Beer", "Vodka", "Kombucha"],
    answer: "Cider",
    explanation: "Cider is an alcoholic beverage made from the fermentation of apple juice."
  },
  {
    category: "Food & Cuisine",
    question: "What does the term 'al dente' mean in cooking pasta?",
    options: ["Overcooked", "Undercooked", "To the tooth (firm)", "Mushy"],
    answer: "To the tooth (firm)",
    explanation: "'Al dente' means the pasta is cooked to be firm when bitten, a common Italian preference."
  },
  {
    category: "Food & Cuisine",
    question: "Which Asian country is the origin of the dish 'bibimbap'?",
    options: ["Japan", "Vietnam", "Thailand", "South Korea"],
    answer: "South Korea",
    explanation: "Bibimbap is a Korean mixed rice dish topped with vegetables, meat, and gochujang (red chili paste)."
  },
  {
    category: "Food & Cuisine",
    question: "What food item is traditionally thrown in celebrations like weddings in Italy?",
    options: ["Bread", "Rice", "Cheese", "Grapes"],
    answer: "Rice",
    explanation: "Rice is traditionally thrown at weddings to symbolize fertility and prosperity."
  },
  {
    category: "Food & Cuisine",
    question: "Which popular spread is made from ground sesame seeds?",
    options: ["Tahini", "Guacamole", "Nutella", "Baba ghanoush"],
    answer: "Tahini",
    explanation: "Tahini is a creamy Middle Eastern spread made from ground sesame seeds, often used in hummus."
  },
  {
    category: "Mathematics & Logic",
    question: "What is 15% of 80?",
    options: ["10", "12", "14", "16"],
    answer: "12",
    explanation: "15% of 80 = (15/100) × 80 = 12."
  },
  {
    category: "Mathematics & Logic",
    question: "If x + 7 = 13, what is the value of x?",
    options: ["5", "6", "7", "8"],
    answer: "6",
    explanation: "Subtract 7 from both sides: x = 13 - 7 = 6."
  },
  {
    category: "Mathematics & Logic",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: "6",
    explanation: "The prefix 'hexa-' means six; a hexagon has 6 sides."
  },
  {
    category: "Mathematics & Logic",
    question: "What comes next in the sequence: 2, 4, 8, 16, ___?",
    options: ["20", "24", "30", "32"],
    answer: "32",
    explanation: "Each number is multiplied by 2; 16 × 2 = 32."
  },
  {
    category: "Mathematics & Logic",
    question: "What is the mean (average) of 3, 7, and 10?",
    options: ["6.5", "7", "8", "10"],
    answer: "6.5",
    explanation: "(3 + 7 + 10) ÷ 3 = 20 ÷ 3 = 6.67 (rounded to two decimals)."
  },
  {
    category: "Mathematics & Logic",
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: ["40", "13", "30", "43"],
    answer: "40",
    explanation: "Area of a rectangle = length × width = 8 × 5 = 40."
  },
  {
    category: "Mathematics & Logic",
    question: "What is the solution to 2x = 18?",
    options: ["8", "9", "10", "11"],
    answer: "9",
    explanation: "Divide both sides by 2: x = 18 ÷ 2 = 9."
  },
  {
    category: "Mathematics & Logic",
    question: "Which shape has only one pair of parallel sides?",
    options: ["Square", "Trapezium", "Rectangle", "Rhombus"],
    answer: "Trapezium",
    explanation: "A trapezium has exactly one pair of parallel sides."
  },
  {
    category: "Mathematics & Logic",
    question: "What is the mode of the numbers: 4, 2, 2, 3, 4, 4, 5?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation: "Mode is the number that appears most frequently. 4 appears 3 times."
  },
  {
    category: "Mathematics & Logic",
    question: "You buy 3 pens for $2 each. How much do you spend in total?",
    options: ["$5", "$6", "$7", "$8"],
    answer: "$6",
    explanation: "3 pens × $2 = $6 total."
  },
  {
    category: "Mathematics & Logic",
    question: "Find the missing number: 5, 10, 20, 40, ___?",
    options: ["60", "70", "80", "100"],
    answer: "80",
    explanation: "Each number is multiplied by 2. 40 × 2 = 80."
  },
  {
    category: "Mathematics & Logic",
    question: "A coin is flipped once. What is the probability of getting heads?",
    options: ["1", "1/4", "1/2", "2/3"],
    answer: "1/2",
    explanation: "There are 2 equally likely outcomes: heads or tails. So probability = 1/2."
  },
  {
    category: "Mathematics & Logic",
    question: "If a train travels 60 kilometers in 1.5 hours, what is its average speed?",
    options: ["40 km/h", "45 km/h", "60 km/h", "90 km/h"],
    answer: "40 km/h",
    explanation: "Speed = Distance ÷ Time = 60 ÷ 1.5 = 40 km/h."
  },
  {
    category: "Mathematics & Logic",
    question: "What number comes next: 1, 4, 9, 16, ___?",
    options: ["25", "30", "20", "22"],
    answer: "25",
    explanation: "These are perfect squares: 1², 2², 3², 4², so next is 5² = 25."
  },
  {
    category: "Mathematics & Logic",
    question: "You roll a 6-sided die. What is the probability of rolling a 3?",
    options: ["1/3", "1/2", "1/6", "2/6"],
    answer: "1/6",
    explanation: "Each face has equal chance, so probability = 1/6."
  },
  {
    category: "Mathematics & Logic",
    question: "A shop offers 25% discount on a $200 item. What is the final price?",
    options: ["$175", "$160", "$150", "$125"],
    answer: "$150",
    explanation: "25% of 200 = $50, so discounted price = 200 - 50 = $150."
  },
  {
    category: "Mathematics & Logic",
    question: "What comes next in this pattern: A, C, F, J, O, ___?",
    options: ["S", "T", "U", "V"],
    answer: "U",
    explanation: "Letter positions: +2, +3, +4, +5... (A→C→F→J→O→U = +6)."
  },
  {
    category: "Mathematics & Logic",
    question: "If you save $20 every week, how much will you have after 8 weeks?",
    options: ["$120", "$140", "$160", "$180"],
    answer: "$160",
    explanation: "$20 × 8 weeks = $160 saved."
  },
  {
    category: "Mathematics & Logic",
    question: "The average (mean) of 10, 20, and x is 25. What is x?",
    options: ["35", "40", "45", "50"],
    answer: "45",
    explanation: "(10 + 20 + x) ÷ 3 = 25 → 30 + x = 75 → x = 45."
  },
  {
    category: "Mathematics & Logic",
    question: "You have 3 red balls and 2 blue balls. What is the probability of picking a red ball?",
    options: ["1/2", "3/5", "2/5", "3/6"],
    answer: "3/5",
    explanation: "Total = 5 balls, red = 3, so probability = 3/5."
  },
  {
    category: "Mathematics & Logic",
    question: "What comes next in this series: 2, 3, 5, 8, 12, ___?",
    options: ["15", "17", "18", "20"],
    answer: "17",
    explanation: "The pattern adds 1, 2, 3, 4... Next is 12 + 5 = 17."
  },
  {
    category: "Mathematics & Logic",
    question: "If the probability of rain tomorrow is 0.7, what is the probability it won’t rain?",
    options: ["0.1", "0.2", "0.3", "0.4"],
    answer: "0.3",
    explanation: "Total probability = 1. If rain is 0.7, then no rain = 1 - 0.7 = 0.3."
  },
  {
    category: "Mathematics & Logic",
    question: "You earn $12 per hour. How much do you make in a 40-hour work week?",
    options: ["$480", "$500", "$460", "$520"],
    answer: "$480",
    explanation: "$12 × 40 = $480."
  },
  {
    category: "Mathematics & Logic",
    question: "Which number is missing: 81, 27, 9, ___, 1?",
    options: ["4", "3", "2", "5"],
    answer: "3",
    explanation: "Each number is divided by 3. 9 ÷ 3 = 3."
  },
  {
    category: "Mathematics & Logic",
    question: "You toss two coins. What is the probability both are heads?",
    options: ["1/4", "1/3", "1/2", "2/3"],
    answer: "1/4",
    explanation: "Outcomes = HH, HT, TH, TT. Only HH = 1/4 chance."
  },
  {
    category: "Mathematics & Logic",
    question: "You have $100. You spend 40% of it. How much do you have left?",
    options: ["$40", "$50", "$60", "$70"],
    answer: "$60",
    explanation: "40% of 100 = $40 spent → Remaining = 100 - 40 = $60."
  },
  {
    category: "Mathematics & Logic",
    question: "A taxi charges a base fare of $3 and $2 per km. What is the cost for 5 km?",
    options: ["$10", "$11", "$12", "$13"],
    answer: "$13",
    explanation: "Base fare = $3, Distance fare = 5 × $2 = $10 → Total = $13."
  },
  {
    category: "Mathematics & Logic",
    question: "In a class of 20 students, 12 are girls. What percentage are boys?",
    options: ["30%", "40%", "50%", "60%"],
    answer: "40%",
    explanation: "20 - 12 = 8 boys → (8/20) × 100 = 40%."
  },
  {
    category: "Mathematics & Logic",
    question: "Which number fits: 11, 13, 17, 19, ___?",
    options: ["21", "23", "25", "27"],
    answer: "23",
    explanation: "These are consecutive prime numbers. 23 follows 19."
  },
  {
    category: "Mathematics & Logic",
    question: "You invest $500 at a simple interest rate of 10% for 2 years. How much interest will you earn?",
    options: ["$50", "$100", "$75", "$110"],
    answer: "$100",
    explanation: "Simple Interest = P × R × T / 100 = 500 × 10 × 2 / 100 = $100."
  },
  {
    category: "Mathematics & Logic",
    question: "A jacket is originally priced at $80 and is on sale for 25% off. What is the discount amount?",
    options: ["$15", "$18", "$20", "$25"],
    answer: "$20",
    explanation: "25% of $80 = 0.25 × 80 = $20 discount."
  },
  {
    category: "Mathematics & Logic",
    question: "You drive 150 kilometers in 3 hours. What is your average speed?",
    options: ["45 km/h", "50 km/h", "55 km/h", "60 km/h"],
    answer: "50 km/h",
    explanation: "Speed = Distance ÷ Time = 150 ÷ 3 = 50 km/h."
  },
  {
    category: "Mathematics & Logic",
    question: "If you earn $2500 monthly and spend $1500, what percentage of your income do you save?",
    options: ["40%", "30%", "50%", "60%"],
    answer: "40%",
    explanation: "Savings = $1000 → (1000/2500) × 100 = 40%."
  },
  {
    category: "Mathematics & Logic",
    question: "You borrow $1000 at 5% annual simple interest for 2 years. What is the total interest?",
    options: ["$50", "$100", "$150", "$200"],
    answer: "$100",
    explanation: "Simple Interest = (1000 × 5 × 2) / 100 = $100."
  },
  {
    category: "Mathematics & Logic",
    question: "If you buy 3 books at $12 each and pay with a $50 note, how much change do you get?",
    options: ["$12", "$14", "$15", "$16"],
    answer: "$14",
    explanation: "3 × $12 = $36 → $50 - $36 = $14 change."
  },
  {
    category: "Mathematics & Logic",
    question: "A recipe calls for 2 cups of flour. You want to make half the amount. How much flour is needed?",
    options: ["0.5 cups", "1 cup", "1.5 cups", "2 cups"],
    answer: "1 cup",
    explanation: "Half of 2 cups = 1 cup."
  },
  {
    category: "Mathematics & Logic",
    question: "You pay $60 for 4 movie tickets. What is the cost per ticket?",
    options: ["$12", "$15", "$16", "$18"],
    answer: "$15",
    explanation: "$60 ÷ 4 tickets = $15 per ticket."
  },
  {
    category: "Mathematics & Logic",
    question: "You travel 120 km in 2 hours and 30 minutes. What is your average speed?",
    options: ["48 km/h", "50 km/h", "55 km/h", "60 km/h"],
    answer: "48 km/h",
    explanation: "2 hours 30 mins = 2.5 hours → 120 ÷ 2.5 = 48 km/h."
  },
  {
    category: "Mathematics & Logic",
    question: "If you buy one item for $30 and another for $45, how much do you pay with 10% tax included?",
    options: ["$82.50", "$85.00", "$79.20", "$87.00"],
    answer: "$82.50",
    explanation: "Total = $75 → Tax = 10% of 75 = $7.50 → Total = $82.50."
  },
  {
    category: "Mathematics & Logic",
    question: "A mobile plan costs $25/month. What is the total cost for one year?",
    options: ["$250", "$275", "$300", "$325"],
    answer: "$300",
    explanation: "$25 × 12 months = $300."
  },
  {
    category: "Mathematics & Logic",
    question: "You fill 40 liters of fuel costing $1.20 per liter. How much do you pay?",
    options: ["$48", "$50", "$52", "$54"],
    answer: "$48",
    explanation: "40 × 1.20 = $48."
  },
  {
    category: "Mathematics & Logic",
    question: "If a pizza is cut into 8 equal slices and you eat 3, what fraction is left?",
    options: ["5/8", "3/8", "1/2", "4/8"],
    answer: "5/8",
    explanation: "You ate 3 out of 8, so 8 - 3 = 5 slices left → 5/8."
  },
  {
    category: "Mathematics & Logic",
    question: "Your electricity bill is $90. If you reduce your usage by 20%, how much will you save?",
    options: ["$15", "$16", "$18", "$20"],
    answer: "$18",
    explanation: "20% of $90 = 0.20 × 90 = $18 saved."
  },
  {
    category: "Mathematics & Logic",
    question: "A loan of $2000 is taken at 8% simple interest for 1 year. What is the total amount to repay?",
    options: ["$2080", "$2160", "$2200", "$2240"],
    answer: "$2160",
    explanation: "Interest = (2000 × 8 × 1) / 100 = $160 → Total = $2160."
  },
  {
    category: "Mathematics & Logic",
    question: "If a train departs at 2:15 PM and arrives at 4:45 PM, how long is the journey?",
    options: ["2 hours", "2 hours 30 minutes", "2 hours 15 minutes", "1 hour 45 minutes"],
    answer: "2 hours 30 minutes",
    explanation: "From 2:15 PM to 4:45 PM = 2 hours 30 minutes."
  },
  {
    category: "Mathematics & Logic",
    question: "A smartphone is priced at $600 and is offered at 10% discount. What is the final price?",
    options: ["$540", "$550", "$560", "$580"],
    answer: "$540",
    explanation: "10% of 600 = $60 → 600 - 60 = $540."
  },
  {
    category: "Mathematics & Logic",
    question: "You work 6 days a week and earn $80 per day. What is your weekly income?",
    options: ["$460", "$480", "$500", "$520"],
    answer: "$480",
    explanation: "6 × $80 = $480/week."
  },
  {
    category: "Mathematics & Logic",
    question: "You receive a 15% tip on a $40 bill. What is the tip amount?",
    options: ["$5.50", "$6.00", "$6.50", "$7.00"],
    answer: "$6.00",
    explanation: "15% of $40 = 0.15 × 40 = $6."
  },
  {
    category: "Mathematics & Logic",
    question: "If 1 USD = 0.85 EUR, how much is $100 in euros?",
    options: ["€85", "€90", "€95", "€100"],
    answer: "€85",
    explanation: "$100 × 0.85 = €85."
  },
  {
    category: "Mathematics & Logic",
    question: "A person spends 2 hours on weekdays and 3 hours on weekends studying. How many hours per week?",
    options: ["13", "14", "15", "16"],
    answer: "16",
    explanation: "Weekdays: 5 × 2 = 10, Weekends: 2 × 3 = 6 → Total = 16 hours/week."
  },


]


export default questions;

