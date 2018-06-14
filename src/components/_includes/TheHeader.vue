<template>
    <div>
        <ul class="menu align-center">
            <li>
                <router-link :to="{ name: 'user-profile' }">Profile</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'games-list' }">Games</router-link>
            </li>
            <li>
                <router-link to="/">Highest scores</router-link>
            </li>
        </ul>
    </div>
</template>