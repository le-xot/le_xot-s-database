<template>
  <div class="card-container">
    <NCard title="Моя Визитка" size="large" class="card">
      <NSpace vertical align="center">
        <NButton
          v-for="link in links"
          :key="link.name"
          type="primary"
          ghost
          size="large"
          class="link-button"
          @click="() => openLink(link.url)"
        >
          <NIcon class="icon">
            <component :is="link.icon" size="30" />
          </NIcon>
          <span class="link-text">{{ link.name }}</span>
        </NButton>
      </NSpace>
    </NCard>
  </div>
</template>

<script lang="ts" setup>
import { Gamepad2, Github, MessageCircle, Send, Twitch, Youtube } from 'lucide-vue-next'
import { NButton, NCard, NIcon, NSpace } from 'naive-ui'
import { ref } from 'vue'

interface Link {
  name: string
  icon: any
  url: string
}

const links = ref<Link[]>([
  { name: 'GitHub', icon: Github, url: 'https://github.com/your-username' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/your-username' },
  { name: 'Steam', icon: Gamepad2, url: 'https://steamcommunity.com/id/your-username' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/c/your-channel' },
  { name: 'Twitch', icon: Twitch, url: 'https://www.twitch.tv/your-username' },
  { name: 'Discord', icon: MessageCircle, url: 'https://discordapp.com/users/your-username' },
])

function openLink(url: string) {
  window.open(url, '_blank')
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f0f2f5, #dbe0e4);
}

.card {
  max-width: 500px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.link-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.link-button:hover {
  background-color: #f5f7fa;
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.icon {
  color: #007bff;
}

.link-text {
  color: #333;
}
</style>
