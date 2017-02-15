var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BucketSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title not provided'],
		minlength: [5, 'Title must be at least 5 characters in length'],
		maxlength: [100, 'Description must be less than 100 characters in length']
	},
	desc: {
		type: String,
		required: [true, 'Description not provided'],
		minlength: [10, 'Description must be at least 10 characters in length'],
		maxlength: [250, 'Description must be less than 250 characters in length']
	},
	done: {
		type: Boolean,
		required: [true, 'Doneness not provided']
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'User not provided']
	},
	_tag: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	}
}, {
	timestamps: true
});

mongoose.model('Bucket', BucketSchema);
