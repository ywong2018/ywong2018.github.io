function SumNum()
{
var sumValue
a=eval(shuke.value);
b=eval(wenhua.value);
if (isNaN(a))
{a=0}
if (isNaN(b))
{b=0}
sumValue = a*2.5*0.6+b*0.4;
self['zonghefen'].value =sumValue;
return 1;
}
