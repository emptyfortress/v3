const rows = [
	{ color: 'blue', done: true, otvet: false, contr: false, time: true,
		child: [
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: false, otvet: false, contr: false, time: false,
				child: [
					{ color: 'grey', done: false, otvet: false, contr: false, time: false,
					},
					{ color: 'blue', done: false, otvet: false, contr: true, time: false,
						child: [
							{ color: 'blue', done: false, otvet: true, contr: false, time: false,
								child: [
									{ color: 'blue', done: false, otvet: true, contr: false, time: false, },
									{ color: 'blue', done: false, otvet: false, contr: true, time: false, },
									{ color: 'blue', done: false, otvet: false, contr: false, time: true, },
									{ color: 'grey', done: false, otvet: false, contr: false, time: false, },
									{ color: 'grey', done: false, otvet: false, contr: true, time: false, },
									{ color: 'grey', done: false, otvet: false, contr: false, time: false, },
									{ color: 'blue', done: false, otvet: false, contr: false, time: false, },
								]
							},
							{ color: 'blue', done: true, otvet: false, contr: false, time: true,
							},
						]
					},
					{ color: 'green', done: true, otvet: true, contr: true, time: false,
					},
					{ color: 'blue', done: false, otvet: false, contr: false, time: false,
					},
					{ color: 'blue', done: false, otvet: false, contr: false, time: false,
					},
					{ color: 'grey', done: false, otvet: false, contr: true, time: false,
					},
				]},
			{ color: 'blue', done: false, otvet: false, contr: true, time: true,
			},
			{ color: 'grey', done: false, otvet: false, contr: false, time: false,
			},
			{ color: 'grey', done: false, otvet: true, contr: false, time: false,
				child: [
					{ color: 'blue', done: false, otvet: true, contr: false, time: false,
					},
					{ color: 'green', done: true, otvet: true, contr: false, time: false,
					},
					{ color: 'blue', done: false, otvet: true, contr: false, time: false,
					},
					{ color: 'grey', done: false, otvet: true, contr: false, time: false,
					},
				]
			},
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
				child: [
					{ color: 'blue', done: false, otvet: true, contr: false, time: false,
					},
					{ color: 'grey', done: false, otvet: true, contr: false, time: false,
					},
				]
			},
		]
		,
	},
	{ color: 'green', done: true, otvet: true, contr: false, time: false,
		child: [
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: true, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'green', done: false, otvet: true, contr: false, time: false,
			},
		]
		,
	},
	{ color: 'blue', done: false, otvet: false, contr: true, time: true,
	},
	{ color: 'blue', done: false, otvet: false, contr: false, time: false, 
		child: [
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'grey', done: true, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
		]
		,
	},
	{ color: 'blue', done: false, otvet: true, contr: true, time: false, 
		child: [
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'green', done: true, otvet: true, contr: false, time: false,
			},
			{ color: 'blue', done: false, otvet: true, contr: false, time: false,
			},
			{ color: 'grey', done: false, otvet: true, contr: false, time: false,
			},
		]
		,
	},
	{ color: 'green', done: true, otvet: false, contr: true, time: false, 
	},
]

export { rows,
}
