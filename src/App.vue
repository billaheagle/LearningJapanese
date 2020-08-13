<template>
	<v-app class="grey lighten-4">
		<v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
			<v-list dense>
				<template v-for="item in items">
					<v-list-group v-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>
									{{ item.text }}
								</v-list-item-title>
							</v-list-item-content>
						</template>
						<v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.action">
							<v-list-item-action v-if="child.icon">
								<v-icon>{{ child.icon }}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>
									{{ child.text }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>
					<v-list-item v-else :key="item.text" link :to="item.action">
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>
								{{ item.text }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app :color="color" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title style="width: 300px;" class="ml-0 pl-4">
				<span class="font-weight-black">{{text.title}}</span>
			</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
		<Alert />
		<v-footer app :color="color" dark>
			<span>{{text.developer}} &copy; {{text.release}}</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		props: {
			source: String,
		},
		components: {
			Alert: () => import( /* webpackChunkName: "alert" */ '@/components/AlertComponent.vue')
		},
		data: () => ({
			color: 'green lighten-1',
			drawer: null,
			text: {
				title: 'LEARNING JAPANESE',
				developer: '@mutashimbillah7',
				release: 2020
			},
			items: [
				{ icon: 'mdi-home', text: 'Homepage', action: '/'},
				{ icon: 'mdi-information', text: 'Introduction', action: '/introduction'},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Hiragana',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'Basic Hiragana', action: '/hiragana/basic-hiragana'},
						{ icon: 'mdi-circle-medium', text: 'Hiragana to Romaji', action: '/hiragana/hiragana-romaji'},
						{ icon: 'mdi-circle-medium', text: 'Romaji to Hiragana', action: '/hiragana/romaji-hiragana'},
					],
				},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Katakana',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'Basic Katakana', action: '/katakana/basic-katakana'},
						{ icon: 'mdi-circle-medium', text: 'Katakana to Romaji', action: '/katakana/katakana-romaji'},
						{ icon: 'mdi-circle-medium', text: 'Romaji to Katakana', action: '/katakana/romaji-katakana'},
					],
				},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Dictionary N5',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'List of Words', action: '/dictionary-n5/list-of-words'},
						{ icon: 'mdi-circle-medium', text: 'New Words', action: '/dictionary-n5/new-words'},
						{ icon: 'mdi-circle-medium', text: 'List of Kanji', action: '/dictionary-n5/list-of-kanji'},
						{ icon: 'mdi-circle-medium', text: 'Practice Words', action: '/dictionary-n5/practice-words'},
						{ icon: 'mdi-circle-medium', text: 'Practice New Words', action: '/dictionary-n5/practice-new-words'},
						{ icon: 'mdi-circle-medium', text: 'Step by Step Words', action: '/dictionary-n5/step-by-step-words'},
					],
				},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Dictionary N4',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'List of Words', action: '/dictionary-n4/list-of-words'},
						{ icon: 'mdi-circle-medium', text: 'New Words', action: '/dictionary-n4/new-words'},
						{ icon: 'mdi-circle-medium', text: 'List of Kanji', action: '/dictionary-n4/list-of-kanji'},
						{ icon: 'mdi-circle-medium', text: 'Practice Words', action: '/dictionary-n4/practice-words'},
						{ icon: 'mdi-circle-medium', text: 'Practice New Words', action: '/dictionary-n4/practice-new-words'},
						{ icon: 'mdi-circle-medium', text: 'Step by Step Words', action: '/dictionary-n4/step-by-step-words'},
					],
				},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Dictionary N3',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'List of Words', action: '/dictionary-n3/list-of-words'},
						{ icon: 'mdi-circle-medium', text: 'New Words', action: '/dictionary-n3/new-words'},
						{ icon: 'mdi-circle-medium', text: 'List of Kanji', action: '/dictionary-n3/list-of-kanji'},
						{ icon: 'mdi-circle-medium', text: 'Practice Words', action: '/dictionary-n3/practice-words'},
						{ icon: 'mdi-circle-medium', text: 'Practice New Words', action: '/dictionary-n3/practice-new-words'},
						{ icon: 'mdi-circle-medium', text: 'Step by Step Words', action: '/dictionary-n3/step-by-step-words'},
					],
				},
				{
					icon: 'mdi-chevron-up',
					'icon-alt': 'mdi-chevron-down',
					text: 'Quiz',
					model: false,
					children: [
						{ icon: 'mdi-circle-medium', text: 'Number', action: '/quiz/number'},
					],
				},
			],
		}),
	};
</script>