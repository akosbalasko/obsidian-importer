import { NoteData } from '../../../models/NoteData';
import * as P from '../placeholders/tags-array-placeholders';

import { applyTemplateOnBlock } from './apply-template-on-block';
import { getTemplateBlockSettings } from './get-templateblock-settings';

export const applyTagsArrayTemplate = (noteData: NoteData, inputText: string, check: Function): string => {
	const tags = (noteData.tags) 
		? JSON.stringify(noteData.tags.split(' '))
		: undefined;
	
	const tagsTemplateSettings = getTemplateBlockSettings(inputText, check, P, tags);

	return applyTemplateOnBlock(tagsTemplateSettings);
};
