<script lang="ts" setup>
import { DiscordIcon, GitHubIcon, SteamIcon, TelegramIcon, TwitchIcon, YouTubeIcon } from 'vue3-simple-icons'

interface Link {
  name: string
  icon: any
  color: string
  url: string
}

const links: Link[] = [
  { name: 'Telegram', icon: TelegramIcon, color: '#26A5E4', url: 'https://t.me/le_xot' },
  { name: 'Discord', icon: DiscordIcon, color: '#5865F2', url: 'https://discord.gg/zgZHHnkkP5' },
  { name: 'Twitch', icon: TwitchIcon, color: '#9146FF', url: 'https://www.twitch.tv/le_xot' },
  { name: 'YouTube', icon: YouTubeIcon, color: '#FF0000', url: 'https://www.youtube.com/@le_xot' },
  { name: 'Steam', icon: SteamIcon, color: '#000000', url: 'https://steamcommunity.com/id/le_xot' },
  { name: 'GitHub', icon: GitHubIcon, color: '#181717', url: 'https://github.com/le-xot' },
]
</script>

<template>
  <div class="container">
    <h4 class="title">
      Ссылочки Лешота
    </h4>
    <div class="container__items">
      <img class="logo" src="/images/lexot.jpg" alt="Пажилой енот на своей даче под Рублевкой">
      <div class="buttons">
        <a
          v-for="link in links"
          :key="link.name"
          :style="{ backgroundColor: link.color }"
          class="button"
          :href="link.url"
        >
          <component
            :is="link.icon"
            class="button__logo"
            size="32px"
          />
          <span class="button_text">{{ link.name }}</span>
        </a>
      </div>
      <a class="button button--large">
        Подвальчик Лешотика!
      </a>
    </div>
  </div>
</template>

<style scoped>
  button{
    display: block;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  .container{
    background-color: rgb(24 24 28);
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: #ffffff;
  }

  .container__items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 25rem;
  }

  .title{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }

  .logo{
    border-radius: 2rem;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .buttons{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .button{
    min-height: 52px;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    fill: #ffffff;
    padding: .5rem 1rem;
    background: #209852;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .025em;
    text-align: center;
    border-radius: .5rem;
    border: 2px solid #ffffff3e;
    transition: .3s ease-in-out;
  }

  .button:hover{
    filter: brightness(85%);
  }

  .button--large{
    width: 100%;
  }

  .button_text{
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    .container {
      padding: 5rem;
    }

    .container__items {
      gap: 0.5rem;
      max-width: 100%;
    }

    .title {
      font-size: 1.5rem;
    }

    .logo {
      border-radius: 1rem;
    }

    .buttons {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .button {
      min-height: 52px;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      fill: #ffffff;
      padding: .5rem 1rem;
      background: #209852;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: .025em;
      text-align: center;
      border-radius: .5rem;
      border: 2px solid #ffffff3e;
      transition: .3s ease-in-out;
    }

    .button_text {
      font-size: 0.875rem;
    }
  }
</style>
