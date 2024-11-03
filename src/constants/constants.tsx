export const carouselTags = ['burger', 'curry', 'dumplings', 'macncheese', 'pizza', 'schnitzel', 'tomato-salad'];

export function formDataToObject(formData: any) {
    const obj: any = {};
    formData.forEach((value: any, key: any) => {
      if (obj[key]) {
        if (Array.isArray(obj[key])) {
          obj[key].push(value);
        } else {
          obj[key] = [obj[key], value];
        }
      } else {
        obj[key] = value;
      }
    });
    return obj;
  }