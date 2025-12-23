  // Define the content for each language
  const content = {
    english: `
      CNNs are a type of deep learning algorithm designed for image recognition. They work by:
      <ul class="list-disc ml-5 mt-2">
        <li>Convolution: Detecting patterns in small image sections using filters.</li>
        <li>Pooling: Reducing image size while preserving important features.</li>
        <li>Flattening: Converting the processed image into a long vector.</li>
        <li>Fully Connected Layers: Classifying the image based on learned patterns.</li>
      </ul>
      <p class="mt-4">
        Essentially, CNNs learn to recognize objects by breaking down images into simpler components and gradually building up complex understanding. Think of it like teaching a computer to recognize a cat by showing it thousands of cat pictures.
      </p>`,
    hindi: `
      CNNs एक प्रकार का गहन शिक्षण एल्गोरिदम है जो छवि मान्यता के लिए डिज़ाइन किया गया है। वे इस प्रकार कार्य करते हैं:
      <ul class="list-disc ml-5 mt-2">
        <li>Convolution: छोटे छवि अनुभागों में पैटर्न का पता लगाने के लिए फ़िल्टर का उपयोग करना।</li>
        <li>Pooling: महत्वपूर्ण विशेषताओं को बनाए रखते हुए छवि के आकार को कम करना।</li>
        <li>Flattening: प्रोसेस की गई छवि को एक लंबे वेक्टर में परिवर्तित करना।</li>
        <li>Fully Connected Layers: सीखे गए पैटर्न के आधार पर छवि की वर्गीकृत करना।</li>
      </ul>
      <p class="mt-4">
        मूल रूप से, CNNs छबियों को सरल घटकों में तोड़कर और धीरे-धीरे जटिल समझ को निर्माण करके वस्तुओं को पहचानना सीखते हैं। इसे इस तरह सोचें जैसे आप एक कंप्यूटर को हजारों कैट चित्र दिखाकर पहचानने के लिए सिखा रहे हैं।
      </p>`,
    gujarati: `
      CNNs એક પ્રકારનું ગહન શીખણ એલ્ગોરિધમ છે જે છબી માન્યતાને માટે ડિઝાઇન કરવામાં આવ્યું છે. તે આ રીતે કાર્ય કરે છે:
      <ul class="list-disc ml-5 mt-2">
        <li>Convolution: નાના છબી વિભાગોમાં પેટર્ન શોધવા માટે ફિલ્ટરનો ઉપયોગ કરવો.</li>
        <li>Pooling: મહત્વપૂર્ણ લક્ષણોને જાળવી રાખીને છબીના કદને ઘટાડવું.</li>
        <li>Flattening: પ્રોસેસ કરેલી છબીને લાંબા વેક્ટર માં ફેરવવું.</li>
        <li>Fully Connected Layers: શીખેલ પેટર્નના આધાર પર છબીની વર્ગીકરણ કરવું.</li>
      </ul>
      <p class="mt-4">
        મૂળભૂત રીતે, CNNs છબીઓને સરળ ઘટકોથી તોડીને અને ધીમે ધીમે જટિલ સમજણ બનાવવાથી વસ્તુઓને ઓળખવા શીખે છે. આ રીતે વિચાર કરો કે તમે એક કમ્પ્યુટરને હજારોથી સેતુની છબીઓ બતાવીને ઓળખવા માટે શીખવી રહ્યા છો.
      </p>`
  };

  // Function to update the content
  function updateContent(language) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = content[language];

    // Optional: Highlight the active button
    document.querySelectorAll('.language-button').forEach(button => {
      button.classList.remove('bg-green-600');
      button.classList.add('bg-green-500');
    });
    document.querySelector(`button[onclick="updateContent('${language}')"]`).classList.add('bg-green-600');
  }

  // Set default language on page load
  window.onload = () => updateContent('english');
