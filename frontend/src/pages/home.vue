<template>
  <div class="container">
    <h4 class="title">
      Ссылочки Лешота
    </h4>
    <div class="container__items">
      <img class="logo" src="/images/lexot.jpg" alt="Пажилой енот на своей даче под Рублевкой">
      <div class="buttons">
        <button
          v-for="link in links"
          :key="link.name"
          :style="{ backgroundColor: link.color }"
          class="button"
          @click="() => openLink(link.url)"
        >
          <component
            :is="link.icon"
            class="button__logo"
            size="32px"
          />
          <span class="button__text">{{ link.name }}</span>
        </button>
      </div>
      <button class="button button--large">
        Подвальчик Лешотика!
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DiscordIcon, GitHubIcon, SteamIcon, TelegramIcon, TwitchIcon, YouTubeIcon } from 'vue3-simple-icons'

interface Link {
  name: string
  icon: any
  color: string
  url: string
}

const links: Link[] = [
  { name: 'Telegram', icon: TelegramIcon, color: '#26A5E4', url: 'https://t.me/your-username' },
  { name: 'Discord', icon: DiscordIcon, color: '#5865F2', url: 'https://discordapp.com/users/your-username' },
  { name: 'YouTube', icon: YouTubeIcon, color: '#FF0000', url: 'https://www.youtube.com/c/your-channel' },
  { name: 'Twitch', icon: TwitchIcon, color: '#9146FF', url: 'https://www.twitch.tv/your-username' },
  { name: 'GitHub', icon: GitHubIcon, color: '#181717', url: 'https://github.com/you-pidor' },
  { name: 'Steam', icon: SteamIcon, color: '#000000', url: 'https://steamcommunity.com/id/your-username' },
]

function openLink(url: string) {
  window.open(url, '_blank')
}
</script>

<style scoped>
  button{
    display: block;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  .container{
    overflow: hidden;
    width: 100%;
    height: 100%;

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

    display: flex;
    align-items: center;
    gap: 1rem;

    fill: #ffffff;

    padding: .5rem 1rem;

    background: #7c1eae;

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

  .button__text{
    font-size: 1rem;
    text-align: center;
  }
</style>
