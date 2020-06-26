Vue.component('tab-login', {
	props: ['currenttemplate'],
	template: 	`<div>
					<table>
						<th></th>
						<th></th>
						
						<tr>
							<td><input v-model="enteredUsername"></input></td>
							<td><input type="password" v-model="enteredPassword" @change="passwordChange"></input></td>
						</tr>
						<tr>
							<td style="text-align:center">Username</td>
							<td style="text-align:center">Password</td>
						</tr>
						<tr>
							<td colspan=2>
								<div class="container">
									<div class="center">
										<button style="width:100%" v-on:click="loginButtonClick">Login</button>
									</div>
								</div>
							</td>
						</tr>
					</table>
				</div>`
})
Vue.component('tab-home', {
	props: ['currenttemplate'],
	template: 	`<div>
					Home Component
				</div>`
})
Vue.component('tab-about', {
	props: ['currenttemplate'],
	template: 	`<div>
					About Component
				</div>`
})
Vue.component('tab-contact', {
	props: ['currenttemplate'],
	template: 	`<div>
					Contact Component
				</div>`
})

Vue.component('header-item', {
	props: ['text',
			'currentTab'],
	template: 	`<div>
					<button 
						v-on:click="$emit('updatetab')">{{text}}
					</button>
				</div>`
})

var app = new Vue({ 
    el: '#app',
    data: {
		username: 'admin',
		password: 'password',
		
		enteredUsername: '',
		enteredPassword: '',
		
		login: false,
		
        message: 'Success',
		testMessage: 'yo',
		title:'this is a title',
		seen:false,
		
		currentTab: 'Home',
		tabs: [
			{text: 'Home', component: 'home'},
			{text: 'Login', component: 'login'},
			{text: 'About Us', component: 'about'},
			{text: 'Contact Us', component: 'contact'}
		],
		
		todos: [
		  { text: 'Learn JavaScript', meow:'don\'t learn javascript' },
		  { text: 'Learn Vue', meow:'don\'t learn vue' },
		  { text: 'Build something awesome', meow:'don\'t build something awesome' }
		]
    },
	methods:{
		loginButtonClick: function(){
			this.message="Success"
			this.login = true
		},
		passwordChange: function(){
			this.message="No"
		}
	},
	computed: {
		currentTabComponent: function(){
			message = "hey";
			return "tab-" + this.currentTab.toLowerCase();
		}
	}
});