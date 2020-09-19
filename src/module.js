console.log('Module')

async function start() {
	return await Promise.resolve('asyncfgfhg working')
}

start().then(console.log)
