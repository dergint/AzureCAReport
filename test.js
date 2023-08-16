const options = {
	authProvider,
};

const client = Client.init(options);

let messages = await client.api('/me/messages')
	.select('sender,subject')
	.get();