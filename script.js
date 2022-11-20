let arr = [` I just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.`,

    `My grief counselor died. He was so good, I don’t even care.`,
    ` Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.`,

    `A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!”`,
    ` As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.`,

    `I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.`,
    ` The doctor gave me some cream for my skin rash. He said I was a sight for psoriasis.`,
    ` Don’t challenge Death to a pillow fight. Unless you’re prepared for the reaper cushions.`,
    `  I don’t have a carbon footprint. I just drive everywhere.`]
console.log(arr[5]);
let a = document.getElementById("para")
let b =0
a.innerText = arr[Math.floor(Math.random() * 10)]
function clickk() {
    console.log("clicked");
    b = Math.floor(Math.random() * 9)
    a.innerText = arr[b];
}
function share() {
    navigator.clipboard.writeText(arr[b])
    if (navigator.share) {
        navigator.share({
          title: 'Joke',
          text: arr[b],
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    console.log(arr[b]);
    // alert("Text Copied")
}