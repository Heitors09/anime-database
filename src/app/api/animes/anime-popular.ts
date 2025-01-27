import { supabase } from "@/services/supabase";



export const fetchPopular = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const popularAnimeInfo = [
        {
          id: 1,
          banner: 'https://images8.alphacoders.com/108/1081458.jpg',
          name: 'Shingeki no Kyojin',
          description: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.',
          platforms: ['Crunchyroll', 'Hulu', 'Netflix', 'Funimation', 'Disney+'],
        },
        {
          id: 2,
          banner: 'https://images2.alphacoders.com/153/thumb-1920-153252.jpg',
          name: 'Death Note',
          description: 'Light Yagami is an ace student with great prospects—and hes bored out of his mind. But after an encounter with a strange shinigami, he finds himself with a notebook that can kill anyone—if the conditions are right. The only way to stop the Death Note is to write its name in it. But when Light discovers the notebooks power, he decides to use it to create a world where crime doesnt exist. But when a detective with a personal vendetta against Light catches on to his secret, the two must race to find the notebook before it falls into the wrong hands.',
          platforms: ['Crunchyroll', 'Netflix'],
        },
        {
          id: 3,
          banner: 'https://images7.alphacoders.com/862/thumb-1920-862106.jpg',
          name: 'Fullmetal Alchemist: Brotherhood',
          description: 'After a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can restore them - the legendary Philosopher\'s Stone. The brothers journey across the country, facing dangerous enemies and uncovering a nationwide conspiracy that challenges everything they believe about the world and alchemy itself. As they dig deeper into the mystery, they discover dark secrets about their past and the true nature of the Philosopher\'s Stone.',
          platforms: ['Crunchyroll'],
        },
        {
          id: 4,
          banner: 'https://images6.alphacoders.com/791/thumb-1920-791100.jpg',
          name: 'Hunter x Hunter',
          description: 'Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger. During his journey, Gon meets various other Hunters and also encounters the paranormal. The story follows Gon and his friends as they face challenges, grow stronger, and learn what it truly means to be a Hunter in a vast and mysterious world.',
          platforms: ['Crunchyroll',  'Netflix'],
        }
      ]
      resolve(popularAnimeInfo)
    }, 1000)
  })
}  