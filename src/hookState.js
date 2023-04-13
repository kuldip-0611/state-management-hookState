import {hookstate} from '@hookstate/core';

export const counterState =hookstate({
    total_Money:0,
    expense:0,
    income:0,
    expense_description:[],
    income_decription:[]

});