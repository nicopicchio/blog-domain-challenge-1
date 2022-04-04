const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	const createdUser1 = await prisma.user.create({
		data: {
			username: 'nicotech',
			email: 'nicotech@email.com',
			profile: {
				create: {
					firstName: 'Nico',
					lastName: 'Picchio',
					bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
					profilePhotoURL:
						'https://avatars.githubusercontent.com/u/70696511?v=4',
				},
			},
		},
	});

	const createdUser2 = await prisma.user.create({
		data: {
			username: 'codingmike',
			email: 'codingmike@email.com',
			profile: {
				create: {
					firstName: 'Mike',
					lastName: 'Herron',
					bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
					profilePhotoURL:
						'https://www.chilliconnect.com/wp-content/uploads/MikeH_final1.jpg',
				},
			},
		},
	});

	const createdUser3 = await prisma.user.create({
		data: {
			username: 'freewilly',
			email: 'freewilly@email.com',
			profile: {
				create: {
					firstName: 'William',
					lastName: 'Cowen',
					bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
					profilePhotoURL:
						'https://static.wikia.nocookie.net/warner-bros-entertainment/images/c/c6/Free_Willy_Willy_the_Orca.jpg/revision/latest?cb=20200528213759',
				},
			},
		},
	});

	const createdUser4 = await prisma.user.create({
		data: {
			username: 'benhur',
			email: 'benhur@email.com',
			profile: {
				create: {
					firstName: 'Ben',
					lastName: 'Corbin',
					bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
					profilePhotoURL:
						'https://m.media-amazon.com/images/M/MV5BMTk1OTU2NjQ1NV5BMl5BanBnXkFtZTcwOTEyNTQ5Ng@@._V1_.jpg',
				},
			},
		},
	});

	const createdPost1 = await prisma.post.create({
		data: {
			postTitle: 'Lorem ipsum',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus rutrum arcu, et placerat metus finibus at. Morbi tincidunt ipsum non leo tincidunt accumsan. In semper ex ut diam fermentum, sit amet commodo lectus suscipit. Etiam eu consectetur leo. Maecenas non ligula ullamcorper, posuere ex in, gravida nisl. Vestibulum sed interdum lacus. Donec vulputate lacinia justo, at rhoncus dolor tristique non. Etiam maximus, libero eu elementum fermentum, dui dui tincidunt nisl, ac tristique velit sem eget ligula. Nunc nec nulla quis metus placerat imperdiet. Cras sit amet quam a augue molestie faucibus. Nam eu blandit arcu, sed tristique risus. Morbi quis ligula eleifend lectus pellentesque congue. Phasellus scelerisque a nisl non aliquet.',
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
		},
	});

	const createdPost2 = await prisma.post.create({
		data: {
			postTitle: 'Aenean accumsan',
			content:
				'Aenean accumsan mattis libero sit amet tincidunt. Pellentesque in orci a lacus egestas lacinia. Quisque quis sem sit amet nibh tincidunt malesuada et in metus. Nam quis sodales enim. Aliquam et congue lectus, nec maximus dolor. Ut id efficitur nisl. Curabitur pulvinar accumsan dictum. Cras nec faucibus lacus. Phasellus pulvinar felis id enim elementum blandit. In porttitor porttitor elit sed lobortis. Aliquam eget consectetur ipsum. Integer scelerisque fermentum justo, a sagittis nunc commodo a. Proin mollis finibus tincidunt. Mauris eu aliquam turpis, eu laoreet lectus. Suspendisse nec nunc ornare, consectetur purus at, porta massa. Quisque rutrum convallis ante, sed scelerisque sem lobortis id.',
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
		},
	});

	const createdPost3 = await prisma.post.create({
		data: {
			postTitle: 'Pellentesque tincidunt',
			content:
				'Pellentesque tincidunt finibus auctor. Nam dapibus leo dapibus tempus porta. Ut at rutrum justo. Maecenas sollicitudin euismod gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse eget massa semper, euismod turpis id, rhoncus sem. Vivamus vulputate dui eu eros egestas, vel fermentum arcu finibus. Vivamus turpis augue, ultrices id ultricies a, tincidunt non eros. In quis rutrum ipsum, et bibendum elit. Cras sed elementum augue. Cras dictum, turpis id congue sagittis, enim ex lacinia massa, non facilisis lacus dui non ex. Donec mattis suscipit aliquet. Donec nunc elit, ultrices id odio vitae, dictum gravida arcu. Aliquam vel semper nisi, vel faucibus risus.',
			user: {
				connect: {
					id: createdUser4.id,
				},
			},
		},
	});

	const createdComment1 = await prisma.comment.create({
		data: {
			content: 'Hey Mike, great blog post!',
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
			post: {
				connect: {
					id: createdPost2.id,
				},
			},
		},
	});

	const createdComment2 = await prisma.comment.create({
		data: {
			content: 'Yeah boiiiiiiiiiiiii!!!',
			user: {
				connect: {
					id: createdUser4.id,
				},
			},
			post: {
				connect: {
					id: createdPost1.id,
				},
			},
		},
	});

	const createdComment3 = await prisma.comment.create({
		data: {
			content: 'Ben, you savage!!!',
			user: {
				connect: {
					id: createdUser3.id,
				},
			},
			post: {
				connect: {
					id: createdPost3.id,
				},
			},
		},
	});

	const replyToComment1 = await prisma.comment.create({
		data: {
			content: 'Thank you!',
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
			comment: {
				connect: {
					id: createdComment1.id,
				},
			},
			post: {
				connect: {
					id: createdPost2.id,
				},
			},
		},
	});

	const replyToComment2 = await prisma.comment.create({
		data: {
			content: 'I am just being honest',
			user: {
				connect: {
					id: createdUser4.id,
				},
			},
			comment: {
				connect: {
					id: createdComment3.id,
				},
			},
			post: {
				connect: {
					id: createdPost3.id,
				},
			},
		},
	});

	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
