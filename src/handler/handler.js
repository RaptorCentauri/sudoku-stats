const handler = {
	get: (target, property) => {
		try {
			const prop = {
				isMethod: typeof target[property] === `function`,
				name: property.substring(0, 3),
				value: property.substring(3),
			}

			if (prop.isMethod) {
				const originalMethod = target[property]
				prop.return = (...args) => originalMethod.apply(target, args)
			} else {
				switch (prop.name) {
					case `row`:
						prop.return = target.getRow(prop.value)
						break
					case `col`:
						prop.return = target.getColumn(prop.value)
						break
					case `box`:
						prop.return = target.getBox(prop.value)
						break
					default:
						throw new Error(`${property} is not a valid property name`)
				}
			}

			return prop.return
		} catch (error) {
			console.error(error)
		}
	},
}

export default handler
