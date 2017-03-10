//
//  Test.m
//  nodeforum
//
//  Created by mubin on 1/3/17.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Test.h"
//#import "UICountingLabel.h"

@interface Test()
@property(nonatomic,strong)UIButton *bt;
//@property(nonatomic,strong)UICountingLabel *label;
@end

@implementation Test
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (instancetype)init{
  if (self=[super init]) {
    _bt = [UIButton new];
    _bt.frame = CGRectMake(0, 0, 100, 100);
    [_bt addTarget:self action:@selector(btClick:) forControlEvents:UIControlEventTouchUpInside];
    _bt.backgroundColor = [UIColor greenColor];
//    _label.method = UILabelCountingMethodEaseOut;
//    _label = [[UICountingLabel alloc]initWithFrame:CGRectMake(0, 0, 200, 30)];
//    [_label countFrom:0 to:300 withDuration:10];
    
    
//    [self addSubview:_label];
    [self addSubview:_bt];
  }
  return self;
}

-(void)btClick:(UIButton *)bt{
  _onClick(@{@"target":@"123"});
}

- (void)setTitle:(NSString *)title{
  if (!_title) {
    _title = title;
    _bt.titleLabel.text = title;
    [_bt setTitle:title forState:UIControlStateNormal];
    
  }
}
@end
