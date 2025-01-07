function handlePost() {
    alert("Your post has been submitted!");
}

function changeLanguage() {
    const language = document.getElementById("language").value;

    if (language === "hi") {
        document.getElementById("share-your-thoughts").innerText = "अपने विचार साझा करें";
        document.getElementById("post-button").innerText = "पोस्ट करें";
        document.getElementById("financial-independence-title").innerText = "आर्थिक स्वतंत्रता का निर्माण";
        document.getElementById("financial-independence-description").innerText =
            "“वित्तीय साक्षरता सशक्तिकरण की दिशा में पहला कदम है। यहां अपनी टिप्स और सफलता की कहानियाँ साझा करें!”";
        document.getElementById("community-support-title").innerText = "उद्यमियों के लिए सामुदायिक समर्थन";
        document.getElementById("community-support-description").innerText =
            "“आइए हम एक दूसरे की मदद करें और व्यापार में आई समस्याओं और उनके समाधानों पर चर्चा करें।”";
        document.getElementById("budgeting-title").innerText = "बजट बनाने के टिप्स";
        document.getElementById("budgeting-description").innerText =
            "“अपने खर्चों को बचाने और प्रभावी ढंग से प्रबंधित करने की बेहतरीन रणनीतियाँ साझा करें।”";
        document.getElementById("home-link").innerText = "होम";
        document.getElementById("start-discussion-link").innerText = "चर्चा शुरू करें";
        document.getElementById("profile-link").innerText = "प्रोफाइल";
    } else {
        document.getElementById("share-your-thoughts").innerText = "Share Your Thoughts";
        document.getElementById("post-button").innerText = "Post";
        document.getElementById("financial-independence-title").innerText = "Building Financial Independence";
        document.getElementById("financial-independence-description").innerText =
            "“Financial literacy is the first step to empowerment. Share your tips and success stories here!”";
        document.getElementById("community-support-title").innerText = "Community Support for Entrepreneurs";
        document.getElementById("community-support-description").innerText =
            "“Let's help each other grow by discussing challenges and solutions faced in business.”";
        document.getElementById("budgeting-title").innerText = "Budgeting Tips";
        document.getElementById("budgeting-description").innerText =
            "“Share your best strategies for saving and managing daily expenses effectively.”";
        document.getElementById("home-link").innerText = "Home";
        document.getElementById("start-discussion-link").innerText = "Start Discussion";
        document.getElementById("profile-link").innerText = "Profile";
    }
}
